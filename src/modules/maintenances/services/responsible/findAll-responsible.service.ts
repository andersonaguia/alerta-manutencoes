import { Inject, Injectable } from '@nestjs/common';
import { ResponsibleEntity } from 'src/modules/maintenances/entities/responsible.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllResponsibleService {
    constructor(
        @Inject('RESPONSIBLE_REPOSITORY')
        private responsibleRepository: Repository<ResponsibleEntity>
    ) { }

    findAll(): Promise<ResponsibleEntity[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const allResponsible = await this.responsibleRepository.find()
                resolve(allResponsible);
            } catch (error) {
                reject(error);
            }
        })
    }
}