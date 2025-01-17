import { Speaker } from "@/types/Speaker";

export const speakers: Speaker[] = [
    {
        id: "wolfgang-mozart",
        name: "Wolfgang A. Mozart",
        role: "Classical Composer & Innovator",
        image: "/speakers/mozart.png",
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
    },
    {
        id: "ludwig-beethoven",
        name: "Ludwig van Beethoven",
        role: "Revolutionary Composer",
        image: "/speakers/beethoven.png",
        bio: "Transformative figure who bridged the Classical and Romantic eras in Vienna.",
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
        id: "johann-strauss",
        name: "Johann Strauss II",
        role: "Waltz King of Vienna",
        image: "/speakers/strauss.png",
        bio: "Master of the Viennese waltz and light orchestral music.",
        expertise: ["Waltz", "Operetta", "Light Music"],
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
    }
]; 