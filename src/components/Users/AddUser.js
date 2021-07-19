//import classes from "*.module.css";
import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import "./AddUser.css";

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Card className="addGuestForm">
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="vipName">Name</label>
          <input type="text" id="vipName" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" />
        </div>
        <Button type="submit">Add A Guest!</Button>
      </form>
    </Card>
  );
};

export default AddUser;
