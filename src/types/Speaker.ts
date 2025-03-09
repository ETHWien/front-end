export interface Speaker {
    id: string;
    name: string;
    role: string;
    image: string;
    socials?: Socials;
    bio: string;
    expertise: string[];
    publications?: string[];
    huggingFaceModel: string;
    predefinedQA: {
        question: string;
        answer: string;
    }[];
}

export interface Socials {
    x?: string;
    farcaster?: string;
    telegram?: string;
    linkedin?: string;
    linktree?: string;
} 