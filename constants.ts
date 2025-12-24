import { Education, Experience, Project, Skill } from './types';

// Raw Data Definitions

const PROFILE_EN = {
  name: "Mechanical Engineering Student",
  university: "National Taiwan University",
  tagline: "Bridging Mechanical Systems with Artificial Intelligence",
  about: `I am a Mechanical Engineering student at National Taiwan University (expected June 2026) with a cumulative GPA of 3.91 (Top 18%). Originally from Malaysia, I am fluent in Chinese, English, and Malay. My academic journey has evolved from traditional mechanical optimization to integrating advanced AI solutions, including Neural Networks and Bayesian methods, to solve complex engineering problems.`,
  location: "Taipei, Taiwan",
  email: "pinchuen090@gmail.com",
  avatar: "https://ui-avatars.com/api/?name=Pin+Chuen&background=4f46e5&color=fff&size=256&bold=true",
  github: "github.com/chuen214",
  linkedin: "www.linkedin.com/in/pcng0214",
  buttons: {
    resume: "Download Resume"
  }
};

const PROFILE_ZH = {
  name: "Mechanical Engineering Student",
  university: "National Taiwan University",
  tagline: "Bridging Mechanical Systems with Artificial Intelligence",
  about: `我來自馬來西亞，精通中文、英文和馬來文。2022年來台就讀國立臺灣大學機械工程學系，預計於2026年6月取得學士學位。目前累積GPA為3.91，排名系上主要前18%。我的學術歷程從傳統的機械優化，轉變為整合神經網絡與貝式方法等先進AI解決方案，致力於解決複雜的工程問題。`,
  location: "Taipei, Taiwan",
  email: "pinchuen090@gmail.com",
  avatar: "https://ui-avatars.com/api/?name=Pin+Chuen&background=4f46e5&color=fff&size=256&bold=true",
  github: "github.com/chuen214",
  linkedin: "www.linkedin.com/in/pcng0214",
  buttons: {
    resume: "下載履歷"
  }
};

const EDUCATION_EN: Education[] = [
  {
    institution: "National Taiwan University",
    degree: "B.S. in Mechanical Engineering",
    period: "2022 - 2026 (Expected)",
    gpa: "3.91 / 4.3 (Top 18%)",
    details: "Relevant Coursework: Engineering Graphics, Computer-Aided Engineering Graphics, Programming, Automatic Control, Electrical Engineering."
  }
];

const EDUCATION_ZH: Education[] = [
  {
    institution: "國立臺灣大學",
    degree: "機械工程學系 學士",
    period: "2022 - 2026 (預計畢業)",
    gpa: "3.91 / 4.3 (前 18%)",
    details: "相關課程：工程製圖, 電腦輔助工程製圖, 程式設計, 自動控制, 電工學"
  }
];

const EXPERIENCE_EN: Experience[] = [
  {
    company: "SHL Medical",
    role: "Intern",
    period: "Aug 2025 - Feb 2026",
    location: "Taiwan",
    description: [
      "Developed a Gage R&R analysis program using R to replace Minitab, handling data input, visualization, and PDF reporting.",
      "Implemented a Bayesian Neural Network (BNN) to predict auto-injector injection times, quantifying prediction uncertainty based on drug properties and mechanical parameters."
    ]
  },
  {
    company: "Prof. Hao-Ming Hsiao’s Laboratory",
    role: "Undergraduate Researcher",
    period: "Sophomore Year - Present",
    location: "National Taiwan University",
    description: [
      "Researched PID controller optimization for cardiac catheterization robots.",
      "Utilized Genetic Algorithms and Particle Swarm Optimization (PSO) for parameter tuning.",
      "Developed a Feedforward Neural Network (FNN) to enable adaptive PID tuning based on varying input conditions, significantly reducing optimization time."
    ]
  },
  {
    company: "Malaysian Students’ Association",
    role: "Committee Member",
    period: "Sophomore Year",
    location: "National Taiwan University",
    description: [
      "Served as a committee member facilitating student welfare and cultural exchange activities."
    ]
  }
];

const EXPERIENCE_ZH: Experience[] = [
  {
    company: "瑞健醫療 (SHL Medical)",
    role: "實習生",
    period: "2025年8月 - 2026年2月",
    location: "台灣",
    description: [
      "負責前端開發：使用 R 開發 Gage R&R 分析程式以取代 Minitab，功能涵蓋資料輸入、介面佈局、結果視覺化及 PDF 報告生成。",
      "專案開發：利用貝式神經網絡 (BNN) 預測自動注射器的注射時間，根據藥物體積、黏度及彈簧勁度等參數，量化預測的不確定性。"
    ]
  },
  {
    company: "蕭浩明教授實驗室",
    role: "大學部專題生",
    period: "大二 - 至今",
    location: "國立臺灣大學",
    description: [
      "研究心導管機器人系統的 PID 控制器參數優化。",
      "大二與大三期間，分別使用基因演算法 (GA) 與粒子群演算法 (PSO) 進行參數調校。",
      "大四期間收集最佳化數據訓練前饋神經網絡 (FNN)，實現了 PID 控制器的自適應調校，解決了須針對新條件重新運算極為耗時的問題。"
    ]
  },
  {
    company: "馬來西亞同學會",
    role: "幹部",
    period: "大二",
    location: "國立臺灣大學",
    description: [
      "擔任幹部一年，負責協助學生福利與舉辦文化交流活動。"
    ]
  }
];

const PROJECTS_EN: Project[] = [
  {
    title: "Gage R&R Analysis Tool",
    role: "Intern Project @ SHL Medical",
    period: "Internship",
    description: "Developed a comprehensive statistical analysis tool using R to replace Minitab. Features include automated data processing, interactive visualizations, and PDF report generation for quality control.",
    techStack: ["R Language", "Data Visualization", "Statistics", "Automation"],
    category: "Software",
    link: "https://pcng.shinyapps.io/GageRR/", // Please replace with actual link
    linkType: "website"
  },
  {
    title: "BNN Auto-injector Prediction",
    role: "Intern Project @ SHL Medical",
    period: "Internship",
    description: "Implemented a Bayesian Neural Network to predict injection times. The model quantifies uncertainty based on drug viscosity, volume, and mechanical spring properties, aiding in risk assessment.",
    techStack: ["Python", "Bayesian NN", "Mechanical Analysis"],
    category: "AI",
    link: "https://example.com/bnn-injector", // Please replace with actual link
    linkType: "website"
  },
  {
    title: "BudgetAI",
    role: "Full Stack Developer",
    period: "Senior Year",
    description: "An AI-powered bookkeeping application designed for the 'Programming and Web Data Collection' course. Features multi-modal expense recording (text, voice, image) and location-based restaurant recommendations.",
    techStack: ["React", "AI Integration", "Geolocation", "Data Visualization"],
    category: "Software",
    link: "https://example.com/budget-ai", // Please replace with actual link
    linkType: "website"
  },
  {
    title: "Anti-fraud LINE Chatbot",
    role: "AI Developer",
    period: "Senior Year",
    description: "Awarded 3rd Place in the 2025 International Generative AI Innovative Application Competition. Developed a chatbot to detect and prevent fraud within the LINE messaging platform.",
    techStack: ["GenAI", "Chatbot", "Python"],
    category: "AI"
  },
  {
    title: "Wind-Powered Vehicle",
    role: "Team Leader",
    period: "Junior Year",
    description: "Led a 5-member team to design a vehicle powered solely by wind energy. Responsible for embedded control system design using Arduino and engineering drawings.",
    techStack: ["Arduino", "Embedded Systems", "CAD", "Leadership"],
    category: "Engineering",
    link: "/car.mp4", // Please replace with actual link
    linkType: "video"
  }
];

const PROJECTS_ZH: Project[] = [
  {
    title: "Gage R&R 分析工具",
    role: "實習專案 @ 瑞健醫療",
    period: "實習期間",
    description: "使用 R 語言開發的統計分析工具，旨在取代 Minitab。功能包含自動化數據處理、互動式圖表視覺化，以及生成用於品質控制的 PDF 報告。",
    techStack: ["R Language", "Data Visualization", "Statistics", "Automation"],
    category: "Software",
    link: "https://pcng.shinyapps.io/GageRR/", // Please replace with actual link
    linkType: "website"
  },
  {
    title: "自動注射器 BNN 預測模型",
    role: "實習專案 @ 瑞健醫療",
    period: "實習期間",
    description: "實作貝式神經網絡 (BNN) 以預測注射時間。該模型可根據藥物黏度、體積及機械彈簧特性量化預測的不確定性，協助進行風險評估。",
    techStack: ["Python", "Bayesian NN", "Mechanical Analysis"],
    category: "AI",
    link: "https://example.com/bnn-injector", // Please replace with actual link
    linkType: "website"
  },
  {
    title: "BudgetAI 智慧記帳助手",
    role: "全端開發者",
    period: "大四",
    description: "為「程式設計與網路資料蒐集」課程設計的 AI 記帳應用程式。支援文字、語音及影像等多模態記帳，並根據消費習慣與預算推薦附近餐廳及提供支出分析。",
    techStack: ["React", "AI Integration", "Geolocation", "Data Visualization"],
    category: "Software",
    link: "https://example.com/budget-ai", // Please replace with actual link
    linkType: "website"
  },
  {
    title: "防詐騙 LINE 聊天機器人",
    role: "AI 開發者",
    period: "大四",
    description: "參與 AI Club 專案團隊，於「2025 生成式 AI 創新應用競賽」獲得第三名。開發用於偵測與預防詐騙訊息的 LINE 聊天機器人。",
    techStack: ["GenAI", "Chatbot", "Python"],
    category: "AI"
  },
  {
    title: "風力驅動車",
    role: "組長",
    period: "大三",
    description: "帶領五人小組設計僅依靠風能驅動的小車。負責任務分配、部分工程製圖，以及使用 Arduino 進行完整的嵌入式控制系統設計。",
    techStack: ["Arduino", "Embedded Systems", "CAD", "Leadership"],
    category: "Engineering",
    link: "/car.mp4", // Please replace with actual link
    linkType: "video"
  }
];

// Skills usually don't need heavy translation for names, but categories might.
const SKILLS_EN: Skill[] = [
  { name: "Mechanical Design", level: 85, category: "Engineering" },
  { name: "Control Systems (PID)", level: 90, category: "Engineering" },
  { name: "React / Frontend", level: 50, category: "Software" },
  { name: "R Language", level: 50, category: "Software" },
  { name: "Python / AI / ML", level: 85, category: "AI" },
  { name: "Arduino", level: 85, category: "Hardware" },
  { name: "English", level: 95, category: "Language" },
  { name: "Chinese", level: 100, category: "Language" },
  { name: "Malay", level: 90, category: "Language" },
];

const SKILLS_ZH: Skill[] = [
  { name: "機械設計 (Mechanical Design)", level: 85, category: "工程 (Engineering)" },
  { name: "自動控制 (Control Systems)", level: 90, category: "工程 (Engineering)" },
  { name: "React / 前端開發", level: 50, category: "軟體 (Software)" },
  { name: "R 語言", level: 50, category: "軟體 (Software)" },
  { name: "Python / AI / ML", level: 85, category: "人工智慧 (AI)" },
  { name: "Arduino", level: 85, category: "硬體 (Hardware)" },
  { name: "英文", level: 95, category: "語言 (Language)" },
  { name: "中文", level: 100, category: "語言 (Language)" },
  { name: "馬來文", level: 90, category: "語言 (Language)" },
];

const UI_EN = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills'
  },
  headings: {
    about: 'About Me',
    languages: 'Languages',
    education: 'Education',
    experience: 'Experience & Research',
    experienceSubtitle: 'My professional journey in Engineering and R&D.',
    projects: 'Featured Projects',
    projectsSubtitle: 'Selected works from academic and internship experiences.',
    skills: 'Technical Skills',
    skillsSubtitle: 'A balanced skillset spanning mechanical engineering fundamentals, modern software development, and advanced AI methodologies.',
    skillsStats: {
      years: 'Years Engineering',
      projects: 'Major Projects'
    }
  },
  chat: {
    greeting: "Hi! I'm an AI assistant trained on this portfolio. Ask me anything about my research, projects, or background!",
    placeholder: "Ask about my resume...",
    title: "AI Assistant",
    error: "Sorry, I encountered an error. Please try again later."
  },
  footer: {
    rights: "NTU Mechanical Engineering Student. All rights reserved.",
    powered: "Powered by React, Tailwind & Gemini AI"
  }
};

const UI_ZH = {
  nav: {
    about: '關於我',
    experience: '經歷',
    projects: '專案',
    skills: '技能'
  },
  headings: {
    about: '關於我',
    languages: '語言能力',
    education: '學歷',
    experience: '工作與研究經歷',
    experienceSubtitle: '我在工程領域與研發方面的專業歷程。',
    projects: '精選專案',
    projectsSubtitle: '學術研究與實習期間的代表性作品。',
    skills: '專業技能',
    skillsSubtitle: '兼具機械工程基礎、現代軟體開發以及先進 AI 方法論的綜合技能組合。',
    skillsStats: {
      years: '年 工程經驗',
      projects: '項 主要專案'
    }
  },
  chat: {
    greeting: "你好！我是專為此作品集訓練的 AI 助理。歡迎詢問關於我的研究、專案或背景的任何問題！",
    placeholder: "詢問關於履歷的問題...",
    title: "AI 助理",
    error: "抱歉，發生錯誤，請稍後再試。"
  },
  footer: {
    rights: "國立臺灣大學機械工程學系學生。保留所有權利。",
    powered: "由 React, Tailwind 與 Gemini AI 驅動"
  }
};

export const CONTENT = {
  en: {
    profile: PROFILE_EN,
    education: EDUCATION_EN,
    experience: EXPERIENCE_EN,
    projects: PROJECTS_EN,
    skills: SKILLS_EN,
    ui: UI_EN
  },
  zh: {
    profile: PROFILE_ZH,
    education: EDUCATION_ZH,
    experience: EXPERIENCE_ZH,
    projects: PROJECTS_ZH,
    skills: SKILLS_ZH,
    ui: UI_ZH
  }
};

export const SYSTEM_INSTRUCTION = `
You are an AI assistant representing a talented Mechanical Engineering student from National Taiwan University (class of 2026).
Your goal is to answer questions about their background, skills, and projects based on the following context.
Be professional, enthusiastic, and concise.

Context:
- Name: (Implicitly the Portfolio Owner)
- Education: NTU Mechanical Engineering, GPA 3.91 (Top 18%).
- Relevant Coursework: Engineering Graphics, Computer-Aided Engineering Graphics, Programming, Automatic Control, Electrical Engineering.
- Languages: Chinese (Native), English (Fluent), Malay (Fluent).
- Key Internships: SHL Medical (Gage R&R app in R, BNN for auto-injectors).
- Research: Robotic Catheterization PID Control (Genetic Algo -> PSO -> Neural Network adaptive tuning).
- Projects: Wind-powered vehicle (Arduino, Team Lead), Anti-fraud LINE Chatbot (3rd place), BudgetAI (AI bookkeeping).
- Skills: React, Python, R, Arduino, PID Control, Neural Networks (FNN, BNN).

If asked about contact info, refer them to the contact section or email pinchuen090@gmail.com.
`;