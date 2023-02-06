import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SendMailDto } from '../dto/sendMail-preventive.dto';
import { UpdateSendMailDto } from '../dto/updateSendMail-preventive.dto';
import { PreventiveEntity } from '../entities/preventive.entity';

@Injectable()
export class UpdateSendMailPreventiveService {
  constructor(
    @Inject('PREVENTIVE_REPOSITORY')
    private preventiveRepository: Repository<PreventiveEntity>

  ) { }

  update(ids: UpdateSendMailDto[]): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      const sendMail = new SendMailDto();
      sendMail.sendEmail = false;
      sendMail.updated_at = new Date();
      let result: boolean = false;
      ids.map(async (id, i) => {
        try {
          const { affected } = await this.preventiveRepository.update({ id: +id }, sendMail);
          console.log("Affected: ", affected);
          if (affected != 0 && i === ids.length - 1) {
            result = true;
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      })
    })
  }
}