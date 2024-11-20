import { Button, Container } from "react-bootstrap";

export const CustomBody = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <div style={{ paddingTop: "200px" }}>
          <span className="text-primary fw-bold fs-1">IT</span>
          <span className="fs-1 fw-bold text-black">erview</span>
        </div>
      </div>

      <div className="pt-5 justify-content-center d-flex align-items-center">
        <p className="text-justify text-black fw-bold fs-3">
          Be <span className="text-primary">ready</span> for your next job
          interview!
        </p>
      </div>

      <div className="pt-1 justify-content-center d-flex align-items-center">
        <p className="text-justify fw-bold" style={{ color: "gray" }}>
          Improve your
        </p>
        <p className="text-justify text-black fw-bold p-2"> English </p>
        <p className="text-justify fw-bold fs-6" style={{ color: "gray" }}>
          skills and get the job you want with
        </p>
        <p className="text-justify p-2 fw-bold fs-6" style={{ color: "blue" }}>
          ITerview
          <span className="fw-bold fs-6" style={{ color: "gray" }}>
            !
          </span>
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          variant="primary"
          className="mt-5"
          size="lg"
          style={{ width: "200px" }}
          href={"/gameSelection"} // need implement
        >
          Lets start
        </Button>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          variant="secondary"
          className="mt-1"
          size="lg"
          style={{ width: "200px" }}
          href={"/features"} // need implement
        >
          What can I do?
        </Button>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          variant="dark"
          className="mt-1"
          size="lg"
          style={{ width: "200px" }}
          href={"/pricing"}
        >
          Be premium
        </Button>
      </div>
    </Container>
  );
};
