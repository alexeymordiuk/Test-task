import { FC, useEffect, useState } from "react";
import Header from "../components/header/Header";
import Cards from "../components/ui/cards/Cards";
import Spinner from "../components/utils/Spinner";
import { useAppDispatch, useAppSelector } from "../hooks/useActions";
import { selectCardsData } from "../store/fetch/dataSlice";
import { fetchCards } from "../store/fetch/fetchData";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector(selectCardsData);
  const [value, setValue] = useState("");

  useEffect(() => {
    const getCards = async () => {
      dispatch(fetchCards({}));
    };
    getCards();
  }, []);

  return (
    <>
      <div className="container">
        <Header value={value} setValue={setValue} />
        {status === "loading" ? (
          <Spinner />
        ) : (
          <Cards items={items} status={status} value={value} />
        )}
      </div>
    </>
  );
};

export default Home;
