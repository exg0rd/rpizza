import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Title } from './Title';

interface Props {
    className?: string;
}

export interface Product {
    productId: string;
    imageUrl: string;
    name: string;
    price: number;
    description: string;
    type: string;
}

interface ProductProps extends Props {
    product: Product;
}

export const ProductCard: React.FC<ProductProps> = ({ product, className }) => {
    const { productId, imageUrl, name, description, price } = product;
    return (
        <div className={cn('', className)}>
            <Link href={`/product/${productId}`}>
                <div className="justify-center bg-secondary rounded-lg">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="mb-4"
                    ></img>
                </div>
            </Link>
            <Title text={name} size="sm" className="font-bold"></Title>
            <p className='h-1/2'>{description}</p>
            <div className="flex justify-between mt-10">
                <p className="font-extrabold">{price}$</p>
                <Button className="font-bold">Выбрать</Button>
            </div>
        </div>
    );
};
