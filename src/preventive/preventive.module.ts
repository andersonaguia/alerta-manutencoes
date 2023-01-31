import { Module } from '@nestjs/common';
import { PreventiveController } from './controllers/preventive.controller';
import { preventiveProviders } from './preventive.providers';
import { databaseProviders } from 'src/core/database/database.providers';
import { PreventiveService } from './services/preventive.service';

@Module({
  controllers: [PreventiveController],
  providers: [
    ...databaseProviders,
    ...preventiveProviders,
    PreventiveService
  ]
})
export class PreventiveModule { }
