import React, { useState } from "react";
import Student from "./student";

const App = () => {
  const [studentData, setStudentData] = useState({
    students: [
      {
        name: "Cait Yomorta",
        bio: "Lorem ipsum...",
        scores: [
          { date: "2018-02-08", score: 77 },
          { date: "2018-04-22", score: 92 },
          { date: "2018-09-15", score: 68 },
        ],
      },
      {
        name: "Holly Baird",
        bio: "Eum molestiae explicabo...",
        scores: [
          { date: "2018-12-14", score: 88 },
          { date: "2019-01-09", score: 79 },
          { date: "2019-02-23", score: 91 },
          { date: "2019-03-01", score: 95 },
        ],
      },
      {
        name: "Wes Mungia",
        bio: "Repudiandae veritatis recusandae...",
        scores: [
          { date: "2018-10-11", score: 62 },
          { date: "2018-11-24", score: 74 },
          { date: "2018-12-19", score: 85 },
        ],
      },
    ],
  });

  return (
    <div className="app">
      {studentData.students.map((student, index) => (
        <Student key={index} student={student} />
      ))}
    </div>
  );
};

export default App;
