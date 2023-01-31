import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { CreatePreventiveDto } from '../dto/create-preventive.dto';
import { UpdatePreventiveDto } from '../dto/update-preventive.dto';
import { PreventiveService } from '../services/preventive.service';

@Controller()
export class PreventiveController {
  constructor(private readonly preventiveService: PreventiveService) { }

  @Post('/preventive')
  async create(@Body() createPreventiveDto: CreatePreventiveDto) {
    try {
      const result = await this.preventiveService.create(createPreventiveDto);

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
    return this.preventiveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.preventiveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePreventiveDto: UpdatePreventiveDto) {
    return this.preventiveService.update(+id, updatePreventiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.preventiveService.remove(+id);
  }
}
