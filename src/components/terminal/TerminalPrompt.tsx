'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { SITE_CONFIG } from '@/constants';
import SteamLocomotive from './SteamLocomotive';
import PS1 from './PS1';

type VirtualDirPath = '/' | '/about' | '/schedule' | '/speakers' | '/sponsors' | '/location' | '/partners';

const VIRTUAL_DIRS: Record<VirtualDirPath, string[]> = {
    '/': ['About', 'Schedule', 'Speakers', 'Sponsors', 'Location', 'Partners', 'register.sh', 'join-alliance.sh'],
    '/about': [],
    '/schedule': [],
    '/speakers': ['Mozart', 'Beethoven', 'Strauss'],
    '/sponsors': [],
    '/location': [],
    '/partners': []
};

const SUGGESTIONS = [
    // Directory navigation commands
    { command: 'cd About', response: 'Changing directory to /about...' },
    { command: 'cd Schedule', response: 'Changing directory to /schedule...' },
    { command: 'cd Speakers', response: 'Changing directory to /speakers...' },
    { command: 'cd Sponsors', response: 'Changing directory to /sponsors...' },
    { command: 'cd Location', response: 'Changing directory to /location...' },
    { command: 'cd Partners', response: 'Changing directory to /partners...' },
    { command: 'cd ..', response: 'Returning to parent directory...' },

    // Basic event info
    { command: `what is ${SITE_CONFIG.name}`, response: `${SITE_CONFIG.name} is a premier Ethereum hackathon bringing together developers, innovators, and blockchain enthusiasts.` },
    { command: `when is ${SITE_CONFIG.name}`, response: `${SITE_CONFIG.name} 2025 will take place from ${SITE_CONFIG.date}.` },
    { command: `where is ${SITE_CONFIG.name}`, response: `${SITE_CONFIG.name} is hosted at District Living in Vienna, Austria.` },
    { command: 'how to participate', response: 'To participate, register through ./register.sh and join us for 36 hours of hacking!' },

    // Navigation commands
    { command: 'pwd', response: '/home/hacker/District_Living/Vienna/Austria' },
    { command: 'ls', response: 'about  schedule  speakers  sponsors  location  partners  register.sh  join-alliance.sh' },
    { command: 'whoami', response: 'ETH Wien Hacker - Building the future of Web3 in the heart of Europe' },

    // Section specific commands
    { command: 'cat /etc/cron.d/schedule', response: 'Loading hackathon schedule...\nDay 1: Opening ceremony, team formation\nDay 2: Hacking, workshops\nDay 3: Project submission, demos, awards' },
    { command: 'alsamixer -c Vienna', response: 'Loading ALSA_Maestros profiles...\n- Wolfgang A. Mozart (Classical Composer & Innovator)\n- Ludwig van Beethoven (Revolutionary Composer)\n- Johann Strauss II (Waltz King of Vienna)' },
    { command: 'cat /etc/NetworkManager/system-connections', response: 'Scanning network partners...\nConnected to the most innovative blockchain ecosystem.' },

    // Action commands
    { command: './register.sh', response: 'Initializing registration process...\nRedirecting to secure registration portal.' },
    { command: './join-alliance.sh', response: 'Opening sponsor partnership details...\nRedirecting to alliance information.' },
    { command: 'show sponsors', response: 'View our network partners at /sponsors' },

    // System commands
    { command: 'uname -a', response: `${SITE_CONFIG.name} Hackathon System v2025.1-vienna running on Web3 kernel` },
    { command: 'df -h', response: 'Available space for ideas: ∞\nInnovation capacity: 100%\nCreativity buffer: Unlimited' },
    { command: 'top', response: 'Top processes:\n1. Innovation Engine\n2. Collaboration Protocol\n3. Creativity Daemon\n4. Blockchain Syncing' },

    // Help and utilities
    { command: `man ${SITE_CONFIG.name}`, response: `${SITE_CONFIG.name}(1)\n\nNAME\n    ${SITE_CONFIG.name} - Premier Ethereum hackathon in Vienna\n\nDESCRIPTION\n    A 36-hour hackathon bringing together developers,\n    innovators, and blockchain enthusiasts.` },
    { command: 'help', response: `Available commands:\n- what is ${SITE_CONFIG.name}\n- when is ${SITE_CONFIG.name}\n- where is ${SITE_CONFIG.name}\n- how to participate\n- pwd\n- ls\n- whoami\n- cat /etc/cron.d/schedule\n- alsamixer -c Vienna\n- cat /etc/NetworkManager/system-connections\n- ./register.sh\n- ./join-alliance.sh\n- show sponsors\n- uname -a\n- df -h\n- top\n- man ${SITE_CONFIG.name}\n- clear` },
    { command: 'clear', response: '' },
];

export default function TerminalPrompt() {
    const router = useRouter();
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<Array<{ type: 'input' | 'output', content: string }>>([]);
    const [autoSuggestion, setAutoSuggestion] = useState('');
    const [currentDir, setCurrentDir] = useState('/');
    const [isTrainRunning, setIsTrainRunning] = useState(false);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);

        // Fish-like auto-suggestion
        if (value) {
            const matchingCommand = SUGGESTIONS
                .map(s => s.command)
                .find(cmd => cmd.toLowerCase().startsWith(value.toLowerCase()));

            setAutoSuggestion(matchingCommand || '');
        } else {
            setAutoSuggestion('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Tab' && autoSuggestion) {
            e.preventDefault();
            setInput(autoSuggestion);
        }
        // Right arrow to complete suggestion
        if (e.key === 'ArrowRight' && autoSuggestion) {
            e.preventDefault();
            setInput(autoSuggestion);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const command = input.toLowerCase().trim();
        const args = command.split(' ');

        // Add input to history
        setHistory(prev => [...prev, {
            type: 'input',
            content: input
        }]);

        if (command === 'sl') {
            setIsTrainRunning(true);
            setHistory(prev => [...prev, {
                type: 'output',
                content: 'You typed "sl" instead of "ls"? Watch this...'
            }]);
            setTimeout(() => {
                setIsTrainRunning(false);
            }, 10000);
        } else if (command === 'clear') {
            setHistory([]);
        } else if (args[0] === 'cd') {
            const targetDir = args[1];
            if (targetDir === '..') {
                if (currentDir !== '/') {
                    setCurrentDir('/');
                    setHistory(prev => [...prev, {
                        type: 'output',
                        content: 'Returned to root directory.'
                    }]);
                }
            } else {
                const normalizedDir = targetDir.charAt(0).toUpperCase() + targetDir.slice(1).toLowerCase();
                if (VIRTUAL_DIRS['/'].includes(normalizedDir)) {
                    setCurrentDir('/' + normalizedDir);
                    router.push('#' + normalizedDir.toLowerCase());
                    setHistory(prev => [...prev, {
                        type: 'output',
                        content: `Changed directory to /${normalizedDir}`
                    }]);
                } else {
                    setHistory(prev => [...prev, {
                        type: 'output',
                        content: 'Directory not found.'
                    }]);
                }
            }
        } else if (command === 'ls') {
            const dirContents = VIRTUAL_DIRS[currentDir as VirtualDirPath] || VIRTUAL_DIRS['/'];
            setHistory(prev => [...prev, {
                type: 'output',
                content: dirContents.join('  ')
            }]);
        } else {
            const suggestion = SUGGESTIONS.find(s => s.command.toLowerCase() === command);
            const response = suggestion
                ? suggestion.response
                : 'Command not found. Type "help" for available commands.';

            setHistory(prev => [...prev, { type: 'output', content: response }]);

            // Handle navigation commands
            switch (command) {
                case 'whoami':
                    router.push('#about');
                    break;
                case 'when is ETH_WIEN':
                    router.push('#schedule');
                    break;
                case 'whois ethereum.wien':
                    router.push('#about');
                    break;
                case './register.sh':
                    router.push(SITE_CONFIG.registerUrl);
                    break;
                case './join-alliance.sh':
                case 'show sponsors':
                    router.push('#sponsors');
                    break;
                case 'cat /etc/cron.d/schedule':
                    router.push('#schedule');
                    break;
                case 'alsamixer -c vienna':
                    router.push('#speakers');
                    break;
                case 'cat /etc/networkmanager/system-connections':
                    router.push('#partners');
                    break;
                case 'pwd':
                    router.push('#location');
                    break;
            }
        }

        setInput('');
        setAutoSuggestion('');
    };

    return (
        <div className="bg-black border border-[#0F0]/30 rounded-md p-4 font-mono">
            <div ref={terminalRef} className="h-64 overflow-y-auto mb-4 space-y-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#0F0]/30">
                {history.map((entry, i) => (
                    <div key={i}>
                        {entry.type === 'input' ? (
                            <div className="flex items-center gap-2">
                                <PS1 currentDir={currentDir} className="text-[#0F0]" />
                                <span className="text-white">{entry.content}</span>
                            </div>
                        ) : (
                            <div className="text-[#0F0] whitespace-pre-line pl-4">
                                {entry.content}
                            </div>
                        )}
                    </div>
                ))}
                {isTrainRunning && <SteamLocomotive />}
            </div>

            <form onSubmit={handleSubmit} className="relative">
                <div className="flex items-center gap-2">
                    <PS1 currentDir={currentDir} />
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInput}
                            onKeyDown={handleKeyDown}
                            className="w-full bg-transparent text-white focus:outline-none relative z-10"
                            autoFocus
                        />
                        {autoSuggestion && (
                            <div className="absolute left-0 top-0 text-gray-600 pointer-events-none">
                                {input}
                                <span className="text-gray-600">
                                    {autoSuggestion.slice(input.length)}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
} 