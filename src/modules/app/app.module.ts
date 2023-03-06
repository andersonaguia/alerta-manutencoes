import { Module } from '@nestjs/common';
import { PreventiveModule } from '../preventive/preventive.module';
import { MaintenancesModule } from '../maintenances/maintenances.module';

@Module({
  imports: [PreventiveModule, MaintenancesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
