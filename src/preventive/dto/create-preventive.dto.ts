import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Frequency } from "../enum/frequency.enum";

export class CreatePreventiveDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly category: string;

    @IsNotEmpty()
    @IsString()
    readonly activity: string;

    @IsEnum(Frequency)
    readonly frequency: Frequency;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly responsible: string;

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
