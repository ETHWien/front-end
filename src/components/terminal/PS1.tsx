'use client';

import { SITE_CONFIG } from '@/constants';

interface PS1Props {
    currentDir?: string;
    customCommand?: string;
}

export default function PS1({ currentDir = '~', customCommand = '' }: PS1Props) {
    const defaultPrompt = `root@${SITE_CONFIG.domain}:${currentDir}# ${customCommand ? customCommand : ''}`;

    return (
        <span className="text-[#0F0]">
            {defaultPrompt}
        </span>
    );
} 