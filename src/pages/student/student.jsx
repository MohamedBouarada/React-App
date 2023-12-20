import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/navbar/navbar";
import Profile from "../../components/profile/profile";
import Courses from "../../components/courses/courses";
import styles from "./student.module.css";
import users from "../../data/users";
import coursesData from "../../data/courses";
import { useNavigate } from "react-router-dom";
const Student = () => {
  const navigate = useNavigate();

  const storedRole = localStorage.getItem("role");

  useEffect(() => {
    if (storedRole !== "Student" || !storedRole) {
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


  const [selectedItem, setSelectedItem] = useState("Profile");

  const handleUpdateProfile = (updatedProfile) => {
    setUpdatedUser((prevUser) => ({ ...prevUser, ...updatedProfile }));
    setWelcomeMessage(`Welcome, ${updatedProfile.firstName}!`);
    showSuccessToast("Profile updated successfully!");
  };


  const showSuccessToast = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  return (
    <div className={styles.studentContainer}>
      <Navbar selectedItem={selectedItem} onSelectItem={setSelectedItem} />
      <h1 className={styles.welcomeMessage}>{welcomeMessage}</h1>

      {selectedItem === "Profile" && (
        <Profile user={updatedUser} onUpdateProfile={handleUpdateProfile} />
      )}
      {selectedItem === "Courses" && (
        <Courses  coursesData={coursesData}/>
      )}

      <ToastContainer />
    </div>
  );
};

export default Student;
