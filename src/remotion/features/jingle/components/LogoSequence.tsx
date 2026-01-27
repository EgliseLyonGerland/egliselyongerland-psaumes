import { makeTransform, rotate, scale, translateX } from "@remotion/animation-utils";
import { evolvePath, reversePath } from "@remotion/paths";
import clsx from "clsx";
import { AbsoluteFill, Easing, interpolate, Sequence, useCurrentFrame } from "remotion";
import { durationInFrames, endAt } from "../config";

const frontPaths = [
  reversePath(
    "M188.645 138.866c5.173-17.596 6.471-36.625 3.071-55.912-4.965-28.16-19.153-52.375-38.91-70.093-12.504 23.406-17.554 51.014-12.59 79.173 4.966 28.159 19.154 52.375 38.91 70.092",
  ),
  reversePath(
    "M226.664 188.645c17.597 5.173 36.626 6.471 55.913 3.071 28.16-4.965 52.375-19.153 70.093-38.91-23.406-12.504-51.014-17.554-79.174-12.589-28.158 4.965-52.375 19.153-70.092 38.908",
  ),
  reversePath(
    "M176.885 226.664c-5.173 17.597-6.47 36.626-3.07 55.913 4.965 28.16 19.153 52.375 38.91 70.093 12.504-23.406 17.554-51.014 12.589-79.174-4.966-28.158-19.154-52.375-38.909-70.092",
  ),
  reversePath(
    "M138.866 176.885c-17.596-5.173-36.626-6.47-55.912-3.07-28.16 4.965-52.375 19.153-70.093 38.909 23.406 12.504 51.014 17.555 79.173 12.59 28.159-4.966 52.375-19.154 70.092-38.909",
  ),
];

const backPaths = [
  reversePath(
    "M197.901 29.325a123.097 123.097 0 0 1 15.363-16.56c12.504 23.406 17.554 51.015 12.59 79.174a123.204 123.204 0 0 1-8.862 28.948",
  ),
  reversePath(
    "M336.205 197.901a123.097 123.097 0 0 1 16.56 15.363c-23.406 12.504-51.015 17.554-79.173 12.59a123.204 123.204 0 0 1-28.948-8.862",
  ),
  reversePath(
    "M167.629 336.206a123.097 123.097 0 0 1-15.362 16.56c-12.505-23.407-17.555-51.016-12.59-79.174a123.204 123.204 0 0 1 8.861-28.948",
  ),
  reversePath(
    "M29.325 167.629a123.097 123.097 0 0 1-16.56-15.362c23.406-12.505 51.016-17.555 79.174-12.59a123.204 123.204 0 0 1 28.948 8.861",
  ),
];

const foo = 41;

export function LogoSequence() {
  const frame = useCurrentFrame();

  const isStarting = frame < endAt;

  const frontValue = isStarting
    ? interpolate(frame, [10, foo], [0, 1], {
        easing: Easing.out(Easing.circle),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : interpolate(frame, [endAt, endAt + 35], [1, 0], {
        easing: Easing.inOut(Easing.exp),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  const backValue = isStarting
    ? interpolate(frame, [10, foo], [0, 1], {
        easing: Easing.out(Easing.cubic),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : interpolate(frame, [endAt, endAt + 35], [-1, 0], {
        easing: Easing.inOut(Easing.exp),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  const rotateFrontValue = interpolate(frame, [90, durationInFrames], [0, -8], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rotateBackValue = interpolate(frame, [84, durationInFrames], [0, 8], {
    easing: Easing.in(Easing.quad),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rotateValue =
    frame <= foo * 2
      ? interpolate(frame, [0, foo * 2], [0, -270], {
          easing: Easing.inOut(Easing.circle),
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : interpolate(frame, [foo * 2, durationInFrames - 60], [-270, -360], {
          easing: Easing.in(Easing.exp),
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

  const scaleValue = interpolate(frame, [10, foo, foo + 4], [0.75, 1.3, 0.75], {
    easing: Easing.out(Easing.quad),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateValue = interpolate(frame, [foo + 15, foo + 28], [0, -332], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacityValue = interpolate(frame, [endAt + 5, endAt + 25], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Sequence name="Logo">
      <AbsoluteFill
        style={{
          transform: makeTransform([translateX(translateValue)]),
          opacity: opacityValue,
        }}
      >
        <AbsoluteFill
          style={{
            transform: makeTransform([rotate(rotateValue), scale(scaleValue)]),
          }}
        >
          <AbsoluteFill
            className="items-center justify-center"
            style={{
              transform: rotate(rotateFrontValue),
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365.53 365.53" height={200}>
              <g
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeWidth="14"
                className={clsx(frame < foo ? "stroke-dust" : "stroke-cobalt")}
              >
                {frontPaths.map((path, index) => (
                  <path
                    key={path}
                    d={path}
                    {...evolvePath(
                      interpolate(frontValue, [frame < endAt ? index * 0.15 : 0, 1], [0, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      }),
                      path,
                    )}
                  />
                ))}
              </g>
            </svg>
          </AbsoluteFill>
          <AbsoluteFill
            className="items-center justify-center"
            style={{
              transform: rotate(rotateBackValue),
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365.53 365.53" height={200}>
              <g
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeWidth="14"
                className={clsx(frame < foo ? "stroke-dust-dark" : "stroke-cobalt-light")}
              >
                {backPaths.map((path) => (
                  <path key={path} d={path} {...evolvePath(backValue, path)} />
                ))}
              </g>
            </svg>
          </AbsoluteFill>
        </AbsoluteFill>
      </AbsoluteFill>
    </Sequence>
  );
}
