import { FC } from "react";
import styles from "./Card.module.scss";
import EastIcon from "@mui/icons-material/East";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

interface CardsItemsProps {
  img: string;
  date: string;
  title: string;
  description: string;
  id: number;
  value: string;
}

const CardItem: FC<CardsItemsProps> = ({
  img,
  date,
  title,
  description,
  id,
  value,
}) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} />
      <div className={styles.content}>
        <span className={styles.date}>
          <DateRangeIcon className={styles["date-icon"]} />
          {date}
        </span>
        <h2 className={styles.title}>
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={[value]}
            autoEscape={true}
            textToHighlight={title}
          />
        </h2>
        <p className={styles.text}>
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={[value]}
            autoEscape={true}
            textToHighlight={description}
          />
        </p>
        <Link to={`/info/${id}`}>
          <button className={styles["btn-more"]}>
            Read More <EastIcon />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardItem;

