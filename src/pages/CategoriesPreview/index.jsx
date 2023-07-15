import { Fragment } from 'react';
import { CategoryPreview, Spinner } from '../../components';
import { useSelector, shallowEqual } from 'react-redux';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/categories.selector';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap, shallowEqual);
  // console.log('categoriesMap:', categoriesMap);

  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {categoriesIsLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
