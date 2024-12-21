export const fetchNews = async (category = 'general', country = 'us') => {
  const apiKey = '47dbc2f6d0da468d8e2d31ee4e88cb94';
  const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
