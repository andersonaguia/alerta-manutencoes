import { IsNotEmpty, IsString } from "class-validator";

export class CreateFrequencyDto {
    @IsNotEmpty()
    @IsString()
    readonly frequency: string;
}