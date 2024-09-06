import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
}

const categories: Array<string> = [
    'Пиццы',
    'Комбо',
    'Закуски',
    'Коктейли',
    'Кофе',
    'Напитки',
    'Десерты',
]; // server request

const activeIndex: number = 0;

export const Categories: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                'flex gap-1 bg-gray-50 p-1 rounded-2xl overflow-x-auto snap-x',
                className
            )}
        >
            {categories.map((name, index) => (
                <a
                    key={index}
                    className={cn(
                        'flex text-xs md:text-sm items-center font-bold h-10 rounded-2xl px-2',
                        activeIndex === index &&
                            'bg-white shadow-md shadow-gray-200 text-primary'
                    )}
                >
                    <button>{name}</button>
                </a>
            ))}
        </div>
    );
};
