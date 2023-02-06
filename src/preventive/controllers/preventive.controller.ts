import { Controller, Get, Post, Body, Patch, HttpStatus } from '@nestjs/common';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { CreatePreventiveDto } from '../dto/create-preventive.dto';
import { UpdateSendMailDto } from '../dto/updateSendMail-preventive.dto';
import { CreatePreventiveService } from '../services/create-preventive.service';
import { FindAllPreventiveService } from '../services/findAll-preventive.service';
import { ToExpirePreventiveService } from '../services/toExpire-preventive.service';
import { UpdateSendMailPreventiveService } from '../services/updateSendMail-preventive.service';

@Controller()
export class PreventiveController {
  constructor(
    private readonly createPreventiveService: CreatePreventiveService,
    private readonly findAllPreventiveService: FindAllPreventiveService,
    private readonly toExpirePreventiveService: ToExpirePreventiveService,
    private readonly updateSendMailPreventiveService: UpdateSendMailPreventiveService
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

  @Patch('/preventive/updatesendmail')
  async update(@Body() ids: UpdateSendMailDto[]) {
    try {
      const result: boolean = await this.updateSendMailPreventiveService.update(ids);
      if (result) {
        return new NestResponseBuilder()
          .withStatus(HttpStatus.OK)
          .withBody(result)
          .build();
      }
      return new NestResponseBuilder()
        .withStatus(HttpStatus.BAD_REQUEST)
        .withBody("Falha ao atualizar o banco de dados")
        .build();

    } catch (error) {
      return new NestResponseBuilder()
        .withStatus(HttpStatus.BAD_REQUEST)
        .withBody(error)
        .build();
    }
  }
}
