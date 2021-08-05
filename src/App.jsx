import React from "react"
import { Name, Address, Web, Phone, About, Languages, Education, Skils, Experiences, References } from "./resume"

let resume = {
    basics: {
        name: "Nayan Chauveau",
        label: "Développeur Javascript",
        picture: "",
        email: "nayan.chauveau@gmail.com",
        phone: "06 22 76 46 23",
        website: "",
        summary:
            "Je suis un réel passioné du code, je passe le plus clair de mon temps libre à m'instruire et créer des projets. Je suis à la recherche d'une société dans laquelle je pourrais me challenger tous les jours.",
        location: {
            address: "25 allée centrale",
            postalCode: "94000",
            city: "Créteil",
        },
        profiles: [
            {
                network: "LinkedIn",
                username: "Nayan Chauveau",
                url: "https://www.linkedin.com/in/nayan-chauveau/",
            },
            {
                network: "WeLoveDevs",
                username: "Nayan Chauveau",
                url: "https://welovedevs.com/app/fr/developer/nayan-developpeur-javascript-passionne-par-le-front",
            },
            {
                network: "GitHub",
                username: "NayanChauveau",
                url: "https://github.com/NayanChauveau",
            },
        ],
    },
    work: [
        {
            company: "Drenaï Pictures",
            position: "Directeur informatique & Développeur",
            website: "https://drenaipictures.com",
            startDate: "2018-01-01",
            endDate: "2020-01-01",
            summary: "Création du site web de Drenaï Pictures. - WordPress, CSS, JS",
            highlights: ["Started the company"],
        },
        {
            company: "La P'tite Fumée",
            position: "Développeur prestashop",
            website: "",
            startDate: "2020-02-01",
            endDate: "2021-01-01",
            summary: "Développeur de la boutique (en développement) de La P'tite Fumée. - Prestashop, CSS, PHP, JS",
            highlights: ["Started the company"],
        },
        {
            company: "Projets personnels",
            position: "Développeur Javascript - React",
            website: "",
            startDate: "2018-03-01",
            endDate: "2021-01-01",
            summary: "Nombreux projets personnels utilisant les technologies Javascript, SASS, React...",
            highlights: ["Started the company"],
        },
    ],
    volunteer: [
        {
            organization: "Organization",
            position: "Volunteer",
            website: "http://organization.com/",
            startDate: "2012-01-01",
            endDate: "2013-01-01",
            summary: "Description...",
            highlights: ["Awarded 'Volunteer of the Month'"],
        },
    ],
    education: [
        {
            institution: "Philiance",
            area: "Développeur web et mobile",
            studyType: "Bac +2",
            startDate: "2020-01-01",
            endDate: "2021-01-01",
            gpa: "4.0",
            courses: ["DB1101 - Basic SQL"],
        },
        {
            institution: "FreeCodeCamp",
            area: "HTML, CSS, JS - Frontend",
            studyType: "",
            startDate: "2018-01-01",
            endDate: "2020-01-01",
            gpa: "4.0",
            courses: ["DB1101 - Basic SQL"],
        },
        {
            institution: "Grafikart.fr",
            area: "SASS, PHP, JS, REACT - front & back",
            studyType: "",
            startDate: "2019-03-01",
            endDate: "2020-01-01",
            gpa: "4.0",
            courses: ["DB1101 - Basic SQL"],
        },
        {
            institution: "OpenClassroom",
            area: "REACT, JS - Frontend",
            studyType: "",
            startDate: "2019-03-01",
            endDate: "2021-01-01",
            gpa: "4.0",
            courses: ["DB1101 - Basic SQL"],
        },
    ],
    awards: [
        {
            title: "Award",
            date: "2014-11-01",
            awarder: "Company",
            summary: "There is no spoon.",
        },
    ],
    publications: [
        {
            name: "Publication",
            publisher: "Company",
            releaseDate: "2014-10-01",
            website: "http://publication.com",
            summary: "Description...",
        },
    ],
    skills: [
        {
            name: "React",
            level: "70",
            keywords: ["HTML", "CSS", "Javascript"],
        },
        {
            name: "Javascript",
            level: "80",
            keywords: ["HTML", "CSS", "Javascript"],
        },
        {
            name: "HTML - CSS",
            level: "90",
            keywords: ["HTML", "CSS", "Javascript"],
        },
        {
            name: "PHP",
            level: "80",
            keywords: ["HTML", "CSS", "Javascript"],
        },
    ],
    languages: [
        {
            language: "Anglais",
            fluency: "Courant",
        },
        {
            language: "Français",
            fluency: "Langue natale",
        },
    ],
    interests: [
        {
            name: "Wildlife",
            keywords: ["Ferrets", "Unicorns"],
        },
    ],
    references: [
        {
            name: "Jordan",
            reference: "Directeur de la formation Développeur web - Philiance",
        },
    ],
}

export default function App() {
    return (
        <>
            <div id="left">
                <Name resume={resume} />
                <Address resume={resume} />
                <Web resume={resume} />
                <Phone resume={resume} />
                <About resume={resume} />
                <Languages resume={resume} />
            </div>
            <div id="left-center"></div>
            <div id="right-center">
                <Education resume={resume} />
                <Skils resume={resume} />
            </div>
            <div id="right">
                <Experiences resume={resume} />
                <References resume={resume} />
            </div>
        </>
    )
}
