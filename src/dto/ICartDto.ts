import type IArticleDto from "@/dto/IArticleDto";

export default interface ICartDto {
    products: IArticleDto[]
    price: number;
}