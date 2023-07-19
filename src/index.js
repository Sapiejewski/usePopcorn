import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

// function Test()
// {
//   const [movieRating,setMovieRating] =useState(0);
//   return  <div>
//   <StarRating color='blue' onSetRating={setMovieRating}/>
//   <p>This movie was rated {movieRating} stars</p>
//   </div> 
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRaiting={5}/>
    <StarRating maxRaiting={10} color='red' size={24} defaultRating={5} />
    <Test/> */}
  </React.StrictMode>
);

