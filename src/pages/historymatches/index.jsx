import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI";

import Chelsea2 from "../../assets/images/chelsea2.png";


import Ning from "../../assets/images/ning.png";
import Avondale from "../../assets/images/avondale.png";
import Pegasus from "../../assets/images/pegasus.png";
import Juventus from "../../assets/images/juventus.png";
import Barcelona from "../../assets/images/barcelona.png";
import {BackArrowIcon} from "../../icons"
import { Link } from "react-router-dom";
const HistoryMatches = () => {
    const [data, setData] = useState([
        {
            link:"/historyoverview",
          date: "3 December 2023, 11.30",
          rival: `${Ning}`,
          rivalname: "Fu Ning F.C",
          name: "Chelsea",
          chelseaphoto: `${Chelsea2}`,
        },
        {
          link:"/historyoverview",
          date: "10 December 2023, 14.30",
          rival: `${Avondale}`,
          rivalname: "Avondale F.C",
          name: "Chelsea",
          chelseaphoto: `${Chelsea2}`,
        },
        {
          link:"/historyoverview",
          date: "11 December 2023, 12.30",
          rival: `${Pegasus}`,
          rivalname: "Pegasus United",
          name: "Chelsea",
          chelseaphoto: `${Chelsea2}`,
        },
        {
          link:"/historyoverview",
          date: "19 December 2023, 20.30",
          rival: `${Juventus}`,
          rivalname: "Juventus",
          name: "Chelsea",
          chelseaphoto: `${Chelsea2}`,
        },
      ]);
      const backHistory = () => {
        window.history.back();
      };
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.text}>
        <div onClick={() => backHistory()} className={styles.backicon}>
                <BackArrowIcon />
              </div>
          <h2>Match History</h2>
          <span></span>
        </div>
        <div className={styles.controlmaps}>
            {data?.map((item) => (
              <Link to={item.link} className={styles.mapbackground}>
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
              </Link>
            ))}
          </div>
      </Wrapper>
    </div>
  );
};

export default HistoryMatches;
