export interface Speaker {
    id: string;
    name: string;
    role: string;
    image: string;
    socials?: {
        [key: string]: string;
    };
    bio: string;
    expertise: string[];
    publications?: string[];
    huggingFaceModel: string;
    predefinedQA: {
        question: string;
        answer: string;
    }[];
} 