

export interface ScheduleEvent {
    title: string;
    type: "talk" | "workshop" | "break" | "social" | "other";
    speaker?: string;
    time: string;
    description: string;
    location: string;
    day: 1 | 2 | 3; // Day 1, 2, or 3
}