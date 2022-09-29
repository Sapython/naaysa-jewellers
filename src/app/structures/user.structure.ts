

export type UserData = {

    displayName: string;
    email: string;
    phoneNumber?: string;
    photoURL: string;
    wishlist: Product[];
    cart: cart[];
    address: Address;
    orders:[];
    dateOfBirth:string;
    recommendation:[];
    access: UserAccess;
    userId:string;
    emailVerified:boolean,
    firstLogin:boolean,
    totalOrders:number,
    totalCashback:number
}


export type UserAccess={
    access:'admin'|'user'|'guest';
}

export type cart = {
    product: Product;
    quantity: number;
}



export type Product = {
    name: string;
    price: number;
    description: string;
    category: string;
    id: string;
    dateOfPublish: Date;

}

export type Address = {
    country: string;
    region: string;
    pincode: number;
    FlatAddress: string;
    houseNo: number;
    Landmark: string;
    type: 'company' | 'apartment'
    city:string;
    state:string;

}


export type ExtraLoginEmailInfo= {
    displayName:string;
    phoneNumber:string;
    photoURL:string;
}