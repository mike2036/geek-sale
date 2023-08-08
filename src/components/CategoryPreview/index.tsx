import React, { FC } from 'react';
import { ProductCard } from '..';
import {
  CategoryPreviewContainer,
  CategoryTitle,
  CategoryPreviewItem,
} from './index.styles';
import { CategoryItem as TCategoryItem } from '../../store/categories/categories.type';

type CategoryPreviewProps = {
  title: string;
  products: TCategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
      </h2>
      <CategoryPreviewItem>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewItem>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
