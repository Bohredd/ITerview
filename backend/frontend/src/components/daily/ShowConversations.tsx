
import { useState } from "react";
import { ShowConversation } from "./ShowConversation";
import { Button, Container } from "react-bootstrap";

interface ShowConversationsProps {
    speechesId: number[];
}

export const ShowConversations = ({ speechesId }: ShowConversationsProps) => {

    const [currentSpeechId, setCurrentSpeechId] = useState<number>(0);


    const handleNextSpeech = () => {
        if (currentSpeechId < speechesId.length - 1) {
            setCurrentSpeechId(currentSpeechId + 1);
        }

    }

    const handlePreviousSpeech = () => {
        if (currentSpeechId > 0) {
            setCurrentSpeechId(currentSpeechId - 1);
        }
    }

    return (
        <div>
            <ShowConversation speechId={speechesId[currentSpeechId]} />

            <Container className="d-flex justify-content-center">
                <div>
                    <Button onClick={handlePreviousSpeech} className="me-2">Previous</Button>
                    <Button onClick={handleNextSpeech}>Next</Button>
                </div>
            </Container>
        </div>
    );
};