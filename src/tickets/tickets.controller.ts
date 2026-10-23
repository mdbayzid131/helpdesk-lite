import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards, } from '@nestjs/common';
import { TicketsService } from './tickets.service.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';
import { FilterTicketDto } from './dto/filter-ticket.dto.js';
import { UpdateTicketDto } from './dto/update-ticket.dto.js';
import { StaffGuard } from './guards/staff.guard.js';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) { }
  @Get()
  findAll(@Query() filterTicketDto:FilterTicketDto) {
    return this.ticketsService.findAll(filterTicketDto.status,filterTicketDto.priority);
  }
  @Get(':id')
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.ticketsService.findOne(id)
  }
  @Post()
  create(@Body()createTickateDto:CreateTicketDto){
    return this.ticketsService.create(createTickateDto);
  }
  @Patch(':id')
  update(@Param('id',ParseIntPipe)id:number,@Body()udateTicketDto:UpdateTicketDto){
    return this.ticketsService.update(id,udateTicketDto); }
  @UseGuards(StaffGuard)
  @Patch(':id/close')
  closeTicket(@Param('id',ParseIntPipe)id:number){
    return this.ticketsService.closeTicket(id);
  }
}
