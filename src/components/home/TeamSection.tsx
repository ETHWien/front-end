'use client';
import SpeakerCard from '../speakers/SpeakerCard';
import PS1 from '../terminal/PS1';


import { Speaker } from "@/types/Speaker";

export const teamMembers: Speaker[] = [
    {
        id: "rex",
        name: "Rex",
        role: "Co-Founder",
        image: "/team/rex.jpg",
        bio: "Rex is the co-founder of the event. He is responsible for the overall vision and direction of the event.",
        expertise: ["Symphony", "Piano Sonata", "String Quartet"],
        huggingFaceModel: "gpt2",
        predefinedQA: [
            {
                question: "What's the story behind 'The Blue Danube'?",
                answer: "An der schönen blauen Donau (The Blue Danube) was composed in 1866 during a period of Austrian military defeats. The waltz was intended to lift Viennese spirits and has since become Austria's unofficial national anthem, celebrating the beauty of Vienna and its famous river."
            },
            {
                question: "How did you develop the Viennese Waltz?",
                answer: "I elevated the waltz from a simple ballroom dance to a sophisticated art form. By incorporating complex orchestration and melodic development, I created pieces that were both danceable and suitable for concert performance."
            }
        ]
    },
    {
        id: "deepshikha",
        name: "Deepshikha",
        role: "Co-Founder",
        image: "/team/deepshikha.jpg",
        bio: "Deepshikha is the co-founder of the event. She is responsible for the overall vision and direction of the event.",
        expertise: ["Symphony", "Piano Sonata", "String Quartet"],
        huggingFaceModel: "gpt2",
        predefinedQA: [
            {
                question: "Tell us about the Ninth Symphony",
                answer: "The Ninth Symphony represents humanity's universal brotherhood. Despite my complete deafness during its composition, I envisioned a work that would transcend traditional symphonic boundaries by incorporating voices and Schiller's 'Ode to Joy'."
            },
            {
                question: "How did you revolutionize music in Vienna?",
                answer: "In Vienna, I expanded the classical forms I inherited from Mozart and Haydn. By emphasizing emotional expression and pushing instrumental capabilities to their limits, I helped establish the foundations of the Romantic era."
            }
        ]
    },
    {
        id: "alina",
        name: "Alina",
        role: "Logistics",
        image: "/team/alina.jpg",
        bio: "Alina is the logistics coordinator for the event. She is responsible for ensuring that the event runs smoothly and that all attendees have a great experience.",
        expertise: ["Symphony", "Piano Sonata", "String Quartet"],
        huggingFaceModel: "gpt2",
        predefinedQA: [
            {
                question: "Tell us about the Ninth Symphony",
                answer: "The Ninth Symphony represents humanity's universal brotherhood. Despite my complete deafness during its composition, I envisioned a work that would transcend traditional symphonic boundaries by incorporating voices and Schiller's 'Ode to Joy'."
            },
            {
                question: "How did you revolutionize music in Vienna?",
                answer: "In Vienna, I expanded the classical forms I inherited from Mozart and Haydn. By emphasizing emotional expression and pushing instrumental capabilities to their limits, I helped establish the foundations of the Romantic era."
            }
        ]
    },
    {
        id: "shazam",
        name: "Shazam",
        role: "Developer",
        image: "/team/shazam.mp4",
        bio: "Pioneering composer who revolutionized classical music in Vienna...",
        expertise: ["Symphony", "Opera", "Chamber Music"],
        huggingFaceModel: "gpt2",
        predefinedQA: [
            {
                question: "What inspired your Symphony No. 40?",
                answer: "The Symphony No. 40 in G minor emerged during a period of intense creativity in 1788. It reflects both the elegance of Viennese style and the emotional depth of the Sturm und Drang movement, characterized by its dramatic intensity and minor tonality."
            },
            {
                question: "How did Vienna influence your music?",
                answer: "Vienna was instrumental in shaping my musical language. The city's rich cultural atmosphere, the presence of great musicians, and the sophisticated audience allowed me to experiment with new forms and push the boundaries of classical composition."
            }
        ]
    }
];

export default function TeamSection() {
    return (
        <section className="bg-black py-12 font-mono" id="team">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="mb-12">
                    <PS1 currentDir="~" customCommand="getnet group ethwien" className="text-2xl sm:text-3xl font-bold text-white mb-6 glitch-text" />
                </div>

                {/* Speakers grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {teamMembers.map((speaker) => (
                        <SpeakerCard
                            key={speaker.id}
                            speaker={speaker}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 