import { Answer } from "./Answer";

export type Question = {
  id: number;
  interview_type: string;
  level: string;
  text: string;

  answers: Answer[];
};
