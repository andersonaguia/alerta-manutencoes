import { Inject, Injectable } from '@nestjs/common';
import { CategoryEntity } from 'src/maintenances/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from 'src/maintenances/dto/create-category.dto';

@Injectable()
export class CreateCategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<CategoryEntity>
  ) { }

  create(data: CreateCategoryDto) {
    return new Promise(async (resolve, reject) => {
      try {
        const categoryExists = await this.categoryRepository.findOne({
          where: {
            category: data.category
          }
        })

        if (categoryExists === null) {
          console.log("ooi")
          const addCategory = this.categoryRepository.create();
          addCategory.category = data.category.toUpperCase();
          addCategory.created_at = new Date();
          addCategory.updated_at = new Date();

          const categoryInserted = await this.categoryRepository.save(addCategory);

          resolve(categoryInserted);
        }
        reject(false)
      } catch (error) {
        reject(error);
      }
    })
  }
/*
  initialInsert() {
    const maintenances = maintenancesArray;
    maintenances.map(async (maintenance) => {
      try {
        const category = maintenance.sistema.toUpperCase();
        //console.log(category)     
        await this.create(category)
      } catch (error) {
        console.log("Tipo já existente no banco de dados")
        console.log(error)
      }
    })
  }
  
    findAll() {
      return `This action returns all maintenances`;
    }
  
    findOne(id: number) {
      return `This action returns a #${id} maintenance`;
    }
  
    update(id: number, updateMaintenanceDto: UpdateMaintenanceDto) {
      return `This action updates a #${id} maintenance`;
    }
  
    remove(id: number) {
      return `This action removes a #${id} maintenance`;
    }*/
}
