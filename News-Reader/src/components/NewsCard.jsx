import PropTypes from 'prop-types'; // Import PropTypes

const NewsCard = ({ article }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{article.title}</h2>
        <p className="text-gray-700 mt-2">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 mt-2 block"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

// Prop validation for the 'article' prop
NewsCard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired, // 'title' should be a string and required
    description: PropTypes.string, // 'description' should be a string (optional)
    url: PropTypes.string.isRequired, // 'url' should be a string and required
    urlToImage: PropTypes.string, // 'urlToImage' should be a string (optional)
    publishedAt: PropTypes.string, // 'publishedAt' should be a string (optional)
  }).isRequired,
};

export default NewsCard;
