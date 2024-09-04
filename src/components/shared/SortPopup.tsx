import { ArrowUpDown } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                'flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
                className
            )}
        >
            <ArrowUpDown size={16}></ArrowUpDown>
            <b>Сортировка:</b>
            <b className="text-primary">популярное</b>
        </div>
    );
};
