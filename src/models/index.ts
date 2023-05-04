import { HomeworkTypes, MoodTypes } from "../constants";

export interface Note {
  homeworkType: HomeworkTypes;
  homeworkMemo: string;
  moodType: MoodTypes;
  moodMemo: string;
  createdAt: Date;
}

// mapped type
type WithEmptyString<T> = {
  [P in keyof T]: T[P] | "";
};

// 이하와 동일
export type InputValues = Omit<
  Note,
  "homeworkType" | "moodType" | "createdAt"
> &
  Pick<WithEmptyString<Note>, "homeworkType" | "moodType">;

// export interface InputValues {
//   homeworkType: HomeworkTypes | null;
//   homeworkMemo: string;
//   moodType: MoodTypes | null;
//   moodMemo: string;
// }
