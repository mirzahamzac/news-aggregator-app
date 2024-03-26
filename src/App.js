// src/App.js
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import NewsFeed from "./components/NewsFeed";
import newsServices from "./services/news.services";
import SourceDropdown from "./components/SourceDropdown";
import Modal from "./components/Modal";
import PreferencesForm from "./components/PreferencesForm";
import * as services from "./services/news.services";
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
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sources, setSources] = useState([]);
  const [newsAPISources, setNewsAPISources] = useState([]);
  const [filters1, setFilters1] = useState({});

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

  const handleFilterChange1 = (e) => {
    debugger;
    const { name, value } = e.target;
    setFilters1((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  useEffect(() => {
    const fetchData = async () => {
      debugger
      const articles = await newsServices.fetchNews(
        searchTerm,
        filters,
        filters1
      );
      debugger;
      if (articles && articles?.length > 0) {
        setNews(articles);
        setFilters(filters);
      } else if (articles !== undefined && filters?.filterType !== "") {
        setNews([]);
        setOpenModal(true);
        setErrorMessage(
          "Something went wrong while fetching data from API or there might be no results according to the filter criteria. Try again later."
        );
      }
    };

    fetchData();
  }, [searchTerm, filters, filters1]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await newsServices.getSourcesByNewsSelection(
        filters?.filterType
      );
      //  setNewsAPISources(data)
      if (data !== undefined && data !== null && data.length > 0) {
        let arr = data.map((x) => x.name);

        let arr2 = data.map((x) => x.category);
        debugger;
        const fetchedSources = arr; // [ 'BBC News','NYT' ]; // Example sources
        const distinctSources = [...new Set(fetchedSources)];
        setSources(distinctSources);
        const fetchedCategories = arr2; //['Technology', 'Sports', 'Science']; // Example categories
        const distinctCategories = [...new Set(fetchedCategories)];
        setCategories(distinctCategories);
      }
    };
    // Fetch categories and sources
    fetchData();
  }, [filters]);

  return (
    <div className="container">
      <br />

      <Provider store={store}>
        <Container>
          <h1>News Aggregator Website</h1>
          <SourceDropdown handleFilterChange={handleFilterChange} setNews={setNews}/>
          <SearchBar
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
            filters={filters?.filterType}
          />
          <Filters //handleFilterChange={handleFilterChange}
            categories={categories}
            sources={sources}
            onFilterChange={handleFilterChange1}
          />

          <Button className="btn-primary" onClick={handleOpen}>
            Set User Prefrences
          </Button>

          {open && (
            <>
              <PreferencesForm
                open={open}
                close={handleClose}
                categories={categories}
                sources={sources}
                onFilterChange={handleFilterChange1}
              />
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
