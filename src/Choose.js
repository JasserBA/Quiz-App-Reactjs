import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import App2 from './App2.js';
import App3 from './App3.js';
import './Choose.css';
import Typical from 'react-typical';
import MetaTags from 'react-meta-tags';

export default function MySelect() {
  const [selectedOption, setSelectedOption] = useState('');

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  function handleClick() {
    if (selectedOption === '') {
      alert("You should choose an option!");
    } else if (selectedOption === 'option1') {
      customFunction(selectedOption); // call custom function with selected option
    }
    else if (selectedOption === 'option2') {
      customFunction2(selectedOption); // call custom function with selected option
    }
    else if (selectedOption === 'option3') {
      customFunction3(selectedOption); // call custom function with selected option
    }
  }

  function customFunction(option) {
    // your custom code here
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
  function customFunction2(option) {
    // your custom code here
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App2 />
      </React.StrictMode>
    );
  }
  function customFunction3(option) {
    // your custom code here
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App3 />
      </React.StrictMode>
    );

  }

  return (<MetaTags>
    <head><meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </head></MetaTags>,
    <div className='app'><h1>Hi there 👋🏻,<span> I'm <Typical loop={Infinity}
      wrapper='J'
      steps={['Jasser', 1000, 'developer 💻', 1000, 'student 👨‍🎓', 1000, 'gamer 🎮', 1000]}>

    </Typical></span>! </h1>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">~~~~ Choose ~~~~</option>
        <option value="option1">Football</option>
        <option value="option2">Gaming</option>
        <option value="option3">Mathematic</option>
      </select><br />
      <button className='submit-button' onClick={handleClick}>Submit</button>
    </div>
  );
}