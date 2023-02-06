import { Inject, Injectable } from '@nestjs/common';
import { CreateMailDto } from 'src/maintenances/dto/create-mail.dto';
import { MailEntity } from 'src/maintenances/entities/mail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreateMailService {
  constructor(
    @Inject('MAIL_REPOSITORY')
    private mailRepository: Repository<MailEntity>
  ) { }

  create(data: CreateMailDto) {
    return new Promise (async(resolve, reject) => {
      try{
        const { address } = data;
        const addMail = this.mailRepository.create();
        addMail.address = address;
        addMail.created_at = new Date();
        addMail.updated_at = new Date();

        const mailInserted = this.mailRepository.save(addMail);

        resolve(mailInserted);
      }catch(error){
        reject(error);
      }
    })
  }
}