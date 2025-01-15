const apiKey=import.meta.env.VITE_GOOGLE_API_KEY
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateCV(cvData) {
    try {
        const prompt = `Generate a professional CV formatted in Markdown based on the details provided in the following JavaScript object. Write the content from the first-person perspective, making it engaging and personalized. Structure the CV with sections such as "Personal Information," "Experience," "Education," and "Skills." For the "Skills" section, include a placeholder like "<To be filled by the user>" or something creative to leave it open for the user to decide. Ensure dates, job titles, and descriptions are formatted cleanly and professionally for readability. Data: ${JSON.stringify(cvData)}`;

        const result = await model.generateContent(prompt);
        return {
            success: true,
            data: result.response.text(),
            error: null
        };
    } catch (error) {
        console.error('CV Generation Error:', error);
        return {
            success: false,
            data: null,
            error: error.message || 'Failed to generate CV'
        };
    }
}