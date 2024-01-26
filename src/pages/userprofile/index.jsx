import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI";
import Coach from "../../assets/images/coach.png";
import Chelsea from "../../assets/images/userchelsea.png";
import Settings from '../../assets/images/settings.svg';
import Edit from '../../assets/images/edit.svg';
import LogOut from '../../assets/images/logout.svg'
const UserProfile = () => {
  return (
    <>
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.text}>
            <h2>Profile</h2>
          </div>
          <div className={styles.user}>
            <div className={styles.images}>
              <img src={Coach} alt="" />
              <h2>Chelsea</h2>
            </div>
            <div className={styles.hr}>
              <hr />
            </div>
            <div className={styles.info}>
              <div className={styles.infotext}>
                <h2>Coach of</h2>
              </div>
              <div className={styles.infoimages}>
                <img src={Chelsea} alt="" />
                <h2>Chelsea</h2>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
    <div className={styles.flexslog}>
              <Wrapper>
                <div className={styles.log1}>
                  <img src={Settings} alt="" />
                  <h2>Settings</h2>
                 
                </div>
                <div className={styles.log2}>
                 <img src={Edit} alt="" />
                  <h2>Edit Profile </h2>
                  
                </div>
                <div className={styles.log2}>
                 <img src={LogOut} alt="" />
                  <h2>Log Out</h2>
                  
                </div>
              </Wrapper>
            </div>
    </>
  );
};

export default UserProfile;
