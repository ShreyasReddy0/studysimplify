# StudySimplify - AI Conceptual Tutor 

**Live Demo:** https://studysimplify1.vercel.app

StudySimplify is a modern web application built to help students understand complex topics instantly. By using AI to break down difficult subjects into simple definitions and relatable analogies, it makes learning fast and engaging.

## The Mission
Most educational content is either too technical or buried in long articles. I built StudySimplify to provide a "shortcut" to understanding. It's designed to give students exactly what they need: a clear definition, a real-world example, and the must-know facts.

## Key Decisions
* **Performance:** I chose to integrate the AI in a way that prioritizes speed. Students should get answers in milliseconds, not seconds.
* **UX/UI Design:** I used a "Bento-grid" style for the layout. I also added custom CSS conic-gradients and fixed positioning for the branding to ensure a premium, polished feel.
* **Effective Learning:** The AI prompts are structured to include analogies, as relating new information to familiar concepts is the most effective way for humans to learn.

## Mandatory Technology Stack
As per the project requirements, this application is built using:
* **Next.js (App Router):** Powering both the frontend and the backend API routes.
* **TypeScript:** Ensuring type-safety and reliable code.
* **Tailwind CSS:** For a clean, responsive, and animated user interface.
* **Gemini API:** Used for generating structured, high-quality educational content.
* **Vercel:** For cloud hosting and continuous deployment.

## 🛠️ How to Run Locally
1. Clone the repository: `git clone https://github.com/ShreyasReddy0/studysimplify`
2. Install dependencies: `npm install`
3. Create a `.env.local` file and add your API key:
   `GEMINI_API_KEY=your_key_here`
4. Run the development server: `npm run dev`
5. Open `http://localhost:3000` in your browser.

---
**Made with ❤️ by Shreyas Reddy**
