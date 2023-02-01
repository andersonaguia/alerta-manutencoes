import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateFrequencyDto } from '../dto/create-frequency.dto';
import { UpdateMaintenanceDto } from '../dto/update-maintenance.dto';
import { MaintenancesService } from '../services/maintenances.service';

@Controller()
export class MaintenancesController {
  constructor(private readonly maintenancesService: MaintenancesService) { }

  @Post('/maintenances/frequency')
  async create(@Body() data: CreateFrequencyDto) {
    try{
      const result = await this.maintenancesService.create(data);

      if(result){
        return result;
      }

    }catch(error){
      return error
    }    
  }
/*
  @Get()
  findAll() {
    return this.maintenancesService.findAll();
  }

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
  }*/
}
