import { Inject, Injectable } from '@nestjs/common';
import { MailEntity } from 'src/maintenances/entities/mail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllMailService {
    constructor(
        @Inject('MAIL_REPOSITORY')
        private mailRepository: Repository<MailEntity>
    ) { }

    findAll(): Promise<MailEntity[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const allMails = await this.mailRepository.find();
                resolve(allMails);
            } catch (error) {
                reject(error);
            }
        })
    }
}