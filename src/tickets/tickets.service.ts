import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';

@Injectable()
export class TicketsService {
    private readonly tickets: Ticket[] = [
        {
            id: 1, subject: 'login issue', description: 'login issue description',
            priority: 'low',
            status: 'open',
            createdAt: '2026-09-01T11:30:00.000Z'
        },
        {
            id: 2, subject: 'Ticket 2', description: 'Ticket 2 description',
            priority: 'low',
            status: 'open',
            createdAt: '2026-09-02T09:15:00.000Z'
        },
        {
            id: 3, subject: 'Payment failed', description: 'Payment was declined during checkout',
            priority: 'high',
            status: 'open',
            createdAt: '2026-09-03T14:45:00.000Z'
        },
        {
            id: 4, subject: 'Cannot reset password', description: 'Password reset email was not received',
            priority: 'medium',
            status: 'open',
            createdAt: '2026-09-04T08:20:00.000Z'
        },
        {
            id: 5, subject: 'Page loading slowly', description: 'Dashboard takes a long time to load',
            priority: 'low',
            status: 'close',
            createdAt: '2026-09-05T16:10:00.000Z'
        }
    ];
    private NextTicketId=6;

    findAll(status?: Ticket['status'], priority?: Ticket['priority']) {
        let tickets = this.tickets
        if (status) {
            tickets = tickets.filter((ticket) => ticket.status === status);
        }

        if (priority) {
            tickets = tickets.filter((ticket) => ticket.priority === priority);
        }

        return tickets;
    }
    findOne(id: number) {
        const ticket = this.tickets.find((ticket) => ticket.id === id);
        if (!ticket) {
            throw new NotFoundException(`Ticket with id ${id} not found`);
        }
        return ticket;
    }

    create(createTicketDto:CreateTicketDto){
        const ticket:Ticket={
            id: this.NextTicketId++,
            subject:createTicketDto.subject,
            description: createTicketDto.description,
            priority: createTicketDto.priority,
            status: "open",
            createdAt: new Date().toISOString()
        }
        this.tickets.push(ticket);

        return ticket;
    }
}