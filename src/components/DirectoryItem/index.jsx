import './index.scss';
import { Link } from 'react-router-dom';

const DirectoryItem = ({ key, category }) => {
  const { imageUrl, title } = category;
  return (
    <Link className="directory-item-container" to={`/shop/${title}`}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </Link>
  );
};

export default DirectoryItem;
