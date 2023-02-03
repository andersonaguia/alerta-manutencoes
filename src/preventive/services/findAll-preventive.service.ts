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
          resolve(allPreventives);
        }
        reject("Nenhuma manutenção preventiva encontrada");
      } catch (error) {
        reject(error);
      }
    })
  }
}