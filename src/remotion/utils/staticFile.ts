import { staticFile as baseStaticFile } from "remotion";

export const staticFile = (path: string) => {
  return baseStaticFile(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`);
};
