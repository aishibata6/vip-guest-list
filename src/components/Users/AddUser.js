//import classes from "*.module.css";
import React, {useState, useRef} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

import "./AddUser.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  // handling error state; show modal only when there is an error

  const [isError, setIsError] = useState("");

  // const nameUpdateHandler = (e) => {
  //   setEnteredName(e.target.value);
  // };

  // const ageUpdateHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };

  const addUserHandler = (e) => {
    e.preventDefault();

    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    console.log(enteredUserName, enteredUserAge);

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setIsError({
        header: "Oops!",
        content: "Please enter a name and age",
      });
      return;
    }
    // by adding  + , it will make sure that the entered number (string) and the comparison value (number) will be compared as the same type.
    else if (+enteredUserAge < 1) {
      setIsError({
        header: "Oops! Invalid Age",
        content: "Enter a value greater than 1",
      });
      return;
    } else {
      const userData = {
        name: enteredUserName,
        age: enteredUserAge,
        id: Math.floor(Math.random() * 1000).toString(),
      };
      props.onAddUser(userData);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }

    // setEnteredName("");
    // setEnteredAge("");
  };

  // remove modal when the button or backdrop is clicked
  const dismissErrorHandler = () => {
    setIsError(null);
  };

  return (
    <React.Fragment>
      {isError && (
        <Modal
          header={isError.header}
          content={isError.content}
          onConfirm={dismissErrorHandler}
        />
      )}
      <Card className="addGuestForm">
        <form onSubmit={addUserHandler}>
          <React.Fragment>
            <label htmlFor="vipName">Name</label>
            <input type="text" id="vipName" ref={nameInputRef} />
          </React.Fragment>
          <React.Fragment>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" ref={ageInputRef} />
          </React.Fragment>
          <Button type="submit">Add A Guest!</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
