export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
export type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  liveLink: string; // Add this line
};

export const gridItems = [
  {
    id: 1,
    title: "Collaboration and Open Communication with Clients",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/OIG2.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with Time Zone Communications",

    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate About Technology and Development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Building modern websites enhances user engagement, performance, and aesthetic appeal.",
      className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to Start a Project Together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects: Project[]  = [
  {
    id: 1,
    title: "Nexolinx Website",
    des: "A modern, responsive website for an IT solution company, showcasing state-of-the-art technology.",
    img: "/project1.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/re.svg", "/tail.svg"],
    liveLink: "https://nexolinx.com/", // Live site link for project 1
  },
  {
    id: 2,
    title: "Crimson Consultancy",
    des: "Crimson Universal Educational Consultancy is all about helping students in Nepal who want to study in countries like Canada, Japan, Australia, New Zealand, USA, UK, Korea, and Europe.",
    img: "/project2.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/re.svg", "/tail.svg"],
    liveLink: "https://crimson-consultancy.com/", // Live site link for project 2
  },
  {
    id: 3,
    title: "Graphic Design Tools Integration",
    des: "Integrated tool for designing graphics with improved workflow and user experience.",
    img: "/p3.svg",
    iconLists: ["/canva.svg", "/photoshop.svg", "/visme-icon.png", "/adobear.svg"],
    liveLink: "https://ui.graphicdesign.com", // Live site link for project 3
  },
  {
    id: 4,
    title: "Responsive Dashboard",
    des: "A responsive and intuitive dashboard with integrated real-time data.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/chart.svg"],
    liveLink: "https://ui.dashboard.com", // Live site link for project 4
  },
];


export const testimonials = [
  {
    quote:
      "It has been a great experience working with Birat. His technical capabilities and commitment towards delivering high-quality results are impressive. If you have an idea in mind and want to see it go live, Birat is the one to call.",
    name: "John Doe",
    title: "CEO, Tech Solutions",
  },
  {
    quote:
      "Birat's passion for his work is second to none. His attention to detail and ability to tackle new challenges made my experience with him smooth and efficient. Highly recommended.",
    name: "Jane Smith",
    title: "Founder, Web Innovations",
  },
];

export const companies = [
  {
    id: 1,
    name: "Nexolinx",
    img: "/nexolinx.svg",
    nameImg: "/nexolinxName.svg",
  },
  {
    id: 2,
    name: "Tech Solutions",
    img: "/tech.svg",
    nameImg: "/techName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer at Nexolinx",
    desc: "Developing dynamic and responsive web applications, enhancing UX/UI for clients.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    desc: "Developed over 10 personal projects focusing on web performance and interactive user interfaces.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Mobile App Development",
    desc: "Led the full lifecycle of a mobile app project, from concept to launch on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Architected and maintained scalable, responsive web applications using modern frameworks.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
  },
  {
    id: 2,
    img: "/linkedin.svg",
  },
];
