import { IsNotEmpty } from 'class-validator';

export class UpdateSendMailDto {
    @IsNotEmpty()
    preventiveId: number;
}
