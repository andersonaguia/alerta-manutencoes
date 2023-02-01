import { Module } from '@nestjs/common';
import { MaintenancesController } from './controllers/maintenances.controller';
import { databaseProviders } from 'src/core/database/database.providers';
import { maintenancesProviders } from './maintenances.providers';
import { MaintenancesService } from './services/maintenances.service';

@Module({
  controllers: [MaintenancesController],
  providers: [
    ...databaseProviders,
    ...maintenancesProviders,
    MaintenancesService
  ]
})
export class MaintenancesModule { }
