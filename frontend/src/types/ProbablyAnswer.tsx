export type ProbablyAnswer = {
  id: number | string;
  answer: string;
  is_correct: boolean;
  penalty: string;
  who_says_penality: number | string;
};
