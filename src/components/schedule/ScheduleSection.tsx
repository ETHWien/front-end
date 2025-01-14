'use client'
import { useState } from 'react';
import { ScheduleEvent } from '@/types/schedule';

const SCHEDULE_EVENTS: ScheduleEvent[] = [
    {
        title: 'Registration & Welcome Coffee',
        type: 'other',
        time: '09:00 - 10:00',
        description: 'Pick up your badge and enjoy morning refreshments',
        location: 'Main Hall',
        day: 1
    },
    {
        title: 'Opening Ceremony',
        type: 'talk',
        time: '10:00 - 11:00',
        description: 'Welcome address and hackathon kickoff',
        location: 'Main Stage',
        day: 1
    },
    {
        title: 'Team Formation & Ideation',
        type: 'networking',
        time: '11:00 - 12:30',
        description: 'Find your team and brainstorm project ideas',
        location: 'Workshop Areas',
        day: 1
    },
    // Add more events...
];

export default function ScheduleSection() {
    const [selectedDay, setSelectedDay] = useState<1 | 2 | 3>(1);

    const filteredEvents = SCHEDULE_EVENTS.filter(event => event.day === selectedDay);

    return (
        <section className="bg-[#1C1C1C] py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 text-white mb-6">
                        <div className="w-2 h-2 bg-white rotate-45" />
                        <span>Schedule</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Event Timeline
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl">
                        Three days of hacking, learning, and building the future of Ethereum.
                    </p>
                </div>

                {/* Day selector */}
                <div className="flex gap-4 mb-12">
                    {[1, 2, 3].map((day) => (
                        <button
                            key={day}
                            onClick={() => setSelectedDay(day as 1 | 2 | 3)}
                            className={`px-6 py-3 rounded-lg font-medium transition-colors ${selectedDay === day
                                ? 'bg-white text-black'
                                : 'bg-[#252525] text-white hover:bg-[#303030]'
                                }`}
                        >
                            Day {day}
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div className="space-y-6">
                    {filteredEvents.map((event, index) => (
                        <div
                            key={`${event.time}-${index}`}
                            className="bg-[#252525] rounded-lg p-6 transition-all hover:bg-[#303030]"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <div className="md:w-1/4">
                                    <span className="text-[#6C3CE9] font-medium">{event.time}</span>
                                </div>

                                <div className="md:w-3/4">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-300 mb-4">
                                        {event.description}
                                    </p>

                                    <div className="flex items-center gap-4 text-sm">
                                        <span className="bg-[#1C1C1C] px-3 py-1 rounded-full text-gray-300">
                                            {event.location}
                                        </span>
                                        {event.speaker && (
                                            <span className="text-[#6C3CE9]">
                                                by {event.speaker}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 