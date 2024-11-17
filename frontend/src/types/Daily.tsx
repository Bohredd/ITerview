import { Person } from "./Person";
import { Speech } from "./Speech";

export type Daily = {
  id: number | string;
  project_name: string;
  project_description: string;
  speeches: Speech[];
  you: Person;
  your_atributions: string;
  people: Person[];
};
