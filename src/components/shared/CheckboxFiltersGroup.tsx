'use client';

import { useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './FilterCheckbox';
import { Input } from '@/components/ui';

type Item = FilterCheckboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit: number;
    searchInputPlaceHolder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit,
    searchInputPlaceHolder = 'Поиск',
    onChange,
    defaultValue,
    className,
}) => {
    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const ingredientList = showAll
        ? items.filter((item) =>
              item.text.toLowerCase().includes(searchValue.toLowerCase())
          )
        : items?.slice(0, limit);

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>
            {showAll && (
                <div className="mb-5">
                    <Input
                        placeholder={searchInputPlaceHolder}
                        className="bg-gray-50 border-none"
                        onChange={onChangeSearchInput}
                    ></Input>
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {ingredientList.map((item, index) => (
                    <FilterCheckbox
                        onCheckedChange={() => onCheckedChange(item.value)}
                        checked={false}
                        key={String(item.value)}
                        value={item.value}
                        text={item.text}
                        endAdornment={item.endAdornment}
                    />
                ))}
                {ingredientList.length === 0 ? <p>Ничего не найдено</p> : ''}
                {items.length > limit && (
                    <div
                        className={
                            showAll ? 'border-t border-t-neutral-100 mt-4' : ''
                        }
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-primary mt-3"
                        >
                            {showAll ? 'Скрыть' : 'Показать всё'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
