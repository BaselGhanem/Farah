
// Experience Data
const experiences = [
    {
        date: '2022 – 2025',
        role: 'HR Officer',
        company: 'Al-Lewan Constructive',
        desc: 'Led full-cycle HR operations with an emphasis on payroll accuracy, performance metrics, and social security integration. Provided strategic support for labor relations and policy enforcement.'
    },
    {
        date: '2018 – 2021',
        role: 'Assistant Officer',
        company: 'Tusker Apparel Ltd.',
        desc: 'Coordinated workforce recruitment and onboarding. Streamlined attendance systems and acted as a primary liaison for labor regulation compliance in a fast-paced environment.'
    }
];

// Skills Data
const skillCollections = [
    {
        title: 'Operational HR',
        skills: ['Recruitment Lifecycle', 'Policy Dev', 'Relations', 'Mediation']
    },
    {
        title: 'Compliance & Legal',
        skills: ['Social Security', 'Labor Laws', 'Payroll', 'Contracts']
    },
    {
        title: 'Technical Arsenal',
        skills: ['Odoo & Kayan', 'Advanced Excel', 'Multilingual', 'Safety Mgmt']
    }
];

// Initialize Content
document.addEventListener('DOMContentLoaded', () => {
    renderExperience();
    renderSkills();
    updateLocalTime();
    setInterval(updateLocalTime, 60000);
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    const navLinksContainer = document.querySelector('.nav-links-container');
    const floatingCv = document.getElementById('floating-cv');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 50;
        
        if (scrolled) {
            navbar.classList.add('nav-scrolled');
            navLinksContainer.classList.add('nav-links-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
            navLinksContainer.classList.remove('nav-links-scrolled');
        }

        // Floating CV visibility
        if (window.scrollY > 500) {
            floatingCv.classList.remove('opacity-0', 'translate-y-20');
        } else {
            floatingCv.classList.add('opacity-0', 'translate-y-20');
        }
    });

    // Copy Email Functionality
    const copyBtn = document.getElementById('copy-email');
    const copyToast = document.getElementById('copy-toast');

    copyBtn.addEventListener('click', () => {
        const email = "farahasbeh@yahoo.com";
        navigator.clipboard.writeText(email).then(() => {
            copyToast.classList.remove('opacity-0');
            setTimeout(() => copyToast.classList.add('opacity-0'), 2000);
        });
    });
});

function renderExperience() {
    const container = document.getElementById('experience-list');
    container.innerHTML = experiences.map((exp, i) => `
        <div class="group grid md:grid-cols-[150px_1fr] gap-12 py-12 border-t border-stone-800 hover:bg-white/[0.01] transition-colors">
            <div class="text-stone-500 font-display italic text-xl">${exp.date}</div>
            <div>
                <div class="flex items-center gap-4 mb-4">
                    <h3 class="text-2xl font-bold text-stone-100">${exp.role}</h3>
                    <div class="h-px flex-1 bg-stone-800 group-hover:bg-rose-900/30 transition-colors"></div>
                    <span class="text-xs uppercase tracking-widest text-rose-400 font-bold">${exp.company}</span>
                </div>
                <p class="text-stone-400 leading-relaxed font-light max-w-2xl">${exp.desc}</p>
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-grid');
    container.innerHTML = skillCollections.map((col, i) => `
        <div class="bg-[#0c0a09] p-12 hover:bg-stone-950 transition-colors group">
            <h3 class="font-display text-3xl mb-8 text-stone-200 group-hover:text-rose-300 transition-colors">${col.title}</h3>
            <div class="space-y-4">
                ${col.skills.map(skill => `
                    <div class="flex items-center gap-3">
                        <div class="w-1 h-1 rounded-full bg-rose-500"></div>
                        <span class="text-xs uppercase tracking-[0.1em] text-stone-500 font-semibold">${skill}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function updateLocalTime() {
    const timeDisplay = document.getElementById('local-time');
    const now = new Date();
    const options = { 
        timeZone: 'Asia/Amman', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    };
    const timeString = now.toLocaleTimeString('en-US', options);
    timeDisplay.innerText = `${timeString} AST`;
}
