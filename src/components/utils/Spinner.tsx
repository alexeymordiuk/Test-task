import { FC } from "react";
import styles from "./Spinner.module.scss";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner: FC = () => {
  return (
    <div className={styles.spinner}>
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress color="inherit"/>
      </Stack>
    </div>
  );
};

export default Spinner;
