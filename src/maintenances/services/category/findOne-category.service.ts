import { Inject, Injectable } from '@nestjs/common';
import { CategoryEntity } from 'src/maintenances/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindOneCategoryService {
    constructor(
        @Inject('CATEGORY_REPOSITORY')
        private categoryRepository: Repository<CategoryEntity>
    ) { }

    findOne(id: number): Promise<CategoryEntity> {
        return new Promise(async (resolve, reject) => {
            try {
                const category = await this.categoryRepository.findOne({
                    where: {
                        id: id
                    }
                })
                resolve(category);
            } catch (error) {
                reject(error);
            }
        })
    }
}