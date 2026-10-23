import { IsOptional ,IsIn} from "class-validator";

export class FilterTicketDto {
    @IsOptional()
    @IsIn(['open','close'])
    status?:'open'|'close';
    @IsOptional()
    @IsIn(['low',"medium","high"])
    priority?:'low'|'medium'|'high';
}