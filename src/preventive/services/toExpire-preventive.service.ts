import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ToSendEmailDto } from '../dto/toSendMail-preventive.dto';
import { PreventiveEntity } from '../entities/preventive.entity';

@Injectable()
export class ToExpirePreventiveService {
    constructor(
        @Inject('PREVENTIVE_REPOSITORY')
        private preventiveRepository: Repository<PreventiveEntity>

    ) { }

    findAll(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const atualDate = new Date();
                atualDate.setHours(0, 0, 0, 0);
                const allPreventives = await this.preventiveRepository.find();
                if (allPreventives.length > 0) {
                    const preventiveToSendEmail = allPreventives.filter(
                        (preventive) => {
                            const preventiveDate = new Date(preventive.next);
                            preventiveDate.setHours(0, 0, 0, 0);

                            if (preventive.frequency.frequency === "DIARIAMENTE") {
                                preventiveDate.setDate(preventiveDate.getDate() - 1);
                            }

                            if (preventive.frequency.frequency === "SEMANAL") {
                                preventiveDate.setDate(preventiveDate.getDate() - 2);
                            }

                            if (preventive.frequency.frequency === "QUINZENAL") {
                                preventiveDate.setDate(preventiveDate.getDate() - 5);
                            }

                            if (preventive.frequency.frequency === "MENSAL") {
                                preventiveDate.setDate(preventiveDate.getDate() - 7);
                            }

                            if (preventive.frequency.frequency === "BIMESTRAL") {
                                preventiveDate.setDate(preventiveDate.getDate() - 15);
                            }

                            if (preventive.frequency.frequency === "TRIMESTRAL") {
                                preventiveDate.setDate(preventiveDate.getDate() - 20);
                            }

                            if (preventive.frequency.frequency === "QUADRIMESTRAL") {
                                preventiveDate.setDate(preventiveDate.getDate() - 25);
                            }

                            if (preventive.frequency.frequency === "SEMESTRAL") {
                                preventiveDate.setMonth(preventiveDate.getMonth() - 1);
                            }

                            if (preventive.frequency.frequency === "ANUAL") {
                                preventiveDate.setMonth(preventiveDate.getMonth() - 2);
                            }

                            if (
                                preventive.frequency.frequency === "BIANUAL" ||
                                preventive.frequency.frequency === "TRIANUAL" ||
                                preventive.frequency.frequency === "QUINQUENAL"
                            ) {
                                preventiveDate.setMonth(preventiveDate.getMonth() - 3);
                            }

                            if (
                                (preventiveDate.toString() === atualDate.toString())
                                && preventive.sendEmail === true
                            ) {
                                return preventive;
                            }
                        }
                    );

                    const dataToReturn: ToSendEmailDto[] = [];

                    if (preventiveToSendEmail.length > 0) {
                        preventiveToSendEmail.map((preventive) => {
                            const preventiveData = {
                                id: preventive.id,
                                category: preventive.category.category,
                                activity: preventive.activity,
                                frequency: preventive.frequency.frequency,
                                responsible: preventive.responsible.responsible,
                                last: preventive.last,
                                next: preventive.next
                            }
                            dataToReturn.push(preventiveData);
                        })
                    }
                    resolve(dataToReturn);
                }
                reject([]);
            } catch (error) {
                reject(error);
            }
        })
    }
}