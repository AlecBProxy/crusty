import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Crusty!</h1>
      <p>We're not the best, but we're affordable!</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    margin: "2rem",
  },
};

export default Home;
