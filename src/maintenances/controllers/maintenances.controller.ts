import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateFrequencyDto } from '../dto/create-frequency.dto';
import { CreateFrequencyService } from '../services/frequency/create-frequency.service';
import { CreateCategoryService } from '../services/category/create-category.service';
import { CreateResponsibleService } from '../services/responsible/create-responsible.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { CreateResponsibleDto } from '../dto/create-responsible.dto ';
import { CreateMailDto } from '../dto/create-mail.dto';
import { CreateMailService } from '../services/mail/create-mail.service';
import { FindAllMailService } from '../services/mail/findAll-mail.service';

@Controller()
export class MaintenanceController {
  constructor(
    private readonly createFrequencyService: CreateFrequencyService,
    private readonly createCategoryService: CreateCategoryService,
    private readonly createResponsibleService: CreateResponsibleService,
    private readonly createMailService: CreateMailService,
    private readonly findAllMailService: FindAllMailService
  ) { }

  @Post('/maintenances/frequency')
  async createFrequency(@Body() data: CreateFrequencyDto) {
    try {
      const result = await this.createFrequencyService.create(data);

      if (result) {
        return result;
      }

    } catch (error) {
      return error
    }
  }

  @Post('/maintenances/category')
  async createCategory(@Body() data: CreateCategoryDto) {
    try {
      const result = await this.createCategoryService.create(data);

      if (result) {
        return result;
      }

    } catch (error) {
      return error
    }
  }

  @Post('/maintenances/responsible')
  async createResponsible(@Body() data: CreateResponsibleDto) {
    try {
      const result = await this.createResponsibleService.create(data);

      if (result) {
        return result;
      }

    } catch (error) {
      return error
    }
  }

  @Post('/maintenances/mail')
  async createMail(@Body() data: CreateMailDto) {
    try {
      const result = await this.createMailService.create(data);

      if (result) {
        return result;
      }

    } catch (error) {
      return error
    }
  }

  @Get('/maintenances/mail')
  async findAllMails() {
    try {
      const result = await this.findAllMailService.findAll();
      return result;
    } catch (error) {
      return error
    }
  }

  /*
    @Get('/maintenances/category')
    async findAll() {
      try {
        const result = await this.createCategoryService.initialInsert();
        return result;
      } catch (error) {
        return error
      }
    }
  
    @Get('/maintenances/responsible')
    async findAlls() {
      try {
        const result = await this.createResponsibleService.initialInsert();
        return result;
      } catch (error) {
        return error
      }
    }
    */
  /*
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.maintenancesService.findOne(+id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMaintenanceDto: UpdateMaintenanceDto) {
      return this.maintenancesService.update(+id, updateMaintenanceDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.maintenancesService.remove(+id);
    } */
}
