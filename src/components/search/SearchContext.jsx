import { createContext, useState, useContext } from 'react';

// Create a SearchContext
const SearchContext = createContext();

// Provider component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(''); // Manage search query state

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}  {/* Render children components */}
    </SearchContext.Provider>
  );
};

// Custom hook to use the SearchContext
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;  // Return the search query state and setter
};