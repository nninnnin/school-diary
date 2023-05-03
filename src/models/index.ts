import { HomeworkTypes, MoodTypes } from "../constants";

export interface InputValues {
  homeworkType: HomeworkTypes | null;
  homeworkMemo: string;
  moodType: MoodTypes | null;
  moodMemo: string;
}
