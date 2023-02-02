import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateFrequencyDto } from '../dto/create-frequency.dto';
import { CreateFrequencyService } from '../services/frequency/create-frequency.service';
import { CreateCategoryService } from '../services/category/create-category.service';
import { CreateResponsibleService } from '../services/responsible/create-responsible.service';

@Controller()
export class FrequencyController {
  constructor(
    private readonly createFrequencyService: CreateFrequencyService,
    private readonly createCategoryService: CreateCategoryService,
    private readonly createResponsibleService: CreateResponsibleService
  ) { }

  @Post('/maintenances/frequency')
  async create(@Body() data: CreateFrequencyDto) {
    try {
      const result = await this.createFrequencyService.create(data);

      if (result) {
        return result;
      }

    } catch (error) {
      return error
    }
  }

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
