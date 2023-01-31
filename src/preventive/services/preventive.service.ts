import { Inject, Injectable } from '@nestjs/common';
import { maintenancesArray } from 'src/utils/maintenances.array';
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

  initialInsert(preventiveData: CreatePreventiveDto) {
    const maintenances = maintenancesArray;
    maintenances.map(async (maintenance) => {
      try {
        const preventive = this.preventiveRepository.create(preventiveData);
        preventive.category = maintenance.sistema.toUpperCase();
        preventive.activity = maintenance.atividade;
        preventive.responsible = maintenance.responsavel.toUpperCase();
        preventive.last = new Date(maintenance.ultima);
        preventive.next = new Date(maintenance.proxima);
        preventive.sendEmail = true;

        switch (maintenance.periodicidade) {
          case 'Diariamente':
            preventive.frequency = 0;
            break;
          case 'Semanal':
            preventive.frequency = 1;
            break;
          case 'Quinzenal':
            preventive.frequency = 2;
            break;
          case 'Mensal':
            preventive.frequency = 3;
            break;
          case 'Bimestral':
            preventive.frequency = 4;
            break;
          case 'Trimestral':
            preventive.frequency = 5;
            break;
          case 'Quadrimestral':
            preventive.frequency = 6;
            break;
          case 'Semestral':
            preventive.frequency = 7;
            break;
          case 'Anual':
            preventive.frequency = 8;
            break;
          case 'Bianual':
            preventive.frequency = 9;
            break;
          case 'Trianual':
            preventive.frequency = 10;
            break;
          case 'Quinquenal':
            preventive.frequency = 11;
            break;
          default:
            console.log("Não encontrado: ", maintenance.id + " - " + maintenance.periodicidade)
        }
        const dataToBeSave = await this.preventiveRepository.save(preventive)
      } catch (error) {
        return error;
      }
    })
  }

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
