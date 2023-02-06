import { Timestamp } from "@angular/fire/firestore";

export type Product = {
    id?: string;
    name: string;
    description: string;
    images: string[];
    category: Category;
    averageRating: number;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    materials: Material[];
    variants: Variant[];
}
export type Variant = {
    name: string;
    price: number;
    weight: number;
    materials: Material[];
}
export type Material = {
    name: string;
    quantity: number;
}

export type Category = {
    id?: string;
    name: string;
    image: string;
    description: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}