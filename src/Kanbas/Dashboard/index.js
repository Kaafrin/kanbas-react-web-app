import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import CourseCard from "./CourseCard";
import db from "../Database"; 

function Dashboard(
  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-md-9">
          <h1 className="title">
            <span style={{ fontWeight: "normal" }}>Dashboard</span>
          </h1>
          <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />


      <button onClick={addNewCourse} >
        Add
      </button>

          <hr />
          <h2 className="title">
            <span style={{ fontWeight: "normal", marginLeft: "25px" }}>
              Published Courses ({courses.length})
            </span>
          </h2>
          <hr style={{ marginLeft: "25px" }} />
          <div className="d-flex flex-row flex-wrap" style={{ marginLeft: "25px" }}>
            {courses.map((course) => (
              <Link to={`/Kanbas/Courses/${course._id}`} key={course._id}>
                <CourseCard course={course} />

<button onClick={updateCourse} >
        Update
      </button>

                <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

                <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
              </Link>
              
            ))}
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default Dashboard;