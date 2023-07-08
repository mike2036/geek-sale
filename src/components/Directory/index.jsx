import './index.scss';
import { DirectoryItem } from '../../components';

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <DirectoryItem key={item.id} category={item} />
      ))}
    </div>
  );
};

export default Directory;
