import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreventiveModule } from './preventive/preventive.module';
import { MaintenancesModule } from './maintenances/maintenances.module';

@Module({
  imports: [PreventiveModule, MaintenancesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
