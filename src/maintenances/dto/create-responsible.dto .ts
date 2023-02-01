import { IsNotEmpty, IsString } from "class-validator";

export class CreateResponsibleDto {
    @IsNotEmpty()
    @IsString()
    readonly responsible: string;
}