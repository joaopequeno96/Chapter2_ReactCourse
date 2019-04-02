import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//<button style="background-color: blue; color: white;">Submit</button>

function getTime() {
  return (new Date()).toLocaleTimeString();
}

const Application = () => {
  const buttonText =  { text: "Click me!" };
  const style = { color: 'white', backgroundColor: 'blue' };
  const labelText = { text: "Enter name:" };

  return (
    <div>
      <label className="label" htmlFor="name">{labelText.text}</label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText.text}
      </button>
      <div> Current Time: </div>
      <h3> {getTime()} </h3>
    </div>
  );
};

ReactDOM.render(<Application />, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
