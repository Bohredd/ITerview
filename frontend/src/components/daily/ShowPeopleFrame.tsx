import { ShowPersonFrame } from "./ShowPersonFrame";
import { BsMicFill, BsCameraVideo , BsFillTelephoneXFill  } from "react-icons/bs";
import { Button } from "react-bootstrap";

interface ShowPersonFrameProps {
    peopleId: number[];
}

export const ShowPeopleFrame = ({ peopleId }: ShowPersonFrameProps) => {

    return (
      <div>
        <div className="d-flex justify-content-center pt-5 pb-5">
          {peopleId.map((personId) => (
            <ShowPersonFrame key={personId} personId={personId} />
          ))}
        </div>
        <div className="d-flex justify-content-center pt-5 pb-5">
          <div className="d-flex justify-content-center mt-2">
            <Button className="mx-2" variant="primary">
              <BsMicFill className="mx-2" size={24} />
            </Button>
            <Button className="mx-2" variant="secondary">
                <BsCameraVideo className="mx-2" size={24} />
            </Button>
            <Button className="mx-2" variant="danger">
                <BsFillTelephoneXFill className="mx-2" size={24} />
            </Button>
          </div>
        </div>
      </div>
    );
};
