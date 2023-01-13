import { FC } from "react";
import Search, { Searched } from "../ui/search/Search";
import styles from "./Header.module.scss";

const Header: FC<Searched> = ({value, setValue}) => {
 
  return (
    <header className={styles.header}>
      <h3>Filter by keywords</h3>
      <Search value={value} setValue={setValue} />
    </header>
  );
};

export default Header;
