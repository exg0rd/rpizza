import {
    Container,
    Filters,
    ProductsGroupList,
    Title,
    Topbar,
} from '@/components/shared';

import PizzaMockData from '@/constants/PizzaMock';
import { Product, ProductGroup } from '@/types/home';


// mock data  
const productsArray: Product[] = PizzaMockData;
const productGroups: ProductGroup[] = [{ products: PizzaMockData, title: 'Пиццы', groupId: 'pizzas' }, { products: PizzaMockData, title: 'Напитки', groupId: 'drinks'}]

export default function Home() {
    return (
        <>
            <Topbar/>
            <Container className="mt-10 pb-14">
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="basis-1/6">
                        <Filters/>
                    </div>

                    <div className='basis-5/6'>
                        <ProductsGroupList productGroup={productGroups[0]}/>
                        <ProductsGroupList productGroup={productGroups[1]}/>
                    </div>
                </div>
            </Container>
        </>
    );
}
