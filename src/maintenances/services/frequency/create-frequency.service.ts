import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateFrequencyDto } from '../../dto/create-frequency.dto';
import { FrequencyEntity } from '../../entities/frequency.entity';

@Injectable()
export class CreateFrequencyService {
  constructor(
    @Inject('FREQUENCY_REPOSITORY')
    private frequencyRepository: Repository<FrequencyEntity>
  ) { }

  create(data: CreateFrequencyDto) {
    return new Promise (async(resolve, reject) => {
      try{
        const { frequency } = data;
        const addFrequency = this.frequencyRepository.create();
        addFrequency.frequency = frequency.toUpperCase();
        addFrequency.created_at = new Date();
        addFrequency.updated_at = new Date();

        const frequencyInserted = this.frequencyRepository.save(addFrequency);

        resolve(frequencyInserted);
      }catch(error){
        reject(error);
      }
    })
  }
/*
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
