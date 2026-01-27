export interface Song {
  title: string;
  author: string;
  file: string;
  duration: number;
  lyrics: {
    text: string;
    startAt: number;
    endAt?: number;
  }[];
}
