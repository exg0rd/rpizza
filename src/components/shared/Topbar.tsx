import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { SortPopup } from './SortPopup';
import { Categories } from './Categories';
interface Props {
    className?: string;
}

export const Topbar: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
                className
            )}
        >
            <Container className="flex items-center gap-3">
                <Categories></Categories>
                <SortPopup></SortPopup>
            </Container>
        </div>
    );
};
