import { Person } from "../types/Person";

interface PersonViewProps {
  person: Person;
}

export const PersonView = ({ person }: PersonViewProps) => {
  return <div>PersonView</div>;
};
