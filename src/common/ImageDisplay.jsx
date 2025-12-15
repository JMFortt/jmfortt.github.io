import { useState } from "react";
import styles from "./ImageDisplayStyles.module.css";
import defaultImg from "../assets/placeholder.svg";

function ImageDisplay({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };
  const next = () => {
    setIndex((index + 1) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className={styles.imageDisplay}>
        <img src={defaultImg} alt="Default" className={styles.image} />
      </div>
    );
  } else if (images.length === 1) {
    return (
      <div className={styles.imageDisplay}>
        <img src={images[0]} alt="Image" className={styles.image} />
      </div>
    );
  } else {
    return (
      <div className={styles.imageDisplay}>
        <img
          src={images[index]}
          alt={`Slide ${index}`}
          className={styles.image}
        />
        <button className={styles.prev} onClick={prev}>
          ‹
        </button>
        <button className={styles.next} onClick={next}>
          ›
        </button>
      </div>
    );
  }
}

export default ImageDisplay;
