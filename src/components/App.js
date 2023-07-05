import React, { useState, useEffect } from "react";

// create your App component here
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoaded(true);
        setImage(data.message);
      });

  }, []);

  if (isLoaded) {
    return (
      <div>
        <h1>App</h1>
        <img src={image} alt="A Random Dog" />
      </div>
    );
  }

  else {
    return <p>Loading...</p>;
  }
}

export default App;
