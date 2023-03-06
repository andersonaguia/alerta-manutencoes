import { DataSource } from 'typeorm';
import { PreventiveEntity } from './entities/preventive.entity';

export const preventiveProviders = [
    {
        provide: 'PREVENTIVE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(PreventiveEntity),
        inject: ['DATA_SOURCE'],
    }
];