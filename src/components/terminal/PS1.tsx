'use client';

import { SITE_CONFIG } from '@/constants';

interface PS1Props {
    currentDir?: string;
    customCommand?: string;
    className?: string;
}

export default function PS1({ currentDir = '~', customCommand = '', className = 'text-[#0F0]' }: PS1Props) {
    const defaultPrompt = `root@${SITE_CONFIG.domain}:${currentDir}# ${customCommand}`;
    return (
        <span className={`${className}`}>
            {defaultPrompt}
        </span>
    );
} 