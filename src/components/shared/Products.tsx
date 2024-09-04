import React from 'react';
import PizzaMockData from '@/constants/PizzaMock';
import { Product, ProductCard } from './ProductCard';

interface Props {
    className?: string;
}

export const Products: React.FC<Props> = ({ className }) => {
    const productsArray: Product[] = PizzaMockData;

    return (
        <div className="mx-5 grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
            {productsArray.map((product, index) => (
                <ProductCard
                    key={product.productId}
                    product={product}
                    className="shadow-md p-3 rounded-xl"
                />
            ))}
        </div>
    );
};
