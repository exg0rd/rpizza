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
                'flex flex-1 gap-1 bg-gray-50 p-1 rounded-2xl overflow-x-auto snap-x scroll-proximity',
                className
            )}
        >
            {categories.map((name, index) => (
                <a
                    key={index}
                    className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        activeIndex === index &&
                            'bg-wite shadow-md shadow-gray-200 text-primary'
                    )}
                >
                    <button>{name}</button>
                </a>
            ))}
        </div>
    );
};
