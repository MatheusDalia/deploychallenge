// frontend/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://deploychallengeback.vercel.app/hello")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("Error fetching message:", error);
      });
  }, []);

  return (
    <div>
      <h2>Front Message</h2>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
