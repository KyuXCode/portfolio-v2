import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import portrait from "./Assests/portrait.jpg"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaLinkedin />,
  <FaGithub />
]

export const bios = [
    {
        id: 1,
        icon: <FaUser />,
        key: "Name",
        value: "Kevin Yu"
    },
    {
        id: 2,
        icon: <FaPhoneAlt />,
        key: "Phone",
        value: "317-565-3252"
    },
    {
        id: 3,
        icon: <FaPaperPlane />,
        key: "Email",
        value: "kai38547@gmail.com"
    }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]

export const experiences = [
    {
        id: 1,
        year: "2022",
        position: "Development Apprentice",
        company: "Digital Corps Agency (Ball State University)"
    },
    {
        id: 2,
        year: "2021",
        position: "Sales Adviser",
        company: "BestBuy"
    }
]
export const finishes = [
    {
        id: 1,
        number: '6+',
        itemName: "Years Of Experience"
    },
    {
        id: 2,
        number: "150+",
        itemName: "Satisfied Customers"
    },
    {
        id: 3,
        number: "669+",
        itemName: "Designed Items"
    },
    {
        id: 4,
        number: "117+",
        itemName: "Clients Served"
    }
]
export const workImages = [
    {
        id: 1,
        img: work1,
        name: "project 1",
        category: "web"
    },
    {
        id: 2,
        img: work2,
        name: "project 2",
        category: "web"
    },
    {
        id: 3,
        img: work3,
        name: "project 3",
        category: "web"
    },
    {
        id: 4,
        img: work4,
        name: "project 4",
        category: "app"
    },
    {
        id: 5,
        img: work5,
        name: "project 5",
        category: 'app'
    },
    {
        id: 6,
        img: work6,
        name: "project 6",
        category: "design"
    }
]


export const workNavs = [
    "All", "Web", "App", "Design"
]

export const contacts = [
    {
        id: 1,
        icon: <FaMapMarkerAlt />,
        infoText: "16 Road, TharKayTa , Yangon"
    },
    {
        id: 2,
        icon: <FaPaperPlane />,
        infoText: "abee02@gmail.com"
    },
    {
        id: 3,
        icon: <FaPhoneAlt />,
        infoText: "+959-883-271-929"
    }
]