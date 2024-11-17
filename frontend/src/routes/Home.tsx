import { Button } from "react-bootstrap";

export const Home = () => {
  return (
    <div>
      <Button variant="primary" href="/interviews">
        Ver entrevistas
      </Button>
      <Button variant="primary" href="/dailies">
        Ver dailies
      </Button>
    </div>
  );
};
