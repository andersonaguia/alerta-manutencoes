import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreventiveModule } from './preventive/preventive.module';

@Module({
  imports: [PreventiveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
