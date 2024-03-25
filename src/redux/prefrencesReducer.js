const initialState = {
    sources: [],
    categories: [],
    authors: [],
  };
  
  const preferencesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PREFERENCES':
        return {
          ...state,
          sources: action.payload.sources,
          categories: action.payload.categories,
          authors: action.payload.authors,
        };
      default:
        return state;
    }
  };
  
  export default preferencesReducer;
  