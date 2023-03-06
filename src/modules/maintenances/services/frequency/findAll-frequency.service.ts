import { Inject, Injectable } from '@nestjs/common';
import { FrequencyEntity } from 'src/modules/maintenances/entities/frequency.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllFrequencyService {
    constructor(
        @Inject('FREQUENCY_REPOSITORY')
        private frequencyRepository: Repository<FrequencyEntity>
    ) { }

    findAll(): Promise<FrequencyEntity[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const allFrequency = await this.frequencyRepository.find()
                resolve(allFrequency);
            } catch (error) {
                reject(error);
            }
        })
    }
}