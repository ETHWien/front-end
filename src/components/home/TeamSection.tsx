'use client';
import SpeakerCard from '../speakers/SpeakerCard';
import PS1 from '../terminal/PS1';


import { Speaker } from "@/types/Speaker";

export const teamMembers: Speaker[] = [
    {
        id: "rex",
        name: "rex",
        role: "Co-Founder",
        image: "/team/rex.jpg",
        socials: {
            "x": "0xr3x",
            "farcaster": "rex"
        },
        bio: "gm yall!\nas a fellow serial hacker, and having lived in austria for two years, i decided to take setting a viennese hackathon in my own hands.\ni like data stuff and rubik's cubes, and work for some madly cool people.\n\nmilady",
        expertise: ["data", "te", "python", "solidity"],
        huggingFaceModel: "gpt2",
        predefinedQA: [
            {
                question: "what are you most excited about in crypto?",
                answer: "one of the most exciting spaces is, for many, the most dull - i think that in the next year, we are going to finally see great anti-crypto crypto apps. crypto will be successful when people don't know they're using it - and developers pick it as the safest and cheapest technology to build unto. we're definitely close: interop and chain abstraction, wallet abstraction are all a soonTM matter. just as linux took over the server space, crypto will finally take new assets onchain."
            },
            {
                question: "what was your first interaction with crypto?",
                answer: `this is a funny one, actually. besides hearing the news, i came across the initial $petro whitepaper, and shortly thereafter, an interview with the founder of that project. i was fascinated with money and exchange in both microeconomic and macroeconomic dynamics, and loved the idea of countering a hyperinflationary period with a ("more" stable) hard asset. it didn't pan out as such, but from then on, i got hooked on all the new forms of money.`
            }
        ]
    },
    {
        id: "deepshikha",
        name: "Deepshikha",
        role: "Co-Founder",
        image: "/team/deepshikha.jpg",
        bio: "26 going on 50 in web3 years. Public goods maximalist and ReFi enthusiast with a soft spot for crypto commons. Africa-raised builder exploring the intersection of DeFi and real-world impact. Currently obsessed with making web3 accessible to everyone, one stable coin at a time. When not researching decentralized platforms, you'll find me explaining why your favorite protocol should be a public good.",
        expertise: [
            "Public Goods",
            "ReFi",
            "DeFi",
            "Web3 Research",
            "Community Building"
        ],
        huggingFaceModel: "gpt2",
        predefinedQA: [
            {
                question: "What excites you most about web3 in Africa?",
                answer: "The innovation happening in Africa isn't just about technology - it's about real people solving real problems. We're seeing communities build their own financial systems with stablecoins, create accessible insurance products, and develop solutions that actually make sense for local needs. It's like watching a parallel financial system emerge, but this time it's built by and for the people who'll use it. That's the kind of web3 that gets me excited!"
            },
            {
                question: "Why are you so passionate about public goods?",
                answer: "Listen, if I had a gwei for every time someone asked me why everything can't just be a public good... I'd probably turn that into a public good too! But seriously, the beauty of public goods in web3 is that we can actually make them sustainable. We're not just talking about 'free stuff' - we're creating systems where doing good is economically viable. It's like having your cake, eating it, and then using the recipe to bake cakes for everyone else."
            },
            {
                question: "What's your vision for ETHWien?",
                answer: "ETHWien isn't just another hackathon - it's our love letter to the future of web3. We're creating a space where African stablecoin developers can collaborate with European DeFi experts, where ReFi enthusiasts can challenge traditional finance assumptions, and where every builder feels empowered to create something meaningful. Plus, we'll prove that you can absolutely discuss tokenomics while enjoying a perfect Melange!"
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
        socials: {
            "x": "0xshazam",
            "telegram": "ZeroXShazam"
        },
        bio: "Serial hackathon enthusiast and full-stack developer who accidentally fell into the web3 rabbit hole and never wanted to leave. When not crafting smart contracts or debugging API endpoints, you'll find me diving into new tech stacks faster than you can say 'gm'. Currently exploring the magic of Vienna while trying to convince my rubber duck that zero-knowledge proofs are actually fun.",
        expertise: [
            "Full Stack Development",
            "Smart Contracts",
            "Zero Knowledge Proofs",
            "API Engineering",
            "Hackathon Survival"
        ],
        huggingFaceModel: "gpt2",
        predefinedQA: [
            {
                question: "How did you get into web3?",
                answer: "It all started with me trying to figure out why people were so excited about jpegs of monkeys. Next thing I know, I'm knee-deep in solidity code at 3 AM, surrounded by empty coffee cups, debugging a smart contract that's probably just missing a semicolon. The web3 community's energy was infectious - where else can you find people who get equally excited about gas optimization and memes?"
            },
            {
                question: "What's your favorite part about hackathons?",
                answer: "Besides the unlimited coffee and the 3 AM debugging sessions where code starts looking like ancient hieroglyphics? It's definitely the moment when your project finally works and you can't tell if you're crying from joy or from sleep deprivation. Every hackathon is like a mini adventure - you never know if you'll end up building a DeFi protocol or a blockchain-based toaster, but that's part of the fun!"
            },
            {
                question: "What's your vision for ETHWien?",
                answer: "Picture this: a hackathon where the coffee is as strong as the smart contracts, and the only gas wars are about who gets the last slice of Sachertorte. We want to create the kind of event where beginners feel welcome to ask 'what's a blockchain?' and experts can debate ZK-rollups over Wiener Schnitzel. Vienna's tech scene is like its coffee houses - a perfect blend of tradition and innovation, and we're here to add a web3 twist to it!"
            }
        ]
    },
    {
        id: "ed",
        name: "Ed Prinz",
        role: "Advisor",
        image: "/team/ed.jpg",
        socials: {
            "linkedin": "ed-prinz",
        },
        bio: "Expert in Web3, specializing in growth, analytics, and crypto-economics development. Chairperson at DLT Austria, Founder of Web3 Hub Vienna and Moonlytics.ai. Founding Board Member at DLT Germany and active researcher in Bitcoin, Ethereum, Web3, DeFi and NFTs.",
        expertise: [
            "Web3 Growth",
            "Analytics",
            "Crypto-economics",
            "DLT",
            "Research"
        ],
        huggingFaceModel: "gpt2",
        predefinedQA: [
            {
                question: "What's your vision for the Web3 ecosystem in Vienna?",
                answer: "As the founder of Web3 Hub Vienna and Chairperson of DLT Austria, I'm focused on building a thriving Web3 ecosystem that connects traditional industries with blockchain innovation. Vienna has the potential to become a major Web3 hub in Europe, combining its rich technical talent with forward-thinking regulation."
            },
            {
                question: "How do you see analytics evolving in Web3?",
                answer: "Through Moonlytics.ai and my research work, I've seen how critical data-driven insights are for Web3 projects. The future of Web3 analytics will combine on-chain data with traditional metrics to give projects a complete view of their performance and help them make better strategic decisions."
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