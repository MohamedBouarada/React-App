import React, { useState } from "react";
import styles from "./profile.module.css";

const Profile = ({ user, onUpdateProfile }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [nickname, setNickname] = useState(user.nickname);
  const [birthday, setBirthday] = useState(user.birthday);
  const [gender, setGender] = useState(user.gender);

  const handleUpdateProfile = () => {
    onUpdateProfile({
      firstName,
      lastName,
      nickname,
      birthday,
      gender,
    });
  };

  return (
    <div className={styles.profileContainer}>
      <h2>Profile</h2>
      <div className={styles.profileInfo}>
        <div>
          <label className={styles.label} htmlFor="firstName">
            First Name:
          </label>
          <input
            className={styles.input}
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="lastName">
            Last Name:
          </label>
          <input
            className={styles.input}
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="nickname">
            Nickname:
          </label>
          <input
            className={styles.input}
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="birthday">
            Birthday:
          </label>
          <input
            className={styles.input}
            type="date"
            id="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="gender">
            Gender:
          </label>
          <select
            className={styles.input}
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default Profile;
