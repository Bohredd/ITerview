
export type Plans = {
  id: number;
  title: string;
  price: number;
  max_daily_participations: number;
  max_interview_participations: number | null;
  max_common_sentences: number | null;
  description: string;
  card_text_color: string;
};