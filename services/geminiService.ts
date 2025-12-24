import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
) => {
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