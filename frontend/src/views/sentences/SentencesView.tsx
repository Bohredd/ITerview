import { Button } from "react-bootstrap";
import { CustomNavbar } from "../../components/home/Navbar";
export const SentencesView = () => {
  return (
    <div>
      <CustomNavbar />

      <div className="container align-items-center text-center vh-150 pt-5">
        <h1 className="fw-bold fs-1 pt-5 pb-5">
          Common Sentences to practice your English!
        </h1>
        <p className="fw-bold text-secondary">
          Practice your <span className="text-primary">English</span> by reading
          and listening to common <span className="text-primary">developers</span> sentences
        </p>
        <p>Click the button below to start practicing!</p>
        <Button variant="primary" href="/sentences/play" className="mt-5">
          Lets go listening!
        </Button>
      </div>
    </div>
  );
};
