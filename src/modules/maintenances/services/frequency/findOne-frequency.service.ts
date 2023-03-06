import { Inject, Injectable } from '@nestjs/common'; import { FrequencyEntity } from 'src/modules/maintenances/entities/frequency.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindOneFrequencyService {
    constructor(
        @Inject('FREQUENCY_REPOSITORY')
        private frequencyRepository: Repository<FrequencyEntity>
    ) { }

    findOne(id: number): Promise<FrequencyEntity> {
        return new Promise(async (resolve, reject) => {
            try {
                const frequency = await this.frequencyRepository.findOne({
                    where: {
                        id: id
                    }
                })
                resolve(frequency);
            } catch (error) {
                reject(error);
            }
        })
    }
}