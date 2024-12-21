import PropTypes from 'prop-types'; // Import PropTypes
import NewsCard from './NewsCard';

const NewsList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

// Prop validation for the 'articles' prop
NewsList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string.isRequired,
      urlToImage: PropTypes.string,
      publishedAt: PropTypes.string,
    })
  ).isRequired,
};

export default NewsList;
