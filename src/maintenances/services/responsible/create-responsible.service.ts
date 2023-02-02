import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { maintenancesArray } from 'src/utils/maintenances.array';
import { ResponsibleEntity } from 'src/maintenances/entities/responsible.entity';

@Injectable()
export class CreateResponsibleService {
  constructor(
    @Inject('RESPONSIBLE_REPOSITORY')
    private responsibleRepository: Repository<ResponsibleEntity>
  ) { }

  create(data) {
    return new Promise(async (resolve, reject) => {
      try {
        //const { category } = data;
        const responsibleExists = await this.responsibleRepository.findOne({
          where: {
            responsible: data
          }
        })

        if (responsibleExists === null) {
          const addResponsible = this.responsibleRepository.create();
          addResponsible.responsible = data.toUpperCase();
          addResponsible.created_at = new Date();
          addResponsible.updated_at = new Date();

          const responsibleInserted = await this.responsibleRepository.save(addResponsible);

          resolve(responsibleInserted);
        }
        console.log(data, "já existe no banco de dados.")

        resolve(false)

      } catch (error) {
        reject(error);
      }
    })
  }

  initialInsert() {
    const maintenances = maintenancesArray;
    maintenances.map(async (maintenance) => {
      try {
        const responsible = maintenance.responsavel.toUpperCase();
        //console.log(category)     
        await this.create(responsible)
      } catch (error) {
        console.log("Tipo já existente no banco de dados")
        console.log(error)
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
