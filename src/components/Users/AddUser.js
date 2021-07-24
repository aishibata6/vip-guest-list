//import classes from "*.module.css";
import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

import "./AddUser.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  // handling error state; show modal only when there is an error

  const [isError, setIsError] = useState("");

  const nameUpdateHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageUpdateHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError({
        header: "Oops!",
        content: "Please enter a name and age",
      });
      return;
    }
    // by adding  + , it will make sure that the entered number (string) and the comparison value (number) will be compared as the same type.
    else if (+enteredAge < 1) {
      setIsError({
        header: "Oops! Invalid Age",
        content: "Enter a value greater than 1",
      });
      return;
    } else {
      const userData = {
        name: enteredName,
        age: enteredAge,
        id: Math.floor(Math.random() * 1000).toString(),
      };
      console.log(userData, enteredName, enteredAge);
      props.onAddUser(userData);
    }

    setEnteredName("");
    setEnteredAge("");
  };

  // remove modal when the button or backdrop is clicked
  const dismissErrorHandler = () => {
    setIsError(null);
  };

  return (
    <div>
      {isError && (
        <Modal
          header={isError.header}
          content={isError.content}
          onConfirm={dismissErrorHandler}
        />
      )}
      <Card className="addGuestForm">
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor="vipName">Name</label>
            <input
              type="text"
              id="vipName"
              onChange={nameUpdateHandler}
              value={enteredName}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              onChange={ageUpdateHandler}
              value={enteredAge}
            />
          </div>
          <Button type="submit">Add A Guest!</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
