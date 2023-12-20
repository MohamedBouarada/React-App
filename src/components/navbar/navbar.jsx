import React from "react";
import styles from "./navbar.module.css";

const Navbar = ({ selectedItem, onSelectItem, role }) => {
  const handleSelectItem = (item) => {
    onSelectItem(item);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarItems}>
        <span
          className={`${styles.navbarItem} ${
            selectedItem === "Profile" && styles.selected
          }`}
          onClick={() => handleSelectItem("Profile")}
        >
          Profile
        </span>
        <span
          className={`${styles.navbarItem} ${
            selectedItem === "Courses" && styles.selected
          }`}
          onClick={() => handleSelectItem("Courses")}
        >
          Courses
        </span>
        {role === "Instructor" && (
          <span
            className={`${styles.navbarItem} ${
              selectedItem === "AddCourse" && styles.selected
            }`}
            onClick={() => handleSelectItem("AddCourse")}
          >
            Add Course
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
