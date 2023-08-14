import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube , GitHub, LinkedIn} from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Projects",
  },
  // {
  //   url: "/testimonials",
  //   text: "Testimonials",
  // },
  // {
  //   url: "/blog",
  //   text: "Blog",
  // },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "SITHARA PRAMODINI",
    post: "STUDENT",
    design: "WEB DEVELOPER",
    desc: " I'm a undergraduate student at SLIIT, Faculty of Computing. As a dedicated learner, I am seeking an internship opportunity to kickstart my career in web development. I am eager to showcase my skills, projects, and enthusiasm for the field. Let's collaborate and create something amazing together!",
  },
]
export const about = [
  {
    desc: "I'm Sithara Pramodini, an undergraduate specializing in software engineering at SLIIT. My focus is on web development, and I'm passionate about creating user-friendly online experiences.",
    desc1: "While I may not have professional experience, I have gained valuable academic insights and practical skills. I'm eager to apply my knowledge to real-world projects and contribute to meaningful web development endeavors.",
    cover: "./images/man.png",
  },
]
export const services = [
  {
    id: 1,
    language: "../images/services/html.png",
    title: "HTML",
  },
  {
    id: 2,
    language: "../images/services/css.png",
    title: "CSS",
  },
  {
    id: 3,
    language: "../images/services/js.png",
    title: "JAVA SCRIPT",
  },
  {
    id: 4,
    language: "../images/services/java.png",
    title: "JAVA",
  },
  {
    id: 5,
    language: "../images/services/react.png",
    title: "REACT",
  },
  {
    id: 6,
    language: "../images/services/node.png",
    title: "NODE JS",
  },
  {
    id: 7,
    language: "../images/services/c++.png",
    title: "C++",
  },{
    id: 8,
    language: "../images/services/git.png",
    title: "GITHUB",
  },
  // {
  //   id: 9,
  //   language: "../images/services/mongo.png",
  //   title: "MONGO DB",
  // },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/1.png",
    name: "system",
    // category: "design",
    category: "development",
    title: "Salon Management",
  },
  {
    id: 2,
    cover: "../images/port/2.png",
    name: "system",
    category: "development",
    // category: "design",
    title: "Food Waste Management",
  },
  {
    id: 3,
    cover: "../images/port/3.png",
    name: "system",
    category: "development",
    title: "Online Shopping Mall",
  },
  {
    id: 4,
    cover: "../images/port/4.png",
    name: "system",
    category: "development",
    title: "Train Reservation",
  },
  
]
export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-1.png",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-2.png",
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "React Developer",
  },
]
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
]
export const contact = [
  // {
  //   icon: <AddLocationAltOutlined />,
  //   text1: "2651 Main Street, Suit 124",
  //   text2: "Seattle, WA, 98101",
  // },
  // {
  //   icon: <PhoneIphone />,
  //   text1: "0123456789",
  //   text2: "0345627891",
  // },
  {
    icon: <EmailOutlined />,
    text1: "sitharapramodini@gmail.com",
    // text2: "inf0@brex-theme.io",
  },
]
export const social = [
  {
    icon: <Facebook />,
    url:"https://www.facebook.com/sitharapramodini?mibextid=LQQJ4d",
  },
  // {
  //   icon: <Twitter />,
  // },
  {
    icon: <Instagram />,
    url: "https://instagram.com/sythxara?igshid=NTc4MTIwNjQ2YQ=="
  },
  // {
  //   icon: <YouTube />,
  // },
  {
    icon: <GitHub />,
    url:"https://github.com/it21306754"
  },
  {
    icon: <LinkedIn />,
    url:"https://www.linkedin.com/in/sithara-pramodini/"
  },
]
