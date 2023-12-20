import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/navbar/navbar";
import Profile from "../../components/profile/profile";
import Courses from "../../components/courses/courses";
import CreateCourse from "../../components/create-course/createCourse";
import styles from "./instructor.module.css";
import users from "../../data/users";
import coursesData from "../../data/courses";
import { useNavigate } from "react-router-dom";

const Instructor = () => {
  const navigate = useNavigate();
  const storedRole = localStorage.getItem("role");
  useEffect(() => {
    if (storedRole !== "Instructor" || !storedRole) {
      navigate("/");
    }
  }, [storedRole, navigate]);
    const storedUsername = localStorage.getItem("username");
  const user = users.find((u) => u.username === storedUsername) || {
    firstName: "",
  };

  const [updatedUser, setUpdatedUser] = useState(user);

  const [welcomeMessage, setWelcomeMessage] = useState(
    `Welcome, ${user.firstName}!`
  );

  const [courses, setCourses] = useState(coursesData);

  const [selectedItem, setSelectedItem] = useState("Profile");



  const handleUpdateProfile = (updatedProfile) => {
    setUpdatedUser((prevUser) => ({ ...prevUser, ...updatedProfile }));
    setWelcomeMessage(`Welcome, ${updatedProfile.firstName}!`);
    showSuccessToast("Profile updated successfully!");
  };

  const handleAddCourse = (newCourse) => {
    setCourses((prevCourses) => [...prevCourses, newCourse]);
    showSuccessToast("Course added successfully!");
  };
  
  const showSuccessToast = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  return (
    <div className={styles.instructorContainer}>
      <Navbar
        selectedItem={selectedItem}
        onSelectItem={setSelectedItem}
        role={user.role}
      />
      <h1 className={styles.welcomeMessage}>{welcomeMessage}</h1>

      {selectedItem === "Profile" && (
        <Profile user={updatedUser} onUpdateProfile={handleUpdateProfile} />
      )}
      {selectedItem === "Courses" && <Courses coursesData={courses} />}
      {selectedItem === "AddCourse" && (
        <CreateCourse
          showSuccessToast={showSuccessToast}
          updateCourseList={handleAddCourse}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default Instructor;
