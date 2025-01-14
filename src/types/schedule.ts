export type EventType = 'talk' | 'workshop' | 'networking' | 'break' | 'other';

export interface ScheduleEvent {
    title: string;
    type: EventType;
    speaker?: string;
    time: string;
    description: string;
    location: string;
    day: 1 | 2 | 3; // Day 1, 2, or 3
}