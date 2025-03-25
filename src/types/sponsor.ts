export type SponsorTier = 'sausage' | 'shnitzel' | 'grostl';

export interface Sponsor {
    name: string;
    logo: string;
    website: string;
    tier: SponsorTier;
} 