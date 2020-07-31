import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState("");
  const [hello, setHello] = useState(["Be brave and tap the button below"]);
  const [showSecondScreen, setShowSecondScreen] = useState(false);

  const url = process.env.REACT_APP_API_HOST;

  const handleSubmit = async event => {
    // switches to second screen
    setShowSecondScreen(!showSecondScreen);

    // calls the backend
    await fetch(`${url}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name
      })
    });
    event.preventDefault();
  }

  const handleChange = event => {
    // changes the 'name' state
    setName(event.target.value);
  }

  const increment = () => {
    // callback is used to keep track of previous data and adds one more
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
        {showSecondScreen ? secondScreen() : firstScreen()}
      </header>
      <body>
        <div className="Body">
          <Table striped bordered hover>
            <thead>
              <th>GitHub repositories:</th>
              <th>DockerHub repositories:</th>
            </thead>
            <tbody>
              <tr>
                <td><p><a href='https://github.com/kleyton-ohare/DevOps_Project' target='blank'>Front-end</a></p></td>
                <td><p><a href='https://hub.docker.com/repository/docker/kleydocker/myhello_project' target='blank'>Front-end</a></p></td>
              </tr>
              <tr>
                <td><p><a href='https://github.com/kleyton-ohare/DevOps_Project_backend' target='blank'>Back-end</a></p></td>
                <td><p><a href='https://hub.docker.com/repository/docker/kleydocker/myhello_project_backend' target='blank'>Back-end</a></p></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </body>
    </div>
  );
}

export default App;
