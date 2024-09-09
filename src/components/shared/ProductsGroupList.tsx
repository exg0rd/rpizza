'use client'
import { ProductCard } from './ProductCard';
import { Product, ProductGroup } from '@/types/home';
import { useIntersection } from 'react-use'
import { useEffect, useRef } from 'react';
import { Title } from './Title';
import { useCategoryStore } from '../../../store/category';

interface Props {
    className?: string;
    productGroup: ProductGroup;
}



export const ProductsGroupList: React.FC<Props> = ({ className, productGroup }) => {

    const products = productGroup.products;

    const setActiveCategoryId = useCategoryStore((state: { setActiveId: any; }) => state.setActiveId);
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    })

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(productGroup.groupId);
        }
    }, [productGroup.groupId, intersection?.isIntersecting]);


    return (
        <div id={productGroup.title} ref={intersectionRef}>
            <Title text={productGroup.title} size="lg" className="font-extrabold"/>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 my-10" id={productGroup.groupId}>
                {products.map((product: Product) => (
                    <ProductCard
                        key={product.productId}
                        product={product}
                        className="flex flex-col shadow-md p-5 rounded-xl"
                    />
                ))}
            </div>
        </div>
    );
};
