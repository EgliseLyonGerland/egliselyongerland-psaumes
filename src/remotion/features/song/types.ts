export interface Song {
  title: string;
  file: string;
  duration: number;
  offset?: number;
  metadata: {
    writer: string;
    composer: string;
    performers: string[];
  };
  lyrics: {
    text: string;
    startAt: number;
    endAt?: number;
  }[];
}
