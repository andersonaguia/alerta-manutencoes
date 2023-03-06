import { Module } from '@nestjs/common';
import { PreventiveController } from './controllers/preventive.controller';
import { preventiveProviders } from './preventive.providers';
import { databaseProviders } from 'src/core/database/database.providers';
import { CreatePreventiveService } from './services/create-preventive.service';
import { FindAllCategoryService } from 'src/modules/maintenances/services/category/findAll-category.service';
import { maintenancesProviders } from 'src/modules/maintenances/maintenances.providers';
import { FindAllFrequencyService } from 'src/modules/maintenances/services/frequency/findAll-frequency.service';
import { FindAllResponsibleService } from 'src/modules/maintenances/services/responsible/findAll-responsible.service';
import { FindOneCategoryService } from 'src/modules/maintenances/services/category/findOne-category.service';
import { FindOneResponsibleService } from 'src/modules/maintenances/services/responsible/findOne-responsible.service';
import { FindOneFrequencyService } from 'src/modules/maintenances/services/frequency/findOne-frequency.service';
import { FindAllPreventiveService } from './services/findAll-preventive.service';
import { ToExpirePreventiveService } from './services/toExpire-preventive.service';
import { UpdateSendMailPreventiveService } from './services/updateSendMail-preventive.service';

@Module({
  controllers: [PreventiveController],
  providers: [
    ...databaseProviders,
    ...preventiveProviders,
    ...maintenancesProviders,
    CreatePreventiveService,
    FindAllPreventiveService,
    FindOneCategoryService,
    FindOneFrequencyService,
    FindOneResponsibleService,
    FindAllCategoryService,
    FindAllFrequencyService,
    FindAllResponsibleService,
    ToExpirePreventiveService,
    UpdateSendMailPreventiveService
  ]
})
export class PreventiveModule { }
