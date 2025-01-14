import { Speaker } from "@/types/Speaker";

export const speakers: Speaker[] = [
    {
        id: "maria-schmidt",
        name: "Dr. Maria Schmidt",
        role: "Blockchain Researcher",
        image: "/speakers/Image1.png",
        bio: "Leading researcher in blockchain scalability solutions...",
        expertise: ["Layer 2 Solutions", "ZK-Rollups", "Ethereum Scaling"],
        huggingFaceModel: "gpt2",
        predefinedQA: [
            {
                question: "What are your thoughts on ZK-rollups?",
                answer: "ZK-rollups are one of the most promising scaling solutions for Ethereum. They bundle multiple transactions into a single proof, significantly reducing gas fees while maintaining security. The mathematical validity proofs ensure trustless verification on-chain."
            },
            {
                question: "How do you see Layer 2 evolving?",
                answer: "Layer 2 solutions are becoming increasingly sophisticated. We're seeing better interoperability, lower costs, and improved user experience. I expect to see more specialized L2s for specific use cases, while maintaining security through Ethereum's base layer."
            }
        ]
    },
    {
        id: "alex-chen",
        name: "Alex Chen",
        role: "Smart Contract Auditor",
        image: "/speakers/Image2.png",
        bio: "Senior security researcher specializing in smart contract vulnerabilities and audit methodologies.",
        expertise: ["Smart Contract Security", "DeFi Protocols", "Audit Tools"],
        huggingFaceModel: "gpt2",
        predefinedQA: [
            {
                question: "What are common smart contract vulnerabilities?",
                answer: "The most frequent vulnerabilities we encounter include reentrancy attacks, flash loan exploits, and access control issues. It's crucial to implement proper checks and follow established security patterns like checks-effects-interactions."
            },
            {
                question: "How is AI changing smart contract auditing?",
                answer: "AI tools are becoming valuable supplements to traditional auditing. They help identify patterns and potential vulnerabilities more quickly, but human expertise is still essential for understanding context and complex attack vectors."
            }
        ]
    },
    {
        id: "sarah-patel",
        name: "Sarah Patel",
        role: "DeFi Architect",
        image: "/speakers/Image3.png",
        bio: "Pioneer in decentralized finance protocols and tokenomics design.",
        expertise: ["DeFi Protocol Design", "Tokenomics", "MEV"],
        huggingFaceModel: "gpt2",
        predefinedQA: [
            {
                question: "What's your view on MEV in DeFi?",
                answer: "MEV is a complex phenomenon that's become integral to DeFi. While some forms can be harmful to users, others contribute to market efficiency. The key is designing protocols that either minimize harmful MEV or democratize access to MEV opportunities."
            },
            {
                question: "How do you approach tokenomics design?",
                answer: "Effective tokenomics must balance multiple stakeholder interests while ensuring long-term sustainability. I focus on creating value accrual mechanisms, proper incentive alignment, and sustainable emission schedules that support protocol growth."
            }
        ]
    }
]; 