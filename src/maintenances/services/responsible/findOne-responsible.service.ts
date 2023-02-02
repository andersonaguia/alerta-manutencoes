import { Inject, Injectable } from '@nestjs/common'; import { FrequencyEntity } from 'src/maintenances/entities/frequency.entity';
import { ResponsibleEntity } from 'src/maintenances/entities/responsible.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindOneResponsibleService {
    constructor(
        @Inject('RESPONSIBLE_REPOSITORY')
        private responsibleRepository: Repository<ResponsibleEntity>
    ) { }

    findOne(id: number): Promise<ResponsibleEntity> {
        return new Promise(async (resolve, reject) => {
            try {
                const responsible = await this.responsibleRepository.findOne({
                    where: {
                        id: id
                    }
                })
                resolve(responsible);
            } catch (error) {
                reject(error);
            }
        })
    }
}