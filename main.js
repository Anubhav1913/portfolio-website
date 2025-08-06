document.addEventListener('DOMContentLoaded', function() {
    const skills = {
        "Languages": ["Python", "SQL", "R", "Dart"],
        "Frameworks & Libraries": ["Hugging Face Transformers", "Keras", "OpenCV", "spaCy", "PyTorch", "Scikit-learn"],
        "Platforms & Tools": ["Snowflake", "Docker", "Digital Ocean", "Power BI", "Tableau", "Git", "Jupyter"]
    };

    const projects = [
    {
        id: 1,
        title: "Real-Time Multimodal Depression Detection",
        category: "research",
        summary: "Enhanced detection accuracy by integrating audio, visual, and textual data.",
        imageUrl: "https://images.unsplash.com/photo-1530305408560-82d13781b33a?q=80&w=2072&auto=format&fit=crop",
        keyResult: "Enhanced Depression Detection Accuracy and Reliability by Integrating Audio, Visual, and Textual Data",
        challenge: "Traditional methods for detecting signs of depression often rely on a single data source, leading to incomplete assessments. The challenge was to develop a more robust, real-time system by simultaneously analyzing voice, facial expressions, and speech content.",
        approach: `As a researcher on this project, my primary goal was to architect and implement a machine learning system that could effectively fuse these disparate data streams into a single, coherent prediction. My approach was grounded in applying advanced statistics and principles of epidemiology to ensure the model was not only accurate but also trustworthy and robust.
        <br><br>
        <ol class="list-decimal list-inside space-y-2 mt-4">
            <li><b>Audio Feature Engineering:</b> Leveraged Mel-Frequency Cepstral Coefficients (MFCCs) to extract distinctive features from speech patterns, capturing tone and intonation.</li>
            <li><b>Visual Feature Extraction:</b> Implemented a Convolutional Neural Network (CNN) to perform facial feature extraction, identifying subtle micro-expressions and facial cues.</li>
            <li><b>Textual Data Vectorization:</b> Utilized Term Frequency-Inverse Document Frequency (TF-IDF) to vectorize transcribed speech, identifying statistically significant words and phrases.</li>
        </ol>
        <br>My core contribution was integrating these three distinct feature sets into a unified model, requiring careful data synchronization and normalization. I was also responsible for all team communication and authoring comprehensive technical documentation.`,
        stack: ["Python", "Keras", "Scikit-learn", "OpenCV", "Librosa", "Machine Learning", "Deep Learning (CNNs)", "NLP"],
        visual: `<h4 class="font-bold text-lg mb-4">Conceptual System Diagram</h4><div class="bg-slate-50 border border-slate-200 rounded-lg p-6 text-sm text-center">This diagram illustrates the flow of data from raw audio, video, and text inputs through their respective processing modules (MFCC, CNN, TF-IDF) before being fused into a final prediction layer.</div>`,
        link: null
    },
    {
        id: 2,
        title: "Scalable Customer Analytics Infrastructure",
        category: "data",
        summary: "Architected a data pipeline that cut reporting time by 87%.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        keyResult: "Reduced Report Generation Time by 87% and Achieved 99.5% Data Processing Reliability",
        challenge: "A growing enterprise struggled with fragmented data across four systems. Generating customer reports was a manual, 2-hour process, hindering timely decision-making. The goal was to build an automated, scalable data infrastructure to unify data and provide real-time BI.",
        approach: `My role was to architect and lead the implementation of a new, automated data processing system. I designed the solution from the ground up, focusing on reliability, scalability, and performance.
        <br><br>
        <ol class="list-decimal list-inside space-y-2 mt-4">
            <li><b>Automated ELT Pipeline:</b> I architected a fully automated ELT pipeline using Python and Snowflake Tasks to process over 5GB of daily data with 99.5% reliability, eliminating manual work.</li>
            <li><b>Three-Tier Data Architecture:</b> I designed a comprehensive 3-tier architecture in Snowflake (Raw, Staging, Analytics) to ensure data quality and analytical flexibility, which was key to reducing report time from 2 hours to 15 minutes.</li>
            <li><b>Enterprise-Grade Scalability:</b> I engineered the infrastructure for future growth with strategic table clustering, automated data validation, and optimized stored procedures, enabling it to handle a 300% increase in data volume.</li>
        </ol>`,
        stack: ["Snowflake", "Python", "SQL", "Data Architecture", "ELT Pipelines", "Business Intelligence"],
        visual: `<h4 class="font-bold text-lg mb-4">3-Tier Data Architecture Diagram</h4>
        <div class="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4 flex flex-col items-center">
            <div class="font-semibold">Source Systems (CRM, E-comm, etc.)</div>
            <div class="text-2xl text-slate-400">&darr;</div>
            <div class="w-full md:w-3/4 bg-blue-100 border-2 border-dashed border-blue-400 p-3 rounded-lg text-center">
                <h5 class="font-bold">Raw Tier</h5>
                <p class="text-sm text-blue-800">Ingests raw, unaltered data</p>
            </div>
            <div class="text-2xl text-slate-400">&darr;</div>
            <div class="w-full md:w-3/4 bg-green-100 border-2 border-dashed border-green-400 p-3 rounded-lg text-center">
                <h5 class="font-bold">Staging Tier</h5>
                <p class="text-sm text-green-800">Cleans, standardizes, and prepares data</p>
            </div>
            <div class="text-2xl text-slate-400">&darr;</div>
            <div class="w-full md:w-3/4 bg-purple-100 border-2 border-dashed border-purple-400 p-3 rounded-lg text-center">
                <h5 class="font-bold">Analytics Tier</h5>
                <p class="text-sm text-purple-800">Houses final, consolidated data marts</p>
            </div>
             <div class="text-2xl text-slate-400">&darr;</div>
             <div class="font-semibold">BI Tools (Tableau, Power BI)</div>
        </div>`,
        link: null
    },
    {
        id: 3,
        title: "Case Study: LLM Optimization at Outlier",
        category: "ai",
        summary: "Streamlined prompt engineering by 30% and increased relevance by 20%.",
        imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
        keyResult: "Streamlined Prompt Engineering by 30% & Increased Output Relevance by 20%",
        challenge: "The process of developing and testing prompts for large language models (LLMs) was manual and time-consuming. There was a need to automate testing, improve model performance, and reduce bias in AI-generated text.",
        approach: `I utilized Python and NLP frameworks like Hugging Face Transformers and the OpenAI API to build a system for automating prompt testing and data analysis. This streamlined the entire prompt engineering workflow by 30%. By developing a rigorous framework for testing and refining prompts, I enhanced model performance, leading to a 20% increase in output relevance. A key part of my work was the meticulous evaluation and ranking of model responses for quality, factuality, and relevance, which provided detailed feedback for continuous improvement and reduced model bias by 15%.`,
        stack: ["Python", "NLP", "Hugging Face Transformers", "OpenAI API", "LLM Optimization"],
        visual: `<h4 class="font-bold text-lg mb-4">Process Flow</h4><div class="bg-slate-50 border border-slate-200 rounded-lg p-6 text-sm text-center">This project involved a cyclical process: 1. Develop Prompts -> 2. Automate Testing -> 3. Evaluate Responses -> 4. Refine Prompts -> Repeat.</div>`,
        link: null
    },
    {
        id: 4,
        title: "2D/3D Human Pose Estimation (Best Paper)",
        category: "research",
        summary: "Engineered an award-winning deep learning pipeline for pose estimation.",
        imageUrl: "https://images.unsplash.com/photo-1599493356234-31075a443da8?q=80&w=1974&auto=format&fit=crop",
        keyResult: "Engineered a Novel Deep Learning Pipeline Selected as a Best Paper at AICTC 2021",
        challenge: "Estimating a full 3D human pose from a single 2D image is a difficult computer vision problem due to depth ambiguity and occlusions. The goal was to develop a novel deep learning pipeline to accurately reconstruct 3D poses while minimizing keypoint re-projection loss.",
        approach: `I led this research project through its entire lifecycle. The core of my contribution was engineering an end-to-end deep learning pipeline that integrated several specialized networks to jointly regress both 2D and 3D joint positions in real-time. This created a feedback loop that improved the accuracy of both tasks simultaneously. A significant part of this project was the rigorous analysis, meticulous documentation, and scientific writing required for publication, which was a key factor in the paper's acceptance and selection as a best paper at the conference.`,
        stack: ["Python", "PyTorch", "Keras", "OpenCV", "Deep Learning", "Computer Vision", "Scientific Writing"],
        visual: `<h4 class="font-bold text-lg mb-4">Visual Abstract</h4><div class="bg-slate-50 border border-slate-200 rounded-lg p-6 text-sm text-center">The system takes a 2D RGB image as input and passes it through a fully-convolutional network to output a reconstructed 3D skeletal pose.</div>`,
        link: { text: "View Publication", url: "https://ieeexplore.ieee.org/document/9562611" }
    },
     {
        id: 5,
        title: "Cancer Cell Classification",
        category: "research",
        summary: "Developed a deep learning model to classify cancer cells with high accuracy.",
        imageUrl: "https://images.unsplash.com/photo-1579154286823-3c2d16345c33?q=80&w=1974&auto=format&fit=crop",
        keyResult: "Achieved 18% Higher Accuracy than Baseline in Cancer Cell Classification",
        challenge: "Accurately classifying different types of cancer cells from medical images is a critical but challenging task for pathologists. The objective was to build a deep learning model that could automate this process with high accuracy, serving as a reliable aid for medical professionals.",
        approach: "I developed a Convolutional Neural Network (CNN) using Keras to classify histopathological images of cancer cells. The project involved extensive data preprocessing and augmentation to create a robust training set. I experimented with various network architectures and used hyperparameter optimization techniques with Ray Tune to find the best-performing model. The final model demonstrated a significant improvement in accuracy over existing baseline methods.",
        stack: ["Python", "Keras", "Ray Tune", "OpenCV", "Deep Learning", "Image Classification"],
        visual: `<h4 class="font-bold text-lg mb-4">Model Performance</h4><div class="bg-slate-50 border border-slate-200 rounded-lg p-6 text-sm text-center">The final model's performance was evaluated using metrics like accuracy, precision, and recall, showing a clear improvement over traditional methods. A confusion matrix was used to visualize classification accuracy across different cell types.</div>`,
        link: null
    },
    {
        id: 6,
        title: "Automated Text Classification with BERT",
        category: "ai",
        summary: "Fine-tuned BERT models for automated text analysis and clustering.",
        imageUrl: "https://images.unsplash.com/photo-1583344655491-53239a759392?q=80&w=2070&auto=format&fit=crop",
        keyResult: "Improved Text Classification Accuracy by 18% with Fine-Tuned BERT",
        challenge: "Manually classifying and organizing large volumes of text documents is inefficient and prone to error. The project aimed to automate this process by leveraging a state-of-the-art language model to classify text and identify key data clusters for research.",
        approach: "I fine-tuned a pre-trained BERT model on a custom dataset to perform text classification. This involved setting up a robust data pipeline, handling class imbalances, and optimizing the model's hyperparameters. I then applied clustering algorithms to the model's output embeddings to identify latent topics within the data. The solution significantly improved classification accuracy and provided valuable insights for epidemiology research.",
        stack: ["Python", "Hugging Face Transformers", "PyTorch", "Scikit-learn", "NLP", "BERT"],
        visual: `<h4 class="font-bold text-lg mb-4">Clustering Visualization</h4><div class="bg-slate-50 border border-slate-200 rounded-lg p-6 text-sm text-center">Using techniques like t-SNE, the high-dimensional text embeddings were visualized in 2D space, revealing distinct clusters of related documents.</div>`,
        link: null
    }
];


    const callGeminiAPI = async (prompt) => {
        const apiKey = ""; 
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
        
        const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };

        let attempts = 0;
        const maxAttempts = 5;
        const initialDelay = 1000;

        while (attempts < maxAttempts) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                const result = await response.json();
                
                if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
                    return result.candidates[0].content.parts[0].text;
                } else {
                    throw new Error("Invalid response structure from Gemini API");
                }
            } catch (error) {
                attempts++;
                if (attempts >= maxAttempts) {
                    console.error("Gemini API call failed after multiple retries:", error);
                    return "Sorry, I couldn't generate a response at this time. Please try again later.";
                }
                const delay = initialDelay * Math.pow(2, attempts);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    };
    
    const loadComponents = () => {
        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');

        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = `
                <div class="container mx-auto px-6 py-4 flex justify-between items-center relative">
                    <a href="index.html" class="text-xl font-bold tracking-tight text-slate-900">Anubhav Bhattacharya</a>
                    <nav class="hidden md:flex items-center space-x-8">
                        <a href="index.html" class="nav-link text-slate-700 hover:text-blue-600 font-medium">Home</a>
                        <a href="about.html" class="nav-link text-slate-700 hover:text-blue-600 font-medium">About</a>
                        <a href="portfolio.html" class="nav-link text-slate-700 hover:text-blue-600 font-medium">Portfolio</a>
                        <a href="contact.html" class="nav-link text-slate-700 hover:text-blue-600 font-medium">Contact</a>
                    </nav>
                    <button id="mobile-menu-btn" class="md:hidden text-slate-700">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                    <div id="mobile-menu" class="absolute top-full left-0 w-full hidden md:hidden bg-white shadow-lg border-t border-slate-200">
                        <a href="index.html" class="block py-3 px-6 text-slate-700 hover:bg-slate-50">Home</a>
                        <a href="about.html" class="block py-3 px-6 text-slate-700 hover:bg-slate-50">About</a>
                        <a href="portfolio.html" class="block py-3 px-6 text-slate-700 hover:bg-slate-50">Portfolio</a>
                        <a href="contact.html" class="block py-3 px-6 text-slate-700 hover:bg-slate-50">Contact</a>
                    </div>
                </div>
            `;
        }

        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = `
                <div class="bg-white py-8 border-t border-slate-200">
                    <div class="container mx-auto px-6 text-center text-slate-500">
                        <p>&copy; <span id="year">${new Date().getFullYear()}</span> Anubhav Bhattacharya. All Rights Reserved.</p>
                    </div>
                </div>
            `;
        }
    };

    const setupMobileMenu = () => {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                mobileMenu.classList.toggle('hidden');
            });
        }
        document.addEventListener('click', (event) => {
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            if (mobileMenu && !mobileMenu.classList.contains('hidden') && !mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    };

    const setActiveNav = () => {
        const navLinks = document.querySelectorAll('nav .nav-link, #mobile-menu a');
        let currentPath = window.location.pathname.split('/').pop();
        if (currentPath === '') currentPath = 'index.html';
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop();
            if (linkPath === currentPath) {
                link.classList.add('active');
            }
        });
    };

    const initAboutPage = () => {
        const skillsContainer = document.getElementById('skills-container');
        if (!skillsContainer) return;

        for (const category in skills) {
            let skillsHtml = `<div class="flex flex-col sm:flex-row items-center gap-4"><h4 class="font-semibold text-lg text-slate-800 w-full sm:w-1/4 text-center sm:text-right">${category}</h4><div class="flex flex-wrap justify-center sm:justify-start gap-2 w-full sm:w-3/4">`;
            skills[category].forEach(skill => {
                skillsHtml += `<span class="bg-slate-200 text-slate-800 text-sm font-medium px-3 py-1 rounded-full">${skill}</span>`;
            });
            skillsHtml += `</div></div>`;
            skillsContainer.innerHTML += skillsHtml;
        }
    };

    const initPortfolioPage = () => {
        const portfolioGrid = document.getElementById('portfolio-grid');
        if (!portfolioGrid) return;

        // --- FIX STARTS HERE ---
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card-visual group relative rounded-xl overflow-hidden shadow-md cursor-pointer h-80';
            projectCard.dataset.category = project.category;
            projectCard.dataset.projectId = project.id;
            
            projectCard.style.backgroundImage = `url('${project.imageUrl}')`;

            projectCard.innerHTML = `
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-6 text-white">
                    <h3 class="font-bold text-xl mb-1">${project.title}</h3>
                    <p class="text-sm opacity-80">${project.summary}</p>
                </div>
            `;
            portfolioGrid.appendChild(projectCard);
        });
        // --- FIX ENDS HERE ---

        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card-visual');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filter = button.dataset.filter;
                projectCards.forEach(card => {
                    card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
                });
            });
        });

        const modal = document.getElementById('project-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        const modalCloseBtn = document.getElementById('modal-close-btn');
        const modalContent = modal.querySelector('.modal-content');

        portfolioGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card-visual');
            if (card) {
                const projectId = parseInt(card.dataset.projectId);
                const project = projects.find(p => p.id === projectId);
                if (project) {
                    modalTitle.textContent = project.title;
                    let bodyHtml = `
                        <p class="text-lg font-semibold text-blue-600 mb-6">${project.keyResult}</p>
                        <div class="space-y-8 text-slate-600 leading-relaxed">
                            <div>
                                <h4 class="font-bold text-xl mb-2 text-slate-900">The Challenge</h4>
                                <p>${project.challenge}</p>
                            </div>
                            <div>
                                <h4 class="font-bold text-xl mb-2 text-slate-900">My Approach & Contribution</h4>
                                <div>${project.approach}</div>
                            </div>
                            <div>
                                <h4 class="font-bold text-xl mb-2 text-slate-900">Technical Stack</h4>
                                <div class="flex flex-wrap gap-2">
                                    ${project.stack.map(tech => `<span class="bg-slate-200 text-slate-800 text-sm font-medium px-3 py-1 rounded-full">${tech}</span>`).join('')}
                                </div>
                            </div>
                            ${project.visual ? `<div>${project.visual}</div>` : ''}
                            <div class="flex items-center gap-4 flex-wrap pt-4 border-t border-slate-200">
                                ${project.link ? `<a href="${project.link.url}" target="_blank" rel="noopener noreferrer" class="inline-block bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-all">View Publication</a>` : ''}
                                <button id="explain-project-btn" data-project-id="${project.id}" class="inline-flex items-center gap-2 text-blue-600 font-bold py-2 px-5 rounded-lg hover:bg-blue-50 transition-colors">
                                    ✨ Explain in Simple Terms
                                </button>
                            </div>
                            <div id="project-explanation-output" class="bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-700 leading-relaxed hidden mt-4"></div>
                        </div>
                    `;
                    modalBody.innerHTML = bodyHtml;
                    
                    modal.classList.remove('opacity-0', 'pointer-events-none');
                    modal.classList.add('modal-active');
                    if (modalContent) {
                        modalContent.classList.remove('opacity-0');
                    }
                    
                    document.body.style.overflow = 'hidden';
                }
            }
        });

        modalBody.addEventListener('click', async (e) => {
            const button = e.target.closest('#explain-project-btn');
            if (button) {
                const projectId = parseInt(button.dataset.projectId);
                const project = projects.find(p => p.id === projectId);
                const outputDiv = document.getElementById('project-explanation-output');

                button.disabled = true;
                button.innerHTML = '<span class="spinner ai-assistant-btn"></span> Generating...';
                outputDiv.classList.remove('hidden');
                outputDiv.textContent = 'Thinking...';

                const prompt = `You are an expert at explaining complex technical projects to a non-technical audience (like a recruiter or manager). Your task is to summarize the following project in 2-3 simple sentences. Focus on the business problem and the value of the solution. Avoid jargon.
                
                Project Title: ${project.title}
                The Challenge: ${project.challenge}
                My Approach: ${project.approach}
                
                Generate a simple explanation:`;
                
                const explanation = await callGeminiAPI(prompt);
                outputDiv.innerHTML = explanation.replace(/\n/g, '<br>');
                button.innerHTML = '✨ Explanation Generated';
            }
        });

        const closeModal = () => {
            if(modal) {
                modal.classList.add('opacity-0', 'pointer-events-none');
                modal.classList.remove('modal-active');
                if (modalContent) {
                    modalContent.classList.add('opacity-0');
                }
                document.body.style.overflow = '';
            }
        };

        if(modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
        if(modal) modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    };

    const initContactPage = () => {
        const generateLetterBtn = document.getElementById('generate-letter-btn');
        if (!generateLetterBtn) return;

        const jobDescriptionInput = document.getElementById('job-description');
        const coverLetterOutput = document.getElementById('cover-letter-output');
        const btnText = document.getElementById('generate-letter-btn-text');
        const btnSpinner = document.getElementById('generate-letter-spinner');

        generateLetterBtn.addEventListener('click', async () => {
            const jobDesc = jobDescriptionInput.value;
            if (!jobDesc.trim()) {
                coverLetterOutput.classList.remove('hidden');
                coverLetterOutput.textContent = "Please paste a job description first.";
                return;
            }

            generateLetterBtn.disabled = true;
            btnText.textContent = 'Generating...';
            btnSpinner.classList.remove('hidden');
            coverLetterOutput.classList.remove('hidden');
            coverLetterOutput.textContent = 'Analyzing your job description and my profile...';

            const skillsSummary = JSON.stringify(skills);
            const projectsSummary = projects.map(p => `Title: ${p.title}, Summary: ${p.summary}, Stack: ${p.stack.join(', ')}`).join('\n');

            const prompt = `You are a professional career assistant helping a candidate named Anubhav Bhattacharya. Your task is to write a concise, impactful paragraph for a cover letter.
            
            Here is Anubhav's profile:
            Skills: ${skillsSummary}
            Projects: 
            ${projectsSummary}

            Here is the Job Description provided by a recruiter:
            ---
            ${jobDesc}
            ---

            Based on the job description, analyze Anubhav's profile and write one strong paragraph (3-5 sentences) that a recruiter can use in a cover letter. The paragraph should highlight the most relevant skills and project experiences that match the job requirements. Start with a strong opening that connects his experience directly to the role. Be confident and professional.`;

            const letterSnippet = await callGeminiAPI(prompt);
            coverLetterOutput.innerHTML = letterSnippet.replace(/\n/g, '<br>');

            generateLetterBtn.disabled = false;
            btnText.textContent = 'Generate Snippet';
            btnSpinner.classList.add('hidden');
        });
    };

    // --- Main Initialization Logic ---
    loadComponents();
    setupMobileMenu();
    setActiveNav();

    const path = window.location.pathname;
    const currentPage = path.substring(path.lastIndexOf('/') + 1);

    if (currentPage === 'about.html') {
        initAboutPage();
    } else if (currentPage === 'portfolio.html' || currentPage === '' || currentPage.startsWith('index.html')) {
        initPortfolioPage();
    } else if (currentPage === 'contact.html') {
        initContactPage();
    }
});
