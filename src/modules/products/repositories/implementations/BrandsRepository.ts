import { v4 as uuidV4 } from "uuid";

import { Brand } from "../../models/Brand";
import { Brand as BrandSchema } from "../../../../database/models/Brand";
import { IBrandsRepository, IUpdateBrandDTO } from "../IBrandsRepository";

class BrandsRepository implements IBrandsRepository {
    private static INSTANCE: BrandsRepository;

    public static getInstance(): BrandsRepository {
        if (!BrandsRepository.INSTANCE) {
            return (BrandsRepository.INSTANCE = new BrandsRepository());
        }

        return BrandsRepository.INSTANCE;
    }

    async list(): Promise<Brand[]> {
        return await BrandSchema.find({});
    }

    async create(name: string): Promise<Brand> {
        const brand = new BrandSchema({
            _id: uuidV4(),
            name,
        });

        return await brand.save();
    }

    async update({ id, name }: IUpdateBrandDTO): Promise<Brand> {
        return await BrandSchema.findByIdAndUpdate(id, { name });
    }

    async delete(id: string): Promise<Brand> {
        return await BrandSchema.findOneAndDelete({ _id: id });
    }

    async searchBrands(name: string): Promise<Brand[]> {
        const filteredBrands = await BrandSchema.find({
            name: { $regex: name },
        });

        return filteredBrands;
    }

    async findById(id: string): Promise<Brand> {
        return await BrandSchema.findById(id);
    }

    async findByName(name: string): Promise<Brand> {
        return await BrandSchema.findOne({ name: name });
    }
}

export { BrandsRepository };
