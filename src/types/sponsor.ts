export type SponsorTier = 'diamond' | 'gold' | 'silver' | 'bronze';

export interface Sponsor {
    name: string;
    logo: string;
    website: string;
    tier: SponsorTier;
} 