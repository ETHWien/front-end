'use client';

import { useState, useEffect, useRef } from 'react';

const SUGGESTIONS = [
    { command: 'what is ETH Vienna', response: 'ETH Vienna is a premier Ethereum hackathon bringing together developers, innovators, and blockchain enthusiasts.' },
    { command: 'when is ETH Vienna', response: 'ETH Vienna 2025 will take place from September 1-3, 2025.' },
    { command: 'where is ETH Vienna', response: 'ETH Vienna is hosted at District Living in Vienna, Austria.' },
    { command: 'how to participate', response: 'To participate, register through ./register.sh and join us for 36 hours of hacking!' },
    { command: 'show sponsors', response: 'View our network partners at /sponsors' },
    { command: 'help', response: 'Available commands:\n- what is ETH Vienna\n- when is ETH Vienna\n- where is ETH Vienna\n- how to participate\n- show sponsors\n- clear' },
];

export default function TerminalPrompt() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<Array<{ type: 'input' | 'output', content: string }>>([]);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);

        // Show suggestions based on input
        if (value) {
            const filtered = SUGGESTIONS
                .map(s => s.command)
                .filter(cmd => cmd.toLowerCase().includes(value.toLowerCase()));
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add input to history
        setHistory(prev => [...prev, { type: 'input', content: input }]);

        // Handle commands
        const command = input.toLowerCase().trim();

        if (command === 'clear') {
            setHistory([]);
        } else {
            const suggestion = SUGGESTIONS.find(s => s.command.toLowerCase() === command);
            const response = suggestion
                ? suggestion.response
                : 'Command not found. Type "help" for available commands.';

            setHistory(prev => [...prev, { type: 'output', content: response }]);
        }

        setInput('');
        setSuggestions([]);
    };

    return (
        <div className="bg-black border border-[#0F0]/30 rounded-md p-4 font-mono">
            {/* Terminal output */}
            <div
                ref={terminalRef}
                className="h-64 overflow-y-auto mb-4 space-y-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#0F0]/30"
            >
                {history.map((entry, i) => (
                    <div key={i}>
                        {entry.type === 'input' ? (
                            <div className="flex items-center gap-2">
                                <span className="text-[#0F0]">root@ethvienna:~$</span>
                                <span className="text-white">{entry.content}</span>
                            </div>
                        ) : (
                            <div className="text-[#0F0] whitespace-pre-line pl-4">
                                {entry.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit} className="relative">
                <div className="flex items-center gap-2">
                    <span className="text-[#0F0]">root@ethvienna:~$</span>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInput}
                        className="flex-1 bg-transparent text-white focus:outline-none"
                        autoFocus
                    />
                </div>

                {/* Suggestions */}
                {suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-black border border-[#0F0]/30 rounded-md">
                        {suggestions.map((suggestion, i) => (
                            <button
                                key={i}
                                className="w-full text-left px-4 py-2 text-[#0F0] hover:bg-[#0F0]/10"
                                onClick={() => {
                                    setInput(suggestion);
                                    setSuggestions([]);
                                }}
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                )}
            </form>
        </div>
    );
} 