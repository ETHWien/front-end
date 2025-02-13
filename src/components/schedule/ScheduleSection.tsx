'use client'
import { useState } from 'react';
import { ScheduleEvent } from '@/types/schedule';
import PS1 from '../terminal/PS1';

const SCHEDULE_EVENTS: ScheduleEvent[] = [
    // {
    //     title: 'Registration & Welcome Coffee',
    //     type: 'other',
    //     time: '09:00 - 10:00',
    //     description: 'Pick up your badge and enjoy morning refreshments',
    //     location: 'Main Hall',
    //     day: 1
    // },
];

export default function ScheduleSection() {
    const [selectedDay, setSelectedDay] = useState<1 | 2 | 3>(1);

    return (
        <section className="bg-black py-12 font-mono" id="schedule">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-12">
                    <PS1 currentDir="~" customCommand="crontab -l" className="text-3xl sm:text-4xl font-bold text-white mb-6 glitch-text" />
                </div>

                {/* Day selector with terminal style */}
                <div className="flex gap-4 mb-12">
                    {[1, 2].map((day) => (
                        <button
                            key={day}
                            onClick={() => setSelectedDay(day as 1 | 2 | 3)}
                            className={`px-6 py-3 border ${selectedDay === day
                                ? 'border-[#0F0] text-[#0F0]'
                                : 'border-gray-800 text-gray-500 hover:border-[#0F0] hover:text-[#0F0]'
                                } transition-all duration-300 font-mono`}
                        >
                            DAY_{day}.sh
                        </button>
                    ))}
                </div>

                {/* Timeline with terminal/hacker style */}
                <div className="space-y-6">
                    {SCHEDULE_EVENTS.filter(event => event.day === selectedDay).map((event, index) => (
                        <div
                            key={`${event.time}-${index}`}
                            className="border border-gray-800 p-6 hover:border-[#0F0] transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <div className="md:w-1/4">
                                    <span className="text-[#0F0] font-mono">{event.time}</span>
                                </div>

                                <div className="md:w-3/4">
                                    <h3 className="text-xl font-bold text-white mb-2 font-mono">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-400 mb-4 font-mono">
                                        {event.description}
                                    </p>

                                    <div className="flex items-center gap-4 text-sm font-mono">
                                        <span className="border border-gray-800 px-3 py-1 text-[#0F0]">
                                            [{event.location}]
                                        </span>
                                        {event.speaker && (
                                            <span className="text-[#0F0]">
                                                usr/{event.speaker}
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