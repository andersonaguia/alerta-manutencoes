import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { maintenancesProviders } from './maintenances.providers';
import { CreateCategoryService } from './services/category/create-category.service';
import { CreateFrequencyService } from './services/frequency/create-frequency.service';
import { CreateResponsibleService } from './services/responsible/create-responsible.service';
import { FindAllCategoryService } from './services/category/findAll-category.service';
import { FindOneCategoryService } from './services/category/findOne-category.service';
import { FindAllFrequencyService } from './services/frequency/findAll-frequency.service';
import { FindAllResponsibleService } from './services/responsible/findAll-responsible.service';
import { FindOneFrequencyService } from './services/frequency/findOne-frequency.service';
import { FindOneResponsibleService } from './services/responsible/findOne-responsible.service';
import { MaintenanceController } from './controllers/maintenances.controller';
import { FindAllMailService } from './services/mail/findAll-mail.service';
import { CreateMailService } from './services/mail/create-mail.service';

@Module({
  controllers: [MaintenanceController],
  providers: [
    ...databaseProviders,
    ...maintenancesProviders,
    CreateFrequencyService,
    CreateCategoryService,
    CreateResponsibleService, 
    CreateMailService,
    FindOneCategoryService,
    FindOneFrequencyService,
    FindOneResponsibleService,
    FindAllCategoryService,
    FindAllFrequencyService,
    FindAllResponsibleService,
    FindAllMailService
  ]
})
export class MaintenancesModule { }
