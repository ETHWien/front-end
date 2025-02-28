import { useState } from 'react';
import Image from 'next/image';
import { Speaker } from '@/types/Speaker';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface SpeakerChatProps {
    speaker: Speaker;
    isOpen: boolean;
    onClose: () => void;
}

export default function SpeakerChat({ speaker, isOpen, onClose }: SpeakerChatProps) {
    const [messages, setMessages] = useState<Array<{
        role: 'user' | 'assistant';
        content: string;
    }>>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user' as const, content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: input,
                    speakerId: speaker.id,
                    model: speaker.huggingFaceModel
                }),
            });

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
        } catch (error) {
            console.error('Chat error:', error);
        } finally {
            setLoading(false);
        }
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 w-full max-w-lg rounded-lg shadow-xl overflow-hidden">
                {/* Header */}
                <div className="border-b border-gray-800 p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="relative w-10 h-10">
                            {speaker.image.endsWith('.mp4') ? (
                                <video
                                    src={speaker.image}
                                    autoPlay
                                    muted
                                    loop
                                    className="rounded-full object-cover"
                                />
                            ) : (
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            )}
                        </div>
                        <div>
                            <h3 className="text-[#0F0] font-mono">{speaker.name}</h3>
                            <div className="flex items-center gap-2">
                                <p className="text-gray-400 text-sm">{speaker.role}</p>
                                {speaker.socials && (
                                    <div className="flex gap-2">
                                        {speaker.socials.x && (
                                            <Link
                                                href={`https://x.com/${speaker.socials.x}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-[#0F0] transition-colors"
                                                title={`@${speaker.socials.x} on X`}
                                            >
                                                <Icon
                                                    icon="simple-icons:x"
                                                    className="w-4 h-4"
                                                />
                                            </Link>
                                        )}
                                        {speaker.socials.farcaster && (
                                            <Link
                                                href={`https://warpcast.com/${speaker.socials.farcaster}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-[#0F0] transition-colors"
                                                title={`${speaker.socials.farcaster} on Farcaster`}
                                            >
                                                <Icon
                                                    icon="simple-icons:farcaster"
                                                    className="w-4 h-4"
                                                />
                                            </Link>
                                        )}
                                        {speaker.socials.telegram && (
                                            <Link
                                                href={`https://t.me/${speaker.socials.telegram}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-[#0F0] transition-colors"
                                                title={`${speaker.socials.telegram} on Telegram`}
                                            >
                                                <Icon
                                                    icon="simple-icons:telegram"
                                                    className="w-4 h-4"
                                                />
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-300"
                    >
                        ✕
                    </button>
                </div>

                {/* Chat Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                    {/* Predefined Q&A */}
                    <div className="border-b border-gray-800 pb-4 mb-4">
                        <h4 className="text-[#0F0] font-mono mb-2">Frequently Asked Questions</h4>
                        {speaker.predefinedQA.map((qa, index) => (
                            <div key={index} className="mb-2">
                                <p className="text-gray-300">Q: {qa.question}</p>
                                <p className="text-gray-400 pl-4">A: {qa.answer}</p>
                            </div>
                        ))}
                    </div>

                    {/* Chat Messages */}
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user'
                                    ? 'bg-[#0F0]/10 text-[#0F0]'
                                    : 'bg-gray-800 text-gray-300'
                                    }`}
                            >
                                {message.content}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex justify-start">
                            <div className="bg-gray-800 text-gray-300 rounded-lg p-3">
                                <span className="animate-pulse">▊</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="border-t border-gray-800 p-4">
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a question..."
                            className="flex-1 bg-gray-800 text-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#0F0]"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#0F0]/10 text-[#0F0] px-4 py-2 rounded hover:bg-[#0F0]/20 disabled:opacity-50"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 