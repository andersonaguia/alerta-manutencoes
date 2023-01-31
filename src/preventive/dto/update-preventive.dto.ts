import { PartialType } from '@nestjs/mapped-types';
import { CreatePreventiveDto } from './create-preventive.dto';

export class UpdatePreventiveDto extends PartialType(CreatePreventiveDto) {}
