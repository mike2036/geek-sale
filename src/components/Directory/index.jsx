import './index.scss'
import CategoryItem from '../CategoryItem'

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((item) =>
        <CategoryItem
          key={item.id}
          category={item}
        />)
      }
    </div>
  )

}

export default Directory