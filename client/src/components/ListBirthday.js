
import React, { Fragment, useEffect, useState } from "react";
import EditEntireBirthday from "./EditEntireBirthday";



const ListBirthday = () => {
  const [birthdays, setBirthdays] = useState([]);
 


  //delete ticket function

  const deleteBirthday = async id => {
    try {
      const deleteBirthday = await fetch(`http://localhost:5000/birthdayReminder/${id}`, {
        method: "DELETE"
      });

      console.log(deleteBirthday)

      setBirthdays(birthdays.filter(birthdays => birthdays.birthdayremindertable_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getBirthdays = async () => {
    try {
      const response = await fetch("http://localhost:5000/birthdayReminder");
      const jsonData = await response.json();

      setBirthdays(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBirthdays();
  }, []);

  console.log(birthdays);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th>name</th>
            <th>age</th>
            
            <th>Edit</th>
            
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {birthdays.map(birthdays => (
            <tr key={birthdays.birthdayremindertable_id}>
              {/* <td>{birthdays.id}</td> */}
              <td>{birthdays.name}</td>
              <td>{birthdays.age}</td>
              {/* <td>{tickets.subject}</td>
              <td>{tickets.created_at}</td>
              <td>{tickets.description}</td> */}
              <td>
                <EditEntireBirthday birthdays={birthdays} />
              </td>
              
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBirthday(birthdays.birthdayremindertable_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListBirthday;