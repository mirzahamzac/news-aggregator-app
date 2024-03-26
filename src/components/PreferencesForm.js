import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPreferences } from "../redux/preferencesActions";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Container,
  Modal,
  Box,
  Typography,
  Button,
} from "@mui/material";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PreferencesForm = ({
  open,
  close,
  categories,
  sources,
  authors,
  onFilterChange,
}) => {
  const dispatch = useDispatch();
  const [sources1, setSources] = useState([]);
  const [categories1, setCategories] = useState([]);
  const [authors1, setAuthors] = useState([]);
  const [catValue, setCatValue] = React.useState();
  const [sourceValue, setSourceValue] = React.useState();
  const [authValue, setAuthValue] = React.useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPreferences(sources1, categories1, authors));
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const savePrefrences =()=> {
debugger
    dispatch(setPreferences(sourceValue,catValue,authValue))


  }


  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                {" "}
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    className="form-control"
                    onChange={onFilterChange}
                    name="category"
                    value={catValue}
                    disabled={
                      categories && categories.length > 0 ? false : true
                    }
                  >
                    <MenuItem>All Categories</MenuItem>
                    {categories &&
                      categories.length > 0 &&
                      categories.map((category) => (
                        <MenuItem
                          key={category}
                          value={category}
                          onClick={() => setCatValue(category)}
                        >
                          {category}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {" "}
                <FormControl fullWidth>
                  <InputLabel>Source</InputLabel>

                  <Select
                    className="form-control"
                    onChange={onFilterChange}
                    name="source"
                    disabled={sources && sources.length > 0 ? false : true}
                    value={sourceValue}
                  >
                    <MenuItem value="">All Sources</MenuItem>
                    {sources &&
                      sources.length > 0 &&
                      sources.map((source) => (
                        <MenuItem
                          key={source}
                          value={source}
                          onClick={() => setSourceValue(source)}
                        >
                          {source}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                {" "}
                <FormControl fullWidth>
                  <InputLabel>Author</InputLabel>

                  <Select
                    className="form-control"
                    onChange={onFilterChange}
                    name="source"
                    disabled={authors && authors.length > 0 ? false : true}
                  >
                    <MenuItem value="">All Authors</MenuItem>
                    {authors &&
                      authors.length > 0 &&
                      authors.map((author) => (
                        <MenuItem
                          key={author}
                          value={author}
                          onClick={() => setAuthValue(author)}
                        >
                          {author}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Item>
            </Grid>
            {/* <Grid item xs={4}>
            <Item>
              <FormControl fullWidth>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </FormControl>
            </Item>
          </Grid> */}

            <Button className="primary" onClick={() => savePrefrences()}>Set User Prefrences</Button>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default PreferencesForm;
