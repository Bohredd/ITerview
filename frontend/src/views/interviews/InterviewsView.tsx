import { Interview } from "../../types/interview/Interview";
import { useState } from "react";
import useFetchData from "../../functions/FetchData";
import { ShowInterview } from "../../components/interviews/ShowInterview";
import { Col, Container, Row } from "react-bootstrap";

export const InterviewsView = () => {

    const [interviews, setInterviews] = useState<Interview[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useFetchData<Interview[]> ({
        method: "LIST",
        app_name: "interview",
        url: "interview/",
        setData: setInterviews,
        setLoading,
        setError,
    })

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!interviews || interviews.length === 0) {
        return <div>No interviews found</div>;
    }

    console.log(interviews);

    return (
      <div>
        <div className="container align-items-center text-center">
          <h1 className="fw-bold fs-1 pt-5 pb-5">Here are some interviews to practice your English</h1>
          <Container className="pt-5 pb-5">
            <Row className="d-flex justify-content-center">
              {interviews.map((interview) => (
                <Col
                  key={interview.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="d-flex justify-content-center mb-4"
                >
                  <ShowInterview key={interview.id} interview={interview} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    );

}

export default InterviewsView;