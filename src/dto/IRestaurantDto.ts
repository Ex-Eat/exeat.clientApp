import type IMenuDto from "@/dto/IMenuDto";
import type IArticleDto from "@/dto/IArticleDto";

export default interface IRestaurantDto {
    _id: string;
    name: string;
    professionalMail: string;
    phoneNumber: string;
    address: string;
    description: string;
    keywords: string[];
    termsOfUse: boolean;
    menus: IMenuDto[];
    articles: IArticleDto[];
}