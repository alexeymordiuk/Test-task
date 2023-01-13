import { FC } from "react";
import { CardsData } from "../../../interface/cards.interface";
import CardItem from "./CardItem";
import styles from "./Card.module.scss";
import { Status } from "../../../store/fetch/dataSlice";

interface CardsInfoData {
  items: CardsData[];
  status: Status;
  value: string;
}

const Cards: FC<CardsInfoData> = ({ items, status, value }) => {
  const card = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }
      if (obj.description.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((cards) => <CardItem key={cards.id} {...cards} value={value} />);

  const count = items.reduce((sum, item) => (sum += item.count), 0);

  return (
    <section className={styles.inner}>
      <p className={styles.count}>Results: {count}</p>
      {status === "error" ? (
        <div>Error</div>
      ) : (
        <div className={styles["cards-wrraper"]}>{card}</div>
      )}
    </section>
  );
};

export default Cards;
