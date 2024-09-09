export interface Product {
    productId: string;
    imageUrl: string;
    name: string;
    price: number[];
    description: string;
    type: string[];
    ingredients: string[];
    size: ['small', 'large']
}

export interface ProductProps extends Product {
    className?: string;
    product: Product;
}

export interface ProductGroup {
    products: Product[];
    title: string;
    groupId: string;
}