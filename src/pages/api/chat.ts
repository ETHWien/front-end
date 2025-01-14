import type { NextApiRequest, NextApiResponse } from 'next';
import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message, speakerId, model } = req.body;

        const response = await hf.textGeneration({
            model: model,
            inputs: `Context: You are ${speakerId}, a blockchain researcher.
              Question: ${message}
              Answer:`,
            parameters: {
                max_new_tokens: 250,
                temperature: 0.7,
                top_p: 0.95,
                repetition_penalty: 1.15
            }
        });

        return res.status(200).json({ response: response.generated_text });
    } catch (error) {
        console.error('Chat API error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
} 