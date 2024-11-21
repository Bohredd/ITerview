import { Button } from "react-bootstrap";
import { CustomNavbar } from "../../components/home/Navbar";
export const SentencesView = () => {
  return (
    <div>
      <CustomNavbar />

      <div className="container align-items-center text-center">
        <h1>SentencesView</h1>
        <Button variant="primary" href="/sentences/play">
          Sentences
        </Button>
      </div>
    </div>
  );
};
