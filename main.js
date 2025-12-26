// --- Configuration ---
const API_KEY = ""; // User should add their API key here or we can use a mock

// --- Utility Functions ---

const getTechIcon = (tech) => {
    const lowerTech = tech.toLowerCase();
    if (lowerTech.includes('aws')) return '<i class="devicon-amazonwebservices-plain-wordmark text-lg"></i>';
    if (lowerTech.includes('terraform')) return '<i class="devicon-terraform-plain text-lg"></i>';
    if (lowerTech.includes('docker')) return '<i class="devicon-docker-plain text-lg"></i>';
    if (lowerTech.includes('kubernetes') || lowerTech.includes('k8s')) return '<i class="devicon-kubernetes-plain text-lg"></i>';
    if (lowerTech.includes('jenkins')) return '<i class="devicon-jenkins-line text-lg"></i>';
    if (lowerTech.includes('gitlab')) return '<i class="devicon-gitlab-plain text-lg"></i>';
    if (lowerTech.includes('postgres')) return '<i class="devicon-postgresql-plain text-lg"></i>';
    if (lowerTech.includes('mongo')) return '<i class="devicon-mongodb-plain text-lg"></i>';
    if (lowerTech.includes('prometheus')) return '<i class="devicon-prometheus-original text-lg"></i>';
    if (lowerTech.includes('grafana')) return '<i class="devicon-grafana-original text-lg"></i>';
    if (lowerTech.includes('bash') || lowerTech.includes('scripting')) return '<i class="devicon-bash-plain text-lg"></i>';
    if (lowerTech.includes('linux')) return '<i class="devicon-linux-plain text-lg"></i>';
    if (lowerTech.includes('ansible')) return '<i class="devicon-ansible-plain text-lg"></i>';
    if (lowerTech.includes('python')) return '<i class="devicon-python-plain text-lg"></i>';
    if (lowerTech.includes('react')) return '<i class="devicon-react-original text-lg"></i>';

    if (lowerTech.includes('database') || lowerTech.includes('db')) return '<i data-lucide="database" class="w-4 h-4"></i>';
    if (lowerTech.includes('optimization') || lowerTech.includes('performance')) return '<i data-lucide="zap" class="w-4 h-4"></i>';
    if (lowerTech.includes('cloud')) return '<i data-lucide="cloud" class="w-4 h-4"></i>';
    if (lowerTech.includes('web')) return '<i data-lucide="globe" class="w-4 h-4"></i>';
    if (lowerTech.includes('server')) return '<i data-lucide="server" class="w-4 h-4"></i>';

    return '<i data-lucide="terminal" class="w-4 h-4"></i>';
};

const getRoleIcon = (role, company) => {
    const r = role.toLowerCase();
    const c = company.toLowerCase();
    if (r.includes('devops')) return 'cloud';
    if (c.includes('intouch')) return 'gamepad-2';
    if (c.includes('24/7')) return 'headset';
    return 'database';
};

// --- Rendering Functions ---

const renderExperience = () => {
    const container = document.getElementById('experience-list');
    if (!container || !window.EXPERIENCE) return;

    window.EXPERIENCE.forEach((job, index) => {
        const iconName = getRoleIcon(job.role, job.company);
        const card = document.createElement('div');
        card.className = `relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start w-full group perspective-1000`;

        card.innerHTML = `
            <div class="hidden md:block absolute top-10 h-[2px] w-[calc(50%-2rem)] bg-slate-800/50 ${index % 2 === 0 ? 'left-1/2 -translate-x-full pr-12' : 'left-1/2 pl-12'} z-0">
                 <svg class="absolute top-0 w-full h-10 overflow-visible" style="${index % 2 === 0 ? 'right' : 'left'}: 0">
                    <path d="${index % 2 === 0 ? 'M 100% 0 L 50% 0 L 0 40' : 'M 0 0 L 50% 0 L 100% 40'}" fill="none" stroke="#1e293b" stroke-width="2" class="group-hover:stroke-cyan-500/50 transition-colors duration-500"/>
                    <circle cx="${index % 2 === 0 ? '0' : '100%'}" cy="40" r="3" fill="#06b6d4" class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300" />
                </svg>
            </div>
            <div class="absolute left-[28px] md:left-1/2 transform -translate-x-1/2 w-12 h-12 z-20 mt-4 flex items-center justify-center">
                <div class="w-full h-full bg-slate-900 rounded-full border-2 border-slate-700 group-hover:border-cyan-500 transition-all duration-300 relative flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    <div class="text-slate-500 group-hover:text-cyan-400 transition-colors">
                        <i data-lucide="${iconName}" class="w-5 h-5"></i>
                    </div>
                    <div class="absolute inset-0 border-2 border-cyan-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                </div>
            </div>
            <div class="w-full md:w-5/12 pl-16 md:pl-0 md:px-0">
                <div class="glass-card p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)] transform group-hover:-translate-y-1 relative overflow-hidden ${index % 2 === 0 ? 'text-left' : 'md:text-right'}">
                    <div class="absolute top-4 ${index % 2 === 0 ? 'right-4' : 'right-4 md:right-auto md:left-4'} flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full ${index === 0 ? 'bg-emerald-500 animate-pulse' : 'bg-slate-600'}"></div>
                        <span class="text-[10px] font-mono text-slate-500 uppercase">${index === 0 ? 'Active' : 'Completed'}</span>
                    </div>
                    <div class="absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} text-slate-800/50 opacity-10 pointer-events-none rotate-12 transform scale-150">
                        <i data-lucide="${iconName}" class="w-12 h-12"></i>
                    </div>
                    <div class="absolute top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${index % 2 === 0 ? 'left-0' : 'right-0 md:left-auto md:right-0 left-0'}"></div>
                    <h3 class="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-1 pr-16">${job.role}</h3>
                    <h4 class="text-lg text-blue-400/90 font-medium mb-5">${job.company}</h4>
                    <div class="flex flex-wrap gap-3 text-xs text-slate-400 mb-6 font-mono ${index % 2 === 0 ? '' : 'md:justify-end'}">
                        <div class="flex items-center gap-1.5 bg-slate-950/50 px-3 py-1.5 rounded border border-slate-800 group-hover:border-slate-700/80 transition-colors">
                            <i data-lucide="calendar" class="w-3.5 h-3.5 text-cyan-500"></i>
                            <span>${job.period}</span>
                        </div>
                        <div class="flex items-center gap-1.5 bg-slate-950/50 px-3 py-1.5 rounded border border-slate-800 group-hover:border-slate-700/80 transition-colors">
                            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-cyan-500"></i>
                            <span>${job.location}</span>
                        </div>
                    </div>
                    <ul class="space-y-3 relative z-10">
                        ${job.description.map(desc => `
                            <li class="text-slate-400 text-sm leading-relaxed flex items-start gap-3 ${index % 2 === 0 ? '' : 'md:flex-row-reverse md:text-right'}">
                                <span class="mt-1.5 text-cyan-500 shrink-0">
                                    <i data-lucide="chevron-right" class="w-4 h-4 ${index % 2 !== 0 ? 'md:rotate-180' : ''}"></i>
                                </span>
                                ${desc}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
};

const renderSkills = () => {
    const container = document.getElementById('skills-grid');
    if (!container || !window.SKILLS) return;

    window.SKILLS.forEach((group) => {
        const div = document.createElement('div');
        div.className = "glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]";
        div.innerHTML = `
            <h3 class="text-lg font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-800 flex justify-between items-center">${group.category}</h3>
            <div class="flex flex-wrap gap-2">
                ${group.skills.map(skill => `<span class="px-3 py-1.5 rounded-lg bg-slate-800/50 text-slate-300 text-xs font-medium border border-slate-700/50 hover:bg-cyan-950/50 hover:text-cyan-200 hover:border-cyan-500/30 transition-all cursor-default">${skill}</span>`).join('')}
            </div>
        `;
        container.appendChild(div);
    });
};

const renderProjects = () => {
    const container = document.getElementById('projects-grid');
    if (!container || !window.PROJECTS) return;

    window.PROJECTS.forEach((project, index) => {
        const div = document.createElement('div');
        div.className = `group relative glass-card p-8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)] flex flex-col h-full reveal-animation`;
        div.style.transitionDelay = `${index * 150}ms`;

        div.innerHTML = `
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute -bottom-4 -right-4 text-slate-800/50 group-hover:text-emerald-900/20 transition-colors duration-500 rotate-12 pointer-events-none">
                <i data-lucide="folder-git-2" class="w-32 h-32"></i>
            </div>
            <div class="relative z-10 flex flex-col h-full">
                <div class="flex justify-between items-start mb-6">
                    <div class="p-3 bg-slate-900/80 border border-slate-700/50 rounded-xl text-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <i data-lucide="folder-git-2" class="w-6 h-6"></i>
                    </div>
                    <div class="flex gap-2">
                        <a href="#" class="p-2 rounded-lg bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700"><i data-lucide="github" class="w-5 h-5"></i></a>
                        <a href="#" class="p-2 rounded-lg bg-slate-900/50 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700"><i data-lucide="arrow-up-right" class="w-5 h-5"></i></a>
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-4">${project.title}</h3>
                <p class="text-slate-400 text-base leading-relaxed mb-8 flex-grow">${project.description}</p>
                <div class="mt-auto">
                    <div class="flex flex-wrap gap-2">
                        ${project.techStack.map(tech => `
                            <span class="px-3 py-1.5 rounded-md bg-slate-900/80 text-slate-300 text-xs font-medium border border-slate-800 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-colors flex items-center gap-2 hover:bg-slate-800">
                                ${getTechIcon(tech)} ${tech}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
};

const renderSocialLinks = () => {
    const containers = document.querySelectorAll('.social-links-container');
    if (!window.SOCIAL_LINKS) return;
    containers.forEach(container => {
        window.SOCIAL_LINKS.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            if (link.url.startsWith('http')) { a.target = "_blank"; a.rel = "noreferrer"; }
            a.className = "p-4 rounded-full bg-slate-900/80 border border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-sm flex items-center justify-center";
            a.setAttribute('aria-label', link.platform);
            a.innerHTML = `<i data-lucide="${link.icon}" class="w-5 h-5"></i>`;
            container.appendChild(a);
        });
    });
};

// --- Radar Chart ---

const initRadarChart = () => {
    const ctx = document.getElementById('competencyRadar');
    if (!ctx) return;

    const data = {
        labels: ['Cloud (AWS)', 'CI/CD', 'K8s', 'IaC', 'Monitoring', 'Scripting'],
        datasets: [{
            label: 'Proficiency',
            data: [95, 95, 90, 85, 85, 80],
            fill: true,
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            borderColor: '#10b981',
            pointBackgroundColor: '#10b981',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#10b981',
            borderWidth: 3
        }]
    };

    new Chart(ctx, {
        type: 'radar',
        data: data,
        options: {
            scales: {
                r: {
                    angleLines: { color: '#334155' },
                    grid: { color: '#334155' },
                    pointLabels: { color: '#94a3b8', font: { size: 13, weight: '500' } },
                    ticks: { display: false, stepSize: 20 },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { backgroundColor: 'rgba(15, 23, 42, 0.95)', titleColor: '#f1f5f9', bodyColor: '#22d3ee', borderColor: '#334155', borderWidth: 1, padding: 10, cornerRadius: 8, displayColors: false }
            },
            maintainAspectRatio: false
        }
    });
};

// --- Scroll Logic ---

const handleScroll = () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-slate-950/80', 'backdrop-blur-md', 'border-b', 'border-slate-800');
        nav.classList.remove('bg-transparent');
    } else {
        nav.classList.remove('bg-slate-950/80', 'backdrop-blur-md', 'border-b', 'border-slate-800');
        nav.classList.add('bg-transparent');
    }

    const sections = ['home', 'experience', 'skills', 'projects', 'contact'];
    let current = 'home';
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= 300) { current = section; }
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-cyan-400');
        link.classList.add('text-slate-400');
        if (link.getAttribute('href') === `#${current}`) { link.classList.remove('text-slate-400'); link.classList.add('text-cyan-400'); }
    });
};

// --- Animations ---

const initAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-zoom-in');
                entry.target.classList.remove('opacity-0');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-animation').forEach(el => {
        el.classList.add('opacity-0');
        observer.observe(el);
    });
};

// --- Gemini Chat ---

let chatMessages = [{ role: 'model', text: "Hi! I'm Christo's AI assistant. Ask me anything about his DevOps experience, skills, or projects!", timestamp: new Date() }];

const toggleChat = () => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
    if (!chatWindow.classList.contains('hidden')) {
        chatWindow.classList.add('animate-fade-in-up');
        scrollToBottom();
    }
};

const scrollToBottom = () => {
    const area = document.getElementById('chat-messages-area');
    area.scrollTop = area.scrollHeight;
};

const appendMessage = (role, text) => {
    const area = document.getElementById('chat-messages-area');
    const msgDiv = document.createElement('div');
    msgDiv.className = `flex gap-3 ${role === 'user' ? 'flex-row-reverse' : ''}`;

    const icon = role === 'user' ? 'user' : 'bot';
    const bgColor = role === 'user' ? 'bg-cyan-600' : 'bg-slate-700';
    const textColor = role === 'user' ? 'text-white' : 'text-slate-200';
    const bubbleBg = role === 'user' ? 'bg-cyan-600' : 'bg-slate-800';
    const rounded = role === 'user' ? 'rounded-tr-none' : 'rounded-tl-none';

    msgDiv.innerHTML = `
        <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${bgColor}"><i data-lucide="${icon}" class="w-4 h-4 ${role === 'model' ? 'text-cyan-400' : 'text-white'}"></i></div>
        <div class="max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${bubbleBg} ${textColor} border border-slate-700/50 ${rounded}">${text}</div>
    `;
    area.appendChild(msgDiv);
    lucide.createIcons();
    scrollToBottom();
};

const handleSend = async () => {
    const inputField = document.getElementById('chat-input');
    const text = inputField.value.trim();
    if (!text) return;
    appendMessage('user', text);
    inputField.value = '';
    const loader = document.getElementById('chat-loader');
    loader.classList.remove('hidden');
    setTimeout(() => { loader.classList.add('hidden'); appendMessage('model', "I'm currently in demo mode. Christo is an expert in AWS, Kubernetes, and Terraform. Please reach out to him via email!"); }, 1000);
};

// --- Init ---

const init = () => {
    if (!window.RESUME_DATA) return;
    document.querySelectorAll('.resume-name').forEach(el => el.textContent = window.RESUME_DATA.name);
    document.querySelector('.resume-summary').textContent = window.RESUME_DATA.summary;
    document.querySelector('.profile-img').src = window.RESUME_DATA.profileImage;
    document.querySelector('.profile-img').alt = window.RESUME_DATA.name;
    document.querySelector('.footer-year').textContent = new Date().getFullYear();

    renderExperience();
    renderSkills();
    renderProjects();
    renderSocialLinks();
    initRadarChart();
    initAnimations();
    window.addEventListener('scroll', handleScroll);
    lucide.createIcons();

    document.getElementById('chat-toggle').addEventListener('click', toggleChat);
    document.getElementById('chat-close').addEventListener('click', toggleChat);
    document.getElementById('chat-send').addEventListener('click', handleSend);
    document.getElementById('chat-input').addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSend(); });
};

window.addEventListener('load', init);
