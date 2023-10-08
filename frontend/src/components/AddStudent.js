/*import React,{useState} from "react";
export default function AddStudent() {

  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [gender,setGender] = useState("");

  
    return(
      <div className="container">
        <form>
  <div className="form-group">
    <label htmlFor="name">Student Name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter Student name"/>
    onChange={(e) => {
        setName(e.target.value);
      }}
    </div>

    <div className = "form-group">
      <label htmlFor="age">Student Age</label>
      <input type="text" className="form-control" id="age" placeholder="Enter Student age"/>
      onChange={(e) => {
        setAge(e.target.value);
      }}
      </div>

  <div className = "form-group">

    <label htmlFor="gender">Student Gender</label>
    <input type="text" className="form-control" id="gender" placeholder="Enter Student age"/>
      onChange={(e) => {
        setGender(e.target.value);
      }}
    </div>

    <button type = "submit" className ="btn btn-primary">Submit</button>
    </form>
</div>
)
}*/

import React, { useState } from "react";
import axios from "axios";

export default function AddStudent() {
  // Define state variables for name, age, and gender
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  // Event handler functions to update state when input values change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  // Event handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object to represent the new student data
    const newStudent = {
      name: name,
      age: age,
      gender: gender,
    };

    // Logging the submitted data
    axios.post("http://localhost:5000/students/add", newStudent)
      .then(() => {
        alert("Student added successfully");
      })
      .catch((err) => {
        alert(err);
      });

    // Reset the form input values
    setName("");
    setAge("");
    setGender("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Student Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Student name"
            onChange={handleNameChange}
            value={name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Student Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Enter Student age"
            onChange={handleAgeChange}
            value={age}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Student Gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            placeholder="Enter Student gender"
            onChange={handleGenderChange}
            value={gender}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
