const PaymentPending = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-warning-subtle">
      <div className="container text-center">
        <h1 className="display-4 text-warning mb-4">Payment Pending</h1>
        <p className="lead">
          Your payment is currently being processed. Please check back later or
          contact support if the issue persists.
        </p>
      </div>
    </div>
  );
};

export default PaymentPending;
