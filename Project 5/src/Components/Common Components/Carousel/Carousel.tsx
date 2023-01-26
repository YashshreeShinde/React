import React, { useEffect, useState } from "react";
import IconComponent from "../Icon Component/IconComponent";
import styles from "./Carousel.module.scss";

const Carousel = ({data}:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevIndex = () => {
    currentIndex > 0 && setCurrentIndex(currentIndex - 1);
  };

  const goToNextIndex = () => {
    currentIndex < data.length - 1 && setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === data.length-1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);


  return (
    <div className={styles["carousel"]}>
      <div
        className={styles["components"]}
        style={{ backgroundImage: `url(${data[currentIndex].img})` }}
      >
        <div className={styles["left"]} onClick={goToPrevIndex}>
          <IconComponent icon="BsFillArrowLeftCircleFill" size={"2rem"}/>
        </div>

        <div className={styles["center"]}>
          <h1>{data[currentIndex].title}</h1>
          <p>{data[currentIndex].subtitle}</p>
        </div>

        <div className={styles["right"]} onClick={goToNextIndex}>
        <IconComponent icon="BsFillArrowRightCircleFill" size={"2rem"}/>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
