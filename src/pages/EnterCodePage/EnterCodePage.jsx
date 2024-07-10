import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./EnterCodePage.module.css";
import HelpIcon from '../../Components/HelpIconComponents/HelpIcon';

function EnterCodePage() {
  const [code, setCode] = useState(''); // 코드 담아두는 변수
  const [isCodeCorrect, setIsCodeCorrect] = useState(null); //입력한 코드와 
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = () => {
    if (code === '1234') {
      setIsCodeCorrect(true);
      navigate('/loading');
    } else {
      setIsCodeCorrect(false);
    }
  };

  return (
    <div className={styles["enterCodePage"]}>
      <div className={styles["logo"]}>
        <img src={process.env.PUBLIC_URL + '/Image/free-icon-bus-1168001.png'} className={styles["bus-icon"]} alt="Bus Logo" />
      </div>
      <div className={styles["title"]}>내 버스 찾아죠</div>
      <div className={styles["inputContainer"]}>
        <input
          type="text"
          placeholder="고유코드를 입력하세요."
          value={code}
          onChange={handleChange}
        />
        <button type="button" className={styles["button"]}onClick={handleSubmit}>접속</button>
        {isCodeCorrect === false && (
          <p className={styles["error-message"]}>코드가 틀렸습니다. 다시 시도하세요.</p>
        )}
      </div>
      <HelpIcon />
    </div>
  );
}

export default EnterCodePage;
