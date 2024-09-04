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
                <div className="justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="h-[220px] w-[220px] mb-1 object-contain"
                    ></img>
                </div>
                <Title text={name} size="md" className="font-extrabold"></Title>
                <p>{description}</p>
                <div className="flex justify-between">
                    <p className="font-extrabold mt-3">{price}$</p>
                    <Button className="font-bold">Выбрать</Button>
                </div>
            </Link>
        </div>
    );
};
