import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Initialize the API client
// Use import.meta.env for Vite, fallback to process.env for compatibility
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY || process.env.API_KEY || process.env.GEMINI_API_KEY;

// Check if API key is available (silently, no console warnings)
export const isApiKeyAvailable = !!apiKey;

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
) => {
  if (!ai) {
    throw new Error("API Key is not configured. Please set GEMINI_API_KEY environment variable.");
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // Transform history to the format expected by the SDK if needed, 
    // but chat.sendMessage automatically handles context if we maintain the chat instance.
    // For a stateless service approach suited for this simple widget, we can re-create or strictly use generateContent 
    // but the best practice for chat is using ai.chats.create.
    
    // Create a new chat session with system instructions
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessageStream({ message });
    return result;

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};