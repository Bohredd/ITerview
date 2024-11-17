import { Person } from "./Person";
import { ProbablyAnswer } from "./ProbablyAnswer";
import { Information } from "./Information";

export type Speech = {
  id: number | string;
  speaker: Person;
  content: string;
  is_question: boolean;
  is_to_you: boolean;
  probably_answers: ProbablyAnswer[];
  information: Information;
};
