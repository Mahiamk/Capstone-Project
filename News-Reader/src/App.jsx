import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import NewsList from './components/NewsList';
import useNewsAPI from './hooks/useNewsAPI';
import Footer from './components/Footer';
import PropTypes from "prop-types";

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header onSearch={handleSearch} />
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Latest News</h1>
            <Routes>
              {/* Default Route: Fetch all articles or handle Home */}
              <Route
                path="/"
                element={<NewsPage query={searchQuery} category="general" />}
              />
              {/* Category-specific routes */}
              <Route
                path="/business"
                element={<NewsPage query={searchQuery} category="business" />}
              />
              <Route
                path="/technology"
                element={<NewsPage query={searchQuery} category="technology" />}
              />
              <Route
                path="/sports"
                element={<NewsPage query={searchQuery} category="sports" />}
              />
              <Route
                path="/health"
                element={<NewsPage query={searchQuery} category="health" />}
              />
              <Route
                path="/entertainment"
                element={<NewsPage query={searchQuery} category="entertainment" />}
              />
            </Routes>
            <div className="flex-1"><Footer /></div>
          </div>
        </div>
      </div>
    </Router>
  );
};

const NewsPage = ({ query, category }) => {
  const { articles, loading, error } = useNewsAPI(query, category);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <NewsList articles={articles} />
      )}
    </div>
  );
};

// Define PropTypes for validation
NewsPage.propTypes = {
  query: PropTypes.string.isRequired, // query must be a string and is required
  category: PropTypes.string,         // category must be a string, but it is optional
};

// You can also define defaultProps if some props are optional
NewsPage.defaultProps = {
  category: "general", // Default category if not provided
};

export default App;
