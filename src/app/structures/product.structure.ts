import { Timestamp } from "@angular/fire/firestore";
import { Material } from "../admin/materials/materials.component";

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
    id?: string,
    name: string,
    unit: string,
    rate: number,
    ratio: number,
  }

export type Category = {
    id?: string;
    name: string;
    image: string;
    description: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}