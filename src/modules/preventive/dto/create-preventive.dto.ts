import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Frequency } from "../enum/frequency.enum";

export class CreatePreventiveDto {
    @IsNotEmpty()
    @IsNumber()
    readonly category: number;

    @IsNotEmpty()
    @IsString()
    readonly activity: string;

    @IsNotEmpty()
    readonly frequency: number;

    @IsNotEmpty()
    @IsNumber()
    readonly responsible: number;

    @IsNotEmpty()
    @IsDateString()
    last: Date;

    @IsNotEmpty()
    @IsDateString()
    next: Date;

    @IsNotEmpty()
    @IsBoolean()
    sendEmail: boolean;
}
