import React, { useState, useEffect } from "react";
import styles from "./courses.module.css";


const Courses = ({ coursesData }) => {
  const [searchName, setSearchName] = useState("");
  const [searchTime, setSearchTime] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    handleSearchCourses();
  }, [searchName, searchTime]);

  const handleSearchCourses = () => {
    const filtered = coursesData.filter((course) => {
      const nameMatch =
        course.name.toLowerCase().includes(searchName.toLowerCase())

      const timeMatch =
        course.startTime.toLowerCase().includes(searchTime.toLowerCase()) ||
        course.endTime.toLowerCase().includes(searchTime.toLowerCase());

      return nameMatch && timeMatch;
    });

    setFilteredCourses(filtered);
  };

  return (
    <div className={styles.coursesContainer}>
      <h2 className={styles.title}>Courses</h2>
      <div className={styles.searchContainer}>
        <div>
          <label className={styles.serachLabel} htmlFor="searchName">
            Search by Name:
          </label>
          <input
            type="text"
            id="searchName"
            value={searchName}
            className={styles.searchInput}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
        <div>
          <label className={styles.serachLabel} htmlFor="searchTime">
            Search by Time:
          </label>
          <input
            type="text"
            id="searchTime"
            value={searchTime}
            className={styles.searchInput}
            onChange={(e) => setSearchTime(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.coursesList}>
        {filteredCourses.map((course, index) => (
          <div key={index} className={styles.courseItem}>
            <p>
              <span className={styles.label}>Name:</span> {course.name}
            </p>
            <p>
              <span className={styles.label}>Description:</span>{" "}
              {course.description}
            </p>
            <p>
              <span className={styles.label}>Category:</span> {course.category}
            </p>
            <p>
              <span className={styles.label}>Subject:</span> {course.subject}
            </p>
            <p>
              <span className={styles.label}>Start Time:</span>{" "}
              {course.startTime}
            </p>
            <p>
              <span className={styles.label}>End Time:</span> {course.endTime}
            </p>
            <p>
              <span className={styles.label}>Number of Students:</span>{" "}
              {course.numberOfStudents}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
