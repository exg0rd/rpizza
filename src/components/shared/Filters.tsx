'use client';

import React from 'react';
import {
    Title,
    FilterCheckbox,
    RangeSlider,
    CheckboxFiltersGroup,
} from '@/components/shared';
import { Input } from '@/components/ui';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Фильтры" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={2599}
                        defaultValue={0}
                        step={50}
                    ></Input>
                    <Input
                        type="number"
                        placeholder="3000"
                        min={100}
                        max={3000}
                        step={50}
                        defaultValue={1500}
                    ></Input>
                </div>
                <RangeSlider
                    min={0}
                    max={3000}
                    step={10}
                    value={[0, 3000]}
                ></RangeSlider>
            </div>
            <CheckboxFiltersGroup
                className="mt-5"
                title="Ингредиенты"
                limit={5}
                defaultItems={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарелла',
                        value: '2',
                    },
                    {
                        text: 'Чеснок',
                        value: '3',
                    },
                    {
                        text: 'Солёные огурчики',
                        value: '4',
                    },
                    {
                        text: 'Красный лук',
                        value: '5',
                    },
                    {
                        text: 'Томаты',
                        value: '6',
                    },
                ]}
                items={[
                    // Существующие элементы
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарелла',
                        value: '2',
                    },
                    {
                        text: 'Чеснок',
                        value: '3',
                    },
                    {
                        text: 'Солёные огурчики',
                        value: '4',
                    },
                    {
                        text: 'Красный лук',
                        value: '5',
                    },
                    {
                        text: 'Томаты',
                        value: '6',
                    },
                    // Дополнительные элементы
                    {
                        text: 'Пепперони',
                        value: '7',
                    },
                    {
                        text: 'Грибы',
                        value: '8',
                    },
                    {
                        text: 'Бекон',
                        value: '9',
                    },
                    {
                        text: 'Оливки',
                        value: '10',
                    },
                    {
                        text: 'Ананас',
                        value: '11',
                    },
                    {
                        text: 'Салями',
                        value: '12',
                    },
                    {
                        text: 'Шпинат',
                        value: '13',
                    },
                    {
                        text: 'Фета',
                        value: '14',
                    },
                    {
                        text: 'Горький перец',
                        value: '15',
                    },
                    {
                        text: 'Барбекю соус',
                        value: '16',
                    },
                    {
                        text: 'Куриное филе',
                        value: '17',
                    },
                    {
                        text: 'Сыр Чеддер',
                        value: '18',
                    },
                    {
                        text: 'Сыр Пармезан',
                        value: '19',
                    },
                    {
                        text: 'Лосось',
                        value: '20',
                    },
                ]}
            />
        </div>
    );
};
