import { ShowPersonFrame } from "./ShowPersonFrame";

interface ShowPersonFrameProps {
    peopleId: number[];
}

export const ShowPeopleFrame = ({ peopleId }: ShowPersonFrameProps) => {

    return (
        <div>
            {peopleId.map((personId) => (
                <ShowPersonFrame key={personId} personId={personId} />
            ))}
        </div>
    );
};
