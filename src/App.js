// src/App.js
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import NewsFeed from "./components/NewsFeed";
import fetchNews from "./services/newsServices";
import SourceDropdown from "./components/SourceDropdown";
import Modal from "./components/Modal";
import PreferencesForm from "./components/PreferencesForm";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Button, Container } from "@mui/material";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ filterType: "" });
  const [news, setNews] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // const handleOpenModal = (message) => {
  //   setErrorMessage(message);
  //   setOpenModal(true);
  // };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({ [filterType]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      debugger;
      const articles = await fetchNews(searchTerm, filters);
      debugger;
      if (articles && articles?.length > 0) {
        setNews(articles);
        setFilters(filters);
      } else if (articles !== undefined && filters?.filterType !== "") {
        setNews([]);
        setOpenModal(true);
        setErrorMessage(
          "Something went wrong while fetching data from API. Try again later."
        );
      }
    };

    fetchData();
  }, [searchTerm, filters]);

  return (
    <div className="container">
      <br />
    
      <Provider store={store}>
        <Container>
        <h1>News Aggregator Website</h1>
          <SourceDropdown handleFilterChange={handleFilterChange} />
          <SearchBar
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
            filters={filters?.filterType}
          />
          <Filters handleFilterChange={handleFilterChange} />

          <Button className="btn-primary" onClick={handleOpen}>
            Set User Prefrences
          </Button>

          {open && (
            <>
              <PreferencesForm open={open} close={handleClose} />
            </>
          )}

          <Modal
            open={openModal}
            onClose={handleCloseModal}
            errorMessage={errorMessage}
          />

          <NewsFeed articles={news} filters={filters?.filterType} />
        </Container>
      </Provider>
    </div>
  );
};

export default App;
