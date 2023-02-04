import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { CreatePreventiveDto } from '../dto/create-preventive.dto';
import { UpdatePreventiveDto } from '../dto/update-preventive.dto';
import { CreatePreventiveService } from '../services/create-preventive.service';
import { FindAllPreventiveService } from '../services/findAll-preventive.service';
import { ToExpirePreventiveService } from '../services/toExpire-preventive.service';

@Controller()
export class PreventiveController {
  constructor(
    private readonly createPreventiveService: CreatePreventiveService,
    private readonly findAllPreventiveService: FindAllPreventiveService,
    private readonly toExpirePreventiveService: ToExpirePreventiveService
  ) { }

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

  @Get('/preventive')
  async findAll() {
    try {
      const result = await this.findAllPreventiveService.findAll();
      return new NestResponseBuilder()
        .withStatus(HttpStatus.OK)
        .withBody(result)
        .build();

    } catch (error) {
      return new NestResponseBuilder()
        .withStatus(HttpStatus.BAD_REQUEST)
        .withBody(error)
        .build();
    }
  }

  @Get('/preventive/expire')
  async findToExpire() {
    try {
      const result = await this.toExpirePreventiveService.findAll();
      return new NestResponseBuilder()
        .withStatus(HttpStatus.OK)
        .withBody(result)
        .build();

    } catch (error) {
      return new NestResponseBuilder()
        .withStatus(HttpStatus.BAD_REQUEST)
        .withBody(error)
        .build();
    }
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
