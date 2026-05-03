export interface Product {
    id: string;
    emoji: string;
    title: string;
    price: string;
    category: string;
    tag: 'new' | 'used' | 'negotiable';
    description: string;
    specs: {label:string; value:string}[];
    seller: string
    location: string;
    images: string[];
}