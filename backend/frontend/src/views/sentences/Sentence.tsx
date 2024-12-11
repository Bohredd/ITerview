import { ShowSentence } from "../../components/sentences/ShowSentence";
import { CustomNavbar } from "../../components/home/Navbar";

export const SentenceView = () => {

  console.log("sentence view");

  return (
    <div>
      <CustomNavbar />
      <ShowSentence />
    </div>
  );
};

export default SentenceView;