const PaymentFailure = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-danger-subtle">
      <div className="container text-center">
        <h1 className="display-4 text-danger mb-4">Payment Failure</h1>
        <p className="lead">
          Unfortunately, your payment could not be processed. Please try again
          or contact support for assistance.
        </p>
      </div>
    </div>
  );
};

export default PaymentFailure;
