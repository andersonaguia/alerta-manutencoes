import { Module } from '@nestjs/common';
import { FrequencyController } from './controllers/maintenances.controller';
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

@Module({
  controllers: [FrequencyController],
  providers: [
    ...databaseProviders,
    ...maintenancesProviders,
    CreateFrequencyService,
    CreateCategoryService,
    CreateResponsibleService,     
    FindOneCategoryService,
    FindOneFrequencyService,
    FindOneResponsibleService,
    FindAllCategoryService,
    FindAllFrequencyService,
    FindAllResponsibleService
  ]
})
export class MaintenancesModule { }
