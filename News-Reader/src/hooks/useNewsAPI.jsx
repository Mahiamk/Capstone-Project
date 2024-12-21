import { useState, useEffect } from 'react';

const useNewsAPI = (query = '', category = 'general') => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const apiKey = '47dbc2f6d0da468d8e2d31ee4e88cb94';
        const url = `https://newsapi.org/v2/top-headlines?category=${category}&q=${query}&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch news', err);
        setLoading(false);
      }
    };

    fetchNews();
  }, [query, category]);

  return { articles, loading, error };
};

export default useNewsAPI;
