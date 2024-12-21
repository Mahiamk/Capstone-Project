import { useEffect, useState } from 'react';
import NewsList from './components/NewsList';
import { fetchNews } from './services/newsService';
import Loader from './components/Loader';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews();
      setArticles(data);
      setLoading(false);
    };

    getNews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Latest News</h2>

      {loading ? (
        <Loader />
      ) : (
        <NewsList articles={articles} />
      )}
    </div>
  );
};

export default Home;
