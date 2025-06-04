export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Fatema Rahman',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Khairul B was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Fahmid Arman',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      "Khairul B's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: 'Fahadul Islam',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Khairul B. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Farhan Karim',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Khairul B was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Nursery Inventory Management',
    desc: 'Developed a complete inventory management system for a nursery, enhancing the tracking and management of plants and sales.',
    subdesc: 'A comprehensive system designed to streamline nursery operations and sales processes.',
    href: 'https://www.argosoftware.com/blog/fulfillment-wholesale-nursery-software/',  // Add your live site link
    texture: '/textures/project/nursery-inventory.webp',
    logo: '/assets/nursery-logo.png',
    logoStyle: {
      backgroundColor: '#5c6b3a',
      border: '0.2px solid #4b5734',
      boxShadow: '0px 0px 60px 0px rgba(87, 134, 75, 0.3)',
    },
    
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      // Add relevant technologies
    ],
  },
  {
    title: 'Popular Lab Saidpur Ltd',
    desc: 'Building and maintaining web applications for the lab to improve diagnostic processes and data management.',
    subdesc: 'Diagnostic lab focused on improving operational efficiency through web-based solutions.',
    href: 'https://popular-lab-and.landing.host/saidpur-healthcare-mw99as',  // Add your live site link
    texture: '/textures/project/popular-lab.webp',
    logo: '/assets/lab-logo.png', // Example logo path
    logoStyle: {
      backgroundColor: '#1d1d1d',
      border: '0.2px solid #3b3b3b',
      boxShadow: '0px 0px 60px 0px rgba(255, 255, 255, 0.2)',
    },
     // Spotlight image for this project
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      // Add any relevant technologies
    ],
  },
  {
    title: 'Smart Student Management System',
    desc: 'Created a student management system to improve administrative tasks and enhance student information management.',
    subdesc: 'An intuitive and efficient system for managing student data and academic records.',
    href: 'https://classconnectpro.com/blog/benefits-of-a-student-management-system',  // Add your live site link
    texture: '/textures/project/student-management.webp',
    logo: '/assets/student-logo.png',
    logoStyle: {
      backgroundColor: '#3f4f75',
      border: '0.2px solid #2c3955',
      boxShadow: '0px 0px 60px 0px rgba(63, 79, 117, 0.25)',
    },
    
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Node.js', path: '/assets/nodejs.png' },
      // Add relevant technologies
    ],
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Popular Lab Saidpur Ltd',
    pos: 'full-stack developer',
    duration: '2024 - 2025',
    title:
      'As a full-stack developer at Popular Lab Saidpur Ltd, I create and maintain advanced web applications that revolutionize diagnostic systems, enhance patient data management, and optimize hospital and laboratory workflows, ensuring faster, more accurate results for better patient care.',
    icon: '/assets/popular-lab-logo.png', // Placeholder for your icon
    animation: 'victory', // You can keep the animation or change it if needed
  },
];
