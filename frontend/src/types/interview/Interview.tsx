import { Question } from "./Question";
import { InterviewSubTheme } from "./InterviewSubTheme";
import { InterviewTheme } from "./InterviewTheme";

export type Interview = {
  id: number;
  interview_type: string;
  level: string;
  themes: InterviewTheme[];
  sub_themes: InterviewSubTheme[];
  questions: Question[];
};
