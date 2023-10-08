import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllStudents.css"; // Import the CSS file

export default function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:5000/students/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();
  }, []);

  return (
    <div className="all-students-container">
      <h1>All Students</h1>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student._id} className="student-list-item">
            <span>Name:</span> {student.name}, <span>Age:</span> {student.age},{" "}
            <span>Gender:</span> {student.gender}
          </li>
        ))}
      </ul>
    </div>
  );
}
