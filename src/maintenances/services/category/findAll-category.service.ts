import { Inject, Injectable } from '@nestjs/common';
import { CategoryEntity } from 'src/maintenances/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllCategoryService {
    constructor(
        @Inject('CATEGORY_REPOSITORY')
        private categoryRepository: Repository<CategoryEntity>
    ) { }

    findAll(): Promise<CategoryEntity[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const allCategory = await this.categoryRepository.find()
                resolve(allCategory);
            } catch (error) {
                reject(error);
            }
        })
    }
}