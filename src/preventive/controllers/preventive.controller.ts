import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { CreatePreventiveDto } from '../dto/create-preventive.dto';
import { UpdatePreventiveDto } from '../dto/update-preventive.dto';
import { CreatePreventiveService } from '../services/create-preventive.service';

@Controller()
export class PreventiveController {
  constructor(private readonly createPreventiveService: CreatePreventiveService) { }

  @Post('/preventive')
  async create(@Body() preventiveData: CreatePreventiveDto) {
    try {
      const result = await this.createPreventiveService.create(preventiveData);

      return new NestResponseBuilder()
        .withStatus(HttpStatus.CREATED)
        .withBody(result)
        .build();
    } catch (error) {
      return new NestResponseBuilder()
        .withStatus(HttpStatus.BAD_REQUEST)
        .withBody(error)
        .build();
    }
  }

  @Get()
  findAll() {
    return this.createPreventiveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.createPreventiveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePreventiveDto: UpdatePreventiveDto) {
    return this.createPreventiveService.update(+id, updatePreventiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.createPreventiveService.remove(+id);
  }
}
