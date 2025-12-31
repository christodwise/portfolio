window.RESUME_DATA = {
    name: "Christo Jimmy",
    title: "DevOps Engineer",
    email: "christojimmmy@gmail.com",
    phone: "9061180837",
    location: "Bangalore, Karnataka",
    summary: "DevOps Engineer with proven experience in cloud-native application delivery, container orchestration, CI/CD automation, and infrastructure as code. Looking to leverage technical and analytical skills to support enterprise-scale deployments and automation initiatives.",
    linkedin: "linkedin.com/in/christojimmy",
    profileImage: "https://media.licdn.com/dms/image/v2/D5603AQE17OKvEn7kBQ/profile-displayphoto-scale_200_200/B56ZtlDs9GGsAY-/0/1766927029055?e=2147483647&v=beta&t=zbNwN8Xm4Rp7EsD6yLarJYzrWlmmrz9K4aUYlbnO7HE"
};

window.EXPERIENCE = [
    {
        id: '1',
        company: "dWise Healthcare IT Solutions Pvt. Ltd",
        role: "DevOps Engineer",
        period: "06/2023 – Present",
        location: "Bangalore, India",
        description: [
            "Designed and implemented robust CI/CD pipelines using GitLab and Jenkins, enabling automated builds, testing, and deployments.",
            "Orchestrated microservices using Docker containers and managed them with Kubernetes clusters across AWS and VMs.",
            "Configured and deployed Spring Boot applications, Angular frontends, and PHP services for production environments.",
            "Optimized database performance and managed schema migrations with PostgreSQL, MongoDB, and Sqitch.",
            "Automated infrastructure provisioning and configuration using Terraform and Ansible, reducing setup time by 40%.",
            "Monitored system health using Grafana, SigNoz, and ELK Stack, ensuring 99.9% uptime."
        ]
    },
    {
        id: '2',
        company: "24-7 Intouch",
        role: "Senior Technical Support",
        period: "02/2021 – 12/2022",
        location: "Bangalore, India",
        description: [
            "Delivered advanced technical support for mobile gaming applications.",
            "Investigated and resolved complex issues related to game functionality, networking, and system crashes.",
            "Mentored junior team members, fostering knowledge sharing and improving team efficiency."
        ]
    },
    {
        id: '3',
        company: "24/7.ai",
        role: "Digital Interaction Advisor",
        period: "08/2019 – 02/2021",
        location: "Bangalore, India",
        description: [
            "Provided technical assistance for digital banking services.",
            "Diagnosed and resolved complex technical issues in real time.",
            "Collaborated with cross-functional teams to streamline digital banking processes."
        ]
    }
];

window.SKILLS = [
    {
        category: "Cloud & Infrastructure",
        skills: ["AWS (EC2, S3, VPC, RDS, Lambda)", "Terraform", "Ansible", "Linux Admin"]
    },
    {
        category: "Containerization & Orchestration",
        skills: ["Docker", "Kubernetes", "Microservices"]
    },
    {
        category: "CI/CD & DevOps Tools",
        skills: ["Jenkins", "GitLab CI", "Git", "Nexus"]
    },
    {
        category: "Monitoring & Logging",
        skills: ["Grafana", "Prometheus", "ELK Stack", "SigNoz", "Loki", "CloudWatch"]
    },
    {
        category: "Database & Backend",
        skills: ["PostgreSQL", "MongoDB", "MySQL", "Python", "SQL", "Spring Boot"]
    }
];

window.PROJECTS = [
    {
        id: 'p1',
        title: "AWS Infrastructure Automation",
        techStack: ["Terraform", "AWS EC2", "AWS VPC", "CloudWatch"],
        description: "Designed and deployed a scalable AWS infrastructure using Terraform. Provisioned EC2 instances, security groups, and load balancers while automating monitoring and backup systems."
    },
    {
        id: 'p2',
        title: "Microservices Deployment",
        techStack: ["Docker", "Kubernetes", "Prometheus"],
        description: "Built and containerized microservices using Docker and deployed them in Kubernetes clusters. Integrated monitoring and alerting systems for proactive issue management."
    },
    {
        id: 'p3',
        title: "CI/CD Pipeline Implementation",
        techStack: ["Jenkins", "GitLab", "Bash"],
        description: "Developed end-to-end CI/CD pipelines in Jenkins and GitLab, automating build, test, and deployment processes, reducing deployment time by 50%."
    },
    {
        id: 'p4',
        title: "Database Migration",
        techStack: ["PostgreSQL", "AWS RDS", "Optimization"],
        description: "Migrated large-scale databases from on-premises to PostgreSQL on AWS, implemented schema optimizations, and ensured data integrity during transitions."
    }
];

window.SOCIAL_LINKS = [
    { platform: "Email", url: `mailto:${window.RESUME_DATA.email}`, icon: 'mail' },
    { platform: "LinkedIn", url: `https://${window.RESUME_DATA.linkedin}`, icon: 'linkedin' },
    { platform: "Phone", url: `tel:${window.RESUME_DATA.phone}`, icon: 'phone' },
    { platform: "Location", url: "#", icon: 'map-pin' },
];
