import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI";
import Chelsea from "../../assets/images/chelsea.png";
import {
  BackArrowIcon,
  BlackIcon,
  BlueIcon,
  CloudIcon,
  OrangeIcon,
  PinkIcon,
  RedIcon,
} from "../../icons";
import ManchesterU from "../../assets/images/manchesteru.png";
import StadionImage from "../../assets/images/stadion.png";
import Ball from "../../assets/images/ball.png";
const LiveTrack = () => {
  const [tracker, setTracker] = useState(true);
  const [log, setLog] = useState(false);
  const [video, setVideo] = useState(false);
  const trackerClick = () => {
    if (!tracker) {
      setTracker(true);
      setLog(false);
      setVideo(false);
    }
  };
  const logClick = () => {
    if (!log) {
      setTracker(false);
      setLog(true);
      setVideo(false);
    }
  };
  const videoClick = () => {
    if (!video) {
      setTracker(false);
      setLog(false);
      setVideo(true);
    }
  };
  const backHistory = () => {
    window.history.back();
  };
  return (
    <>
      <div className={styles.background}>
        <Wrapper>
          <div className={styles.control}>
            <div className={styles.text}>
              <div onClick={() => backHistory()} className={styles.backicon}>
                <BackArrowIcon />
              </div>
              <div className={styles.backarrow}>
                <h2 className={styles.text1}>Live</h2>
                <h2 className={styles.text2}>Track</h2>
              </div>
              <span></span>
            </div>
            <div className={styles.match}>
              <div className={styles.chelsea}>
                <img src={Chelsea} alt="Chelsea" />
                <h2></h2>
              </div>
              <div className={styles.vs}>
                <h1>1 : 0</h1>
                <h2>1st Half 26:00</h2>
              </div>
              <div className={styles.manchesteru}>
                <img src={ManchesterU} alt="ManchesterU" />
                <h2></h2>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className={styles.background1}>
        <Wrapper>
          <div className={styles.controltext}>
            <div className={styles.headertext}>
              <div className={styles.trackeractive}>
                <h2
                  className={tracker ? styles.blueText : null}
                  onClick={() => trackerClick()}
                >
                  Tracker
                </h2>
                {tracker && <hr className={styles.blueHR} />}{" "}
              </div>
              <div className={styles.trackeractive}>
                <h2
                  className={log ? styles.blueText : null}
                  onClick={() => logClick()}
                >
                  Log
                </h2>
                {log && <hr className={styles.blueHR} />}{" "}
              </div>
              <div className={styles.trackeractive}>
                <h2
                  className={video ? styles.blueText : null}
                  onClick={() => videoClick()}
                >
                  Video
                </h2>
                {video && <hr className={styles.blueHR} />}{" "}
              </div>
            </div>
          </div>
        </Wrapper>
        <div className={styles.trackercontrol}>
          <div className={styles.controlstadion}>
            {tracker ? (
              <div className={styles.divs}>
                <div className={styles.svg1}>
                  <BlackIcon />
                </div>
                <div className={styles.svg2}>
                  <RedIcon />
                </div>
                <div className={styles.svg3}>
                  <OrangeIcon />
                </div>
                <div className={styles.svg4}>
                  <CloudIcon />
                </div>
                <div className={styles.svg5}>
                  <PinkIcon />
                </div>
                <div className={styles.svg6}>
                  <BlueIcon />
                </div>
                <div className={styles.svg7}>
                  <img src={Ball} alt="" />
                </div>
                <img
                  className={styles.img}
                  src={StadionImage}
                  alt="StadionImage"
                />
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.logcontrol}>
          {log ? (
            <div className={styles.flexslog}>
              <Wrapper>
                <div className={styles.log1}>
                  <h3>(Penalty)</h3>
                  <h2>23 - Carlos Henrique</h2>
                  <h1>24:45</h1>
                </div>
                <div className={styles.log2}>
                  <h3>(Out)</h3>
                  <h2>10 - Marcus Rashford</h2>
                  <h1>20:00</h1>
                </div>
              </Wrapper>
            </div>
          ) : null}
        </div>
        <div className={styles.videocontrol}>
          {video ? (
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/nq2zdQGV2g0?si=yUTP6VQv1p4S4ymp"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default LiveTrack;
