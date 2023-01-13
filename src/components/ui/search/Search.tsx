import { Dispatch, FC, SetStateAction } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export interface Searched {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const Search: FC<Searched> = ({ value, setValue }) => {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 450 }}
      className="input"
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="The most successful IT companies in 2020"
        inputProps={{ "aria-label": "search google maps" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Paper>
  );
};

export default Search;
