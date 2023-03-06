import { Inject, Injectable } from '@nestjs/common';
import { MailEntity } from 'src/modules/maintenances/entities/mail.entity';
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
                resolve(this.formatReturn(allMails));
            } catch (error) {
                reject(error);
            }
        })
    }

    formatReturn(emails: MailEntity[]): MailEntity[] {
        const response = emails.map((email) => {
            delete email.created_at;
            delete email.updated_at;
            return email;
        })
        return response;
    }
}