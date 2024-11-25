import { useParams } from "react-router-dom";
import useFetchData from "../../functions/FetchData";
import { useState, useEffect } from "react";
import { Daily } from "../../types/daily/Daily";
import { ShowPeopleFrame } from "../../components/daily/ShowPeopleFrame";
import { ShowConversations } from "../../components/daily/ShowConversations";
import { Container, Row, Col } from "react-bootstrap";
import { ShowYou } from "../../components/daily/ShowYou";
import axios from "axios";

export const DailyView = () => {
  const { id } = useParams<{ id: string }>();

  const [daily, setDaily] = useState<Daily | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [canPlayDaily, setCanPlayDaily] = useState<boolean | null>(
    null
  );

  const userToken = localStorage.getItem("authToken");
  
  useFetchData<Daily>({
    method: "GET",
    app_name: "dailies",
    url: `daily/`,
    id: id,
    setData: setDaily,
    setLoading,
    setError,
  });


  console.log("userToken", userToken);

  async function checkCanPlayDaily() {
    try {
      const body = {
        user_token: userToken,
        game_name: "Fake Daily Meeting",
      };

      const response = await axios.post(
        `http://127.0.0.1:8000/payment/api/can_play_game/`,
        body
      );

      console.log("response", response);

      if (response.status !== 200) {
        setCanPlayDaily(false);
      } else {
        setCanPlayDaily(true);
      }
    } catch (error) {
      console.error("Error checking can play interview:", error);
      setCanPlayDaily(false);
    }
  }

  useEffect(() => {
    checkCanPlayDaily();
    console.log("montado");
  }, []);

  if (!canPlayDaily) {
    return <div>You have reached your daily meetings limit per month</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!daily) {
    return <div>No daily found</div>;
  }

  if (canPlayDaily === true) {
    console.log("can play daily");
    console.log("consumacao -1");
  }

  console.log(daily);
  console.log(id);
  console.log(daily.people);

  return (
    <div>
      <Container className="d-flex flex-column align-items-center pt-5 pb-5">
        <h1 className="text-center mb-4">Daily {daily.project_name} Team</h1>
        <p>Scrum master started the daily at: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
        <ShowYou youId={daily.you} daily={daily} />
        <Row className="justify-content-center w-100">
          <Col md={8} className="d-flex flex-column align-items-center">
            <ShowPeopleFrame peopleId={daily.people} />
            <ShowConversations speechesId={daily.speeches} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DailyView;