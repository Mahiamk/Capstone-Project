import { useState } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Header = ({ onSearch, onCategoryChange, onLanguageChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedSearchQuery) {
      onSearch(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, onSearch]);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleCategoryChange = (e) => onCategoryChange(e.target.value);
  const handleLanguageChange = (e) => onLanguageChange(e.target.value);

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">NewsReader</Link>
        <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 rounded-l-md border border-gray-300 w-full"
            placeholder="Search news here..."
          />
          <select onChange={handleCategoryChange} className="p-2 rounded-md border">
            <option value="">Category</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="sports">Sports</option>
            <option value="health">Health</option>
            <option value="entertainment">Entertainment</option>
          </select>
          <select onChange={handleLanguageChange} className="p-2 rounded-md border">
            <option value="">Language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </form>
      </div>
    </header>
  );
};
