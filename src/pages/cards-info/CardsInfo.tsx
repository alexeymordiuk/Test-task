import { FC, useState, useEffect } from "react";
import styles from "./CardsPage.module.scss";
import background from "../../assets/img/bg1.png";
import CardsAbout from "../../components/data-info/CardsAbout";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import Spinner from "../../components/utils/Spinner";
import { CardsData } from "../../interface/cards.interface";

const CardsInfo: FC = () => {
  const [info, setInfo] = useState<CardsData>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DATA_URL}${id}`)
      .then(({ data }) => setInfo(data));
  }, [id]);

  if (!info) {
    return <Spinner />;
  }

  return (
    <div className={styles.info}>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className={styles.bg}
      ></div>
      <section className={styles["info-content"]}>
        <div className="container">
          <div className={styles["about-cards"]}>
            <CardsAbout title={info.title} description={info.description} />
          </div>
          <Link to="/">
            <button className={styles["btn-back"]}>
              <WestIcon className={styles.arrow} /> Back to homepage
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CardsInfo;
