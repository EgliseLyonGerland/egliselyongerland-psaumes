export interface Song {
  title: string;
  author: string;
  file: string;
  lyrics: {
    text: string;
    startAt: number;
    endAt?: number;
  }[];
}
