export const setPreferences = (sources, categories, authors) => ({
    type: 'SET_PREFERENCES',
    payload: { sources, categories, authors },
  });
  