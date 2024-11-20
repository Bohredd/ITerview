export type Speech = {
  id: number;
  speaker: number;
  content: string;
  is_question: boolean;
  is_to_you: boolean;
  probably_answers: number[];
  information: number;
};
