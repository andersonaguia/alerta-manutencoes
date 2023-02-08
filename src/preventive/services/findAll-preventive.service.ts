import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PreventiveEntity } from '../entities/preventive.entity';

@Injectable()
export class FindAllPreventiveService {
  constructor(
    @Inject('PREVENTIVE_REPOSITORY')
    private preventiveRepository: Repository<PreventiveEntity>

  ) { }

  findAll(): Promise<PreventiveEntity[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const allPreventives = await this.preventiveRepository.find();
        if (allPreventives.length > 0) {
          resolve(this.formatResponse(allPreventives));
        }
        reject("Nenhuma manutenção preventiva encontrada");
      } catch (error) {
        reject(error);
      }
    })
  }

  formatResponse(preventives: PreventiveEntity[]): PreventiveEntity[] {
    const response = preventives.map((preventive) => {
      delete preventive.created_at;
      delete preventive.updated_at;
      delete preventive.frequency.created_at;
      delete preventive.frequency.updated_at;
      delete preventive.category.created_at;
      delete preventive.category.updated_at;
      delete preventive.responsible.created_at;
      delete preventive.responsible.updated_at;
      return preventive;
    })

    return response;
  }
}