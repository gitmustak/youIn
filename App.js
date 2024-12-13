import React from 'react';
import './App.css';

function App() {
  const handleYes = () => {
    alert("Yay! Can't wait for the movie date! 🎥🍿💖");
  };

  const handleNo = () => {
    alert("Aww, maybe next time! ❤️");
  };

  return (
    <div className="container">
      <h1 className="title">Meow meow meow meow bro!</h1>
      <p className="message">
        I was just asking to confirm....today's plan is on right?
      </p>
      <p className="info">
        All We Imagine As Light<br/><small>Directed by Payal Kapadia </small>
        <small className='additional'><br/>INOX South City<br/>10:45 am</small>
      </p>
      <img
        src="https://m.media-amazon.com/images/M/MV5BNzg5OWVkODQtNDViMS00YmFkLTg4YjctMGFmZjM4OTdlYWRhXkEyXkFqcGc@._V1_.jpg"
        alt="Movie Date"
        className="image"
      />
      <div className="button-container">
        <button className="button yes" onClick={handleYes}>
          Yes it is
        </button>
        <button className="button no" onClick={handleNo}>
          Nah bro jabona
        </button>
      </div>
    </div>
  );
}

export default App;
