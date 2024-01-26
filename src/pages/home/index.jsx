import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI";
import Chelsea from "../../assets/images/chelsea.png";
import Chelsea2 from "../../assets/images/chelsea2.png";
import VS from "../../assets/images/vs.png";
import ManchesterU from "../../assets/images/manchesteru.png";
import Ning from "../../assets/images/ning.png";
import Avondale from "../../assets/images/avondale.png";
import Pegasus from "../../assets/images/pegasus.png";
import Juventus from "../../assets/images/juventus.png";
import Barcelona from "../../assets/images/barcelona.png";
import { ArrowIcon, ReverseArrowIcon } from "../../icons";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [isBackgroundSmall, setIsBackgroundSmall] = useState(false);
  const [isArrowIconHidden, setIsArrowIconHidden] = useState(false);

  const handleBackgroundToggle = () => {
    setIsBackgroundSmall(!isBackgroundSmall);
    setIsArrowIconHidden(!isArrowIconHidden);
  };
  const handleReverseArrowIconClick=()=>{
    setIsBackgroundSmall(!isBackgroundSmall);
    setIsArrowIconHidden(!isArrowIconHidden);
  }
  const [data, setData] = useState([
    {
      date: "3 December 2023, 11.30",
      rival: `${Ning}`,
      rivalname: "Fu Ning F.C",
      name: "Chelsea",
      chelseaphoto: `${Chelsea2}`,
    },
    {
      date: "10 December 2023, 14.30",
      rival: `${Avondale}`,
      rivalname: "Avondale F.C",
      name: "Chelsea",
      chelseaphoto: `${Chelsea2}`,
    },
    {
      date: "11 December 2023, 12.30",
      rival: `${Pegasus}`,
      rivalname: "Pegasus United",
      name: "Chelsea",
      chelseaphoto: `${Chelsea2}`,
    },
    {
      date: "19 December 2023, 20.30",
      rival: `${Juventus}`,
      rivalname: "Juventus",
      name: "Chelsea",
      chelseaphoto: `${Chelsea2}`,
    },
    {
      date: "21 December 2023, 14.30",
      rival: `${Barcelona}`,
      rivalname: "F.C Barcelona",
      name: "Chelsea",
      chelseaphoto: `${Chelsea2}`,
    },
  ]);
  const filteredData = isArrowIconHidden ? data : data.slice(0, 3);
  return (
    <>
      <div
        className={`${styles.background} ${
          isBackgroundSmall ? styles.smallBackground : ""
        }`}
      >
        <Wrapper>
          <div className={styles.control}>
            <div className={styles.text}>
              <h2 className={styles.text1}>Ongoing</h2>
              <h2 className={styles.text2}>Match</h2>
            </div>
            <div className={styles.match}>
              <div className={styles.chelsea}>
                <img src={Chelsea} alt="Chelsea" />
                <h2>Chelsea</h2>
              </div>
              <div className={styles.vs}>
                <img src={VS} alt="" />
                <h2>09.30</h2>
              </div>
              <div className={styles.manchesteru}>
                <img src={ManchesterU} alt="ManchesterU" />
                <h2>M.United</h2>
              </div>
            </div>
            <div className={styles.button}>
              <Link to={'/livetrack'}>Live Track</Link>
            </div>
          </div>
        </Wrapper>
      </div>

      <div className={styles.background1}>
      <div className={styles.vector} onClick={handleBackgroundToggle}>
              {isArrowIconHidden ? <ReverseArrowIcon onClick={handleReverseArrowIconClick} /> : <ArrowIcon />}
            </div>
        <Wrapper>
          <div className={styles.upcoming}>
            <h2>Upcoming Matches</h2>
          </div>
          <div className={styles.controlmaps}>
            {filteredData?.map((item) => (
              <div className={styles.mapbackground}>
                <div className={styles.matchdate}>
                  <h2>{item.date}</h2>
                </div>
                <div className={styles.matchname}>
                  <div className={styles.rival}>
                    <img src={item.rival} alt="" />
                    <h2>{item.rivalname}</h2>
                  </div>
                  <div className={styles.minus}>
                    <h2>-</h2>
                  </div>
                  <div className={styles.mapchelsea}>
                    <h2>{item.name}</h2>
                    <img src={item.chelseaphoto} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default HomePage;
