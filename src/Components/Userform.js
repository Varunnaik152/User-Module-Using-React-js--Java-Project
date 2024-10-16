import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import base_url from './api'

function Userform() {
  const [usermodule, setUser] = useState({ id: '', username: '', password: ''});

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(usermodule);
    postDataToServer(usermodule);
  };

  const postDataToServer = (data) => {
    axios
      .post(`${base_url}/user_details`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFormReset = () => {
    setUser({id: '', username: '', password: ''});
  };

  return (
    <div>
      <h1>Users Entry Form</h1>
      <Form onSubmit={onFormSubmit}>
        <FormGroup className="mb-3">
          <Label for="Id">ID:</Label>
          <Input
            type="text"
            id="Id"
            value={usermodule.id}
            onChange={(e) => setUser({ ...usermodule, id: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Label for="username">Category:</Label>
          <Input
            type="text"
            id="username"
            value={usermodule.category}
            onChange={(e) => setUser({ ...usermodule, category: e.target.value })}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Label for="password">Name:</Label>
          <Input
            type="text"
            id="password"
            value={usermodule.Name}
            onChange={(e) => setUser({ ...usermodule, Name: e.target.value })}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>
        <Button color="secondary" type="button" onClick={onFormReset}>
          Reset
        </Button>
      </Form>
    </div>
  );
}

export default Userform;
