import project1 from '../assets/projects/Google-Gemini-API.jpg'
import project2 from '../assets/projects/project-2.jpg' 
import project3 from '../assets/projects/etch.png'

export const HERO_CONTENT = `I am a passionate front-end developer with a knack for crafting beautiful and responsive sites.I love how there's is always more to learn`;

export const ABOUT_TEXT = `I am a dedicated and versatile web/software developer with a passion for creating efficient and user-friendly web applications. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding,I enjoy staying active, exploring new technologies.`;


export const PROJECTS = [
  {
    title: "Google Gemini Clone",
    image: project1,
    description:
      "Created a Google Gemini clone using gemini 2.0 flash model.",
    technologies: ["HTML", "CSS", "ReactJs", "Tailwind", "Javascript"],
    link: "https://gemini-clone-j5khvqxq6-pmedhavis-projects.vercel.app/"
  },
  
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "ReactJs", "Tailwind", "Javascript"],
    link: "https://portfolio-plum-pi-75.vercel.app/"
  },
  {
    title: "Etch-a-Sketch",
    image: project3,
    description:
      "An online sketchpad.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://pmedhavi.github.io/etch-a-sketch/"
  },
];

export const CONTACT = {
  address: "Bengaluru, Karnataka, India",
  
  email: "medhhaviprakhar@gmail.com",
};
