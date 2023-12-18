import React from "react";
import Score from "./score";

const Student = ({ student }) => {
  return (
    <div className="student">
      <h2>{student.name}</h2>
      <p>{student.bio}</p>
      <div className="scores">
        {student.scores.map((score, index) => (
          <Score key={index} score={score} />
        ))}
      </div>
    </div>
  );
};

export default Student;
