import { FC } from "react";
import styles from "./CardsAbout.module.scss";

interface Info {
  description: string;
  title: string;
}

const CardsAbout: FC<Info> = ({ description, title }) => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        <p className={styles.text}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardsAbout;
