import { DataSource } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';
import { FrequencyEntity } from './entities/frequency.entity';
import { MailEntity } from './entities/mail.entity';
import { ResponsibleEntity } from './entities/responsible.entity';

export const maintenancesProviders = [
    {
        provide: 'FREQUENCY_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(FrequencyEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'CATEGORY_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(CategoryEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'RESPONSIBLE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ResponsibleEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'MAIL_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(MailEntity),
        inject: ['DATA_SOURCE'],
    }
];