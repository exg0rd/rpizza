import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Title } from './Title';
import { Plus } from 'lucide-react';
import { ProductProps } from '@/types/home';

export const ProductCard: React.FC<ProductProps> = ({ product, className }) => {
    const { productId,
        imageUrl,
        name,
        price,
        description,
        type,
        ingredients } = product;
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
            <div className="flex items-center justify-between mt-10">
                <p className="font-extrabold">От {price}₽</p>
                <Button variant="secondary" className="font-bold">
                    <Plus size={20} className="mr-1"></Plus>
                    Выбрать
                </Button>
            </div>
        </div>
    );
};
