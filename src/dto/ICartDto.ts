export interface ICartDto {
    restaurantId: string;
    restaurantName: string;
    products: IProductDto[]
    price: number;
}

export interface IProductDto {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    type: 'menu' | 'article'
}