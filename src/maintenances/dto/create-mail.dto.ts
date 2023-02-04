import { IsNotEmpty, IsString } from "class-validator";

export class CreateMailDto {
    @IsNotEmpty()
    @IsString()
    address: string;
}