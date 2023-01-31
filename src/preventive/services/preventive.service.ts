import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePreventiveDto } from '../dto/create-preventive.dto';
import { UpdatePreventiveDto } from '../dto/update-preventive.dto';
import { PreventiveEntity } from '../entities/preventive.entity';

@Injectable()
export class PreventiveService {
  constructor(
    @Inject('PREVENTIVE_REPOSITORY')
    private preventiveRepository: Repository<PreventiveEntity>
  ) { }

  create(preventiveData: CreatePreventiveDto): Promise<PreventiveEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        if (new Date(preventiveData.next) > new Date()) {
          const preventive = this.preventiveRepository.create(preventiveData);
          preventive.category = preventiveData.category.toUpperCase();
          preventive.responsible = preventiveData.responsible.toUpperCase();
          const preventiveSaved = await this.preventiveRepository.save(preventive);
          resolve(preventiveSaved);
        }
        reject("Data da próxima manutenção é inválida");
      } catch (error) {
        reject(error);
      }
    })
  }

  findAll() {
    return `This action returns all preventive`;
  }

  findOne(id: number) {
    return `This action returns a #${id} preventive`;
  }

  update(id: number, updatePreventiveDto: UpdatePreventiveDto) {
    return `This action updates a #${id} preventive`;
  }

  remove(id: number) {
    return `This action removes a #${id} preventive`;
  }
}
