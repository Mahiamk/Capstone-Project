import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-5">
      <h1 className="text-xl font-bold text-left mb-8">NewsReader</h1>
      <ul className="mb-4">
          <button><Link to="/">Home</Link></button>
          <button><Link to="/business">Business</Link></button>
          <button><Link to="/technology">Technology</Link></button>
          <button><Link to="/sports">Sports</Link></button>
          <button><Link to="/health">Health</Link></button>
          <button><Link to="/entertainment">Entertainment</Link></button>
      </ul>
    </div>
  );
};

export default Sidebar;
