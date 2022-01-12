

import React, { Fragment, useState } from "react";

const InputBirthday = () => {
    
    const [name, setName] = useState("put the name of the person");
    const [age, setAge] = useState("put the age of the person");


  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { name,age };
      const response = await fetch("http://localhost:5000/birthdayReminder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(response)
      window.location = "/"; //comment this out in order to check the response in the console
    } catch (err) {
      console.error(err.message);
      
    }
  };


  return (
    <Fragment>
      <h1 className="text-center mt-5">Birthday Reminder</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        {/* age */}
        <input
          type="text"
          className="form-control"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
                <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputBirthday;