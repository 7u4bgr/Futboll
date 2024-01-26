import React, { useState } from 'react';
import styles from './index.module.css';
import Wrapper from '../../UI/';
import { HistoryIcon, HomeIcon, UserIcon } from '../../../icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [link1, setLink1] = useState(true);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);

  const trueClick1 = () => {
    if (!link1) {
      setLink1(true);
    setLink2(false); 
    setLink3(false); 
    }
  
  };

  const trueClick2 = () => {
    if (!link2) {
      setLink1(false);
    setLink2(true); 
    setLink3(false); 
    }
  };
  const trueClick3 = () => {
    if (!link3) {
      setLink1(false);
    setLink2(false); 
    setLink3(true); 
    }
  };

  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <Link
            to={"/"}
            style={{ color: link1 ? "#FF7800" : "#7D7D7D" }}
            onClick={trueClick1}
          >
            <HomeIcon />
          </Link>
          <Link
           to={"/history"}
            style={{ color: link2 ? "#FF7800" : "#7D7D7D" }}
            onClick={trueClick2}
          >
             <HistoryIcon />
          </Link>
          <Link
            to={"/user"}
            style={{ color: link3 ? "#FF7800" : "#7D7D7D" }}
            onClick={trueClick3}
          >
                      <UserIcon />

          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
