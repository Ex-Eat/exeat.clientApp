import type IArticleDto from "@/dto/IArticleDto";

export default interface IMenuDto {
    id: string;
    name: string;
    picture: string;
    articles: IArticleDto[]
    description: string;
    price: number;
}