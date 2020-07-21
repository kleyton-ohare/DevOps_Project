import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState("");
  const [hello, setHello] = useState(["Be brave and tap the button below"]);
  const [showSecond, setShowSecond] = useState(false);

  const handleSubmit = event => {
    setShowSecond(!showSecond)
    event.preventDefault();
  }

  const handleChange = event => {
    setName(event.target.value);
  }

  const increment = () => {
    setHello(h => [...h, `Hello ${name}`]);
  }

  const firstScreen = () => {
    return (
      <div>
        <h1>Hello</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>What's your name?</Form.Label>
            <Form.Control type="text" onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </div>
    );
  }

  const secondScreen = () => {
    return (
      <div className="App">
        {hello.map((value, key) => {
          return <h2 key={key}>{value}</h2>
        })}
        <Button variant="primary" onClick={increment}>Press me</Button>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {showSecond ? secondScreen() : firstScreen()}
      </header>
    </div>
  );
}

export default App;
