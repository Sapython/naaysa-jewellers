

export type UserData={
    
    displayName:string;
    email:string;
    phoneNumber?:string;
    photoUrl:string;
    wishlist:Product[];
    cart:cart[];

}


export type cart={
    product:Product;
    quantity:number;
}



export type Product={
    name:string;
    price:number;
    description:string;
    category:string;
    id:string;
    dateOfPublish:Date;

}