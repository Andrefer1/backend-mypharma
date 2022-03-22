import { Brand } from "../models/Brand";

interface IUpdateBrandDTO {
    id: string;
    name: string;
}

interface IBrandsRepository {
    list(): Promise<Brand[]>;
    create(name: string): Promise<Brand>;
    update({ id, name }: IUpdateBrandDTO): Promise<Brand>;
    delete(id: string): Promise<Brand>;

    searchBrands(name: string): Promise<Brand[]>;
    findById(name: string): Promise<Brand>;
    findByName(name: string): Promise<Brand>;
}

export { Brand, IUpdateBrandDTO, IBrandsRepository };
