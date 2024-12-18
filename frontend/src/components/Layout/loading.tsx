import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div style={styles.container}>
      <div
        className="spinner-border text-primary"
        role="status"
        style={styles.spinner}
      >
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  spinner: {
    width: "3rem",
    height: "3rem",
  },
};

export default LoadingSpinner;
