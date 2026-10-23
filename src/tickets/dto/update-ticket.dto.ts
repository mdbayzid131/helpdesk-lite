import { IsNotEmpty, IsOptional, IsString,IsIn } from "class-validator";

export class UpdateTicketDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    subject:string;
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description:string;
    @IsNotEmpty()
    @IsOptional()
    @IsIn(['low','medium','high'])
    priority:'low'|'medium'|'high';
}
 