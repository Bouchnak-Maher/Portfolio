import uuid from "react-uuid"
import { eye, git } from "../utils/Icons"
import doctor from '../img/portImages/doctor.png'
import detc from '../img/portImages/detc.png'
import worldcup from '../img/portImages/worldcup.png'
import cnn from '../img/portImages/cnn.jpg'
import doc from '../img/portImages/doc.png'
import port from '../img/portImages/port.png'

export const portfolios = [
    {
        id: uuid(),
        category: "Web Development",
        title: "Application-Web-Des-Patients ",
        image: doc,
        link1: "https://github.com/Bouchnak-Maher/Application-Web-Des-Patients.git",
        link2: "https://github.com/Bouchnak-Maher/Application-Web-Des-Patients.git",
        icon1: git,
        icon2: eye,
    },
    
    {
        id: uuid(),
        category: "Web Development",
        title: "PHP_World_Cup_Blog",
        image: worldcup,
        link1: "https://github.com/Bouchnak-Maher/PHP_World_Cup_Blog.git",
        link2: "https://github.com/Bouchnak-Maher/PHP_World_Cup_Blog.git",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Artificial Intelligence",
        title: "Age-and-gender-detection",
        image: detc,
        link1: "https://github.com/Bouchnak-Maher/Age-and-gender-detection.git",
        link2: "https://github.com/Bouchnak-Maher/Age-and-gender-detection.git",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Artificial Intelligence",
        title: "Emotion_Detection-CNN ",
        image: cnn,
        link1: "https://github.com/Bouchnak-Maher/Emotion_Detection-CNN.git",
        link2: "https://github.com/Bouchnak-Maher/Emotion_Detection-CNN.git",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Web Development",
        title: "Doctor_Pharmacie_Application",
        image: doctor,
        link1: "https://github.com/Bouchnak-Maher/Doctor-Pharmacie-Labo_Application-Springboot.git",
        link2: "https://github.com/Bouchnak-Maher/Doctor-Pharmacie-Labo_Application-Springboot.git",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Web Development",
        title: "React portfolio website",
        image: port,
        link1: "https://github.com/Bouchnak-Maher/Portfolio.git",
        link2: "https://github.com/Bouchnak-Maher/Portfolio.gits",
        icon1: git,
        icon2: eye,
    },
]