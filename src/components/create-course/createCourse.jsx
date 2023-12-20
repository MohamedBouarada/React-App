import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./createCourse.module.css";

const CreateCourse = ({ showSuccessToast, updateCourseList}) => {
  const [courseData, setCourseData] = useState({
    name: "",
    description: "",
    category: "",
    subject: "",
    startTime: null,
    endTime: null,
    numStudents: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date, field) => {
    setCourseData((prevData) => ({ ...prevData, [field]: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const startTimeString = courseData.startTime.toLocaleString();
    const endTimeString = courseData.endTime.toLocaleString();

    updateCourseList({
      ...courseData,
      startTime: startTimeString,
      endTime: endTimeString,
    });
    console.log("Course Data:", courseData);
    setCourseData({
      name: "",
      description: "",
      category: "",
      subject: "",
      startTime: null,
      endTime: null,
      numStudents: 0,
    });
  };

  return (
    <div className={styles.createCourseContainer}>
      <h2 className={styles.title}>Create Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={courseData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={courseData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={courseData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={courseData.subject}
            onChange={handleChange}
          />
        </div>
        <div className={styles.dateContainer}>
          <div className={styles.date}>
            <label htmlFor="startTime">Start Time:</label>
            <DatePicker
              id="startTime"
              name="startTime"
              autoComplete="off"
              selected={courseData.startTime}
              onChange={(date) => handleDateChange(date, "startTime")}
              showTimeSelect
              dateFormat="Pp"
            />
          </div>
          <div className={styles.date}>
            <label htmlFor="endTime">End Time:</label>
            <DatePicker
              id="endTime"
              name="endTime"
              autoComplete="off"
              selected={courseData.endTime}
              onChange={(date) => handleDateChange(date, "endTime")}
              showTimeSelect
              dateFormat="Pp"
            />
          </div>
        </div>
        <div>
          <label htmlFor="numStudents">Number of Students:</label>
          <input
            type="number"
            id="numStudents"
            name="numStudents"
            min={0}
            value={courseData.numStudents}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;
