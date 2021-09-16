import React from "react";
import DisplayQuote from "./components/DisplayQuote";
import './App.css';
import axios from 'axios';

const client = axios.create({
    baseURL: 'https://simpsons-quotes-api.herokuapp.com/quotes'
})



export default function App() {
  const [selectedQuote, setQuote] = React.useState('');
  
  const getQuote = () => {
    client
        .get('')
        .then((res) => res.data)
        .then((data) => setQuote(data[0]));
  }

  return (
    <div className="App">
      <button onClick={getQuote}>Click for another quote</button>
      <DisplayQuote selectedQuote={selectedQuote}/>
    </div>
  );
}

