export type Speech = {
  id: number | string;
  speaker: number | string;
  content: string;
  is_question: boolean;
  is_to_you: boolean;
  probably_answers: number[] | string[];
  information: number | string;
};
