import React from "react"
import { onlyYear } from "./functions"

export function Name({ resume }) {
    return (
        <div id="name" className="last">
            <h1>{resume.basics.name}</h1>
            <h2>{resume.basics.label}</h2>
        </div>
    )
}

export function Address({ resume }) {
    return (
        <>
            <h4>Address</h4>
            <ul id="address" className="last">
                <li>{resume.basics.location.address}</li>
                <li>{resume.basics.location.postalCode + ", " + resume.basics.location.city}</li>
            </ul>
        </>
    )
}

export function Web({ resume }) {
    let website = resume.basics.website ? <li>{resume.basics.website}</li> : null
    return (
        <>
            <h4>Web</h4>
            <ul id="web" className="last">
                <li>{resume.basics.email}</li>
                {website}
                {resume["basics"]["profiles"].map((e) => (
                    <li key={e.network + e.url}>
                        <a target="_blank" href={e.url}>
                            {e.network}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export function Phone({ resume }) {
    return (
        <>
            <h4>Phone</h4>
            <ul id="phone" className="last">
                <li>{resume.basics.phone}</li>
            </ul>
        </>
    )
}

export function About({ resume }) {
    return (
        <>
            <h3>About me</h3>
            <p id="about" className="last">
                {resume.basics.summary}
            </p>
        </>
    )
}

export function Languages({ resume }) {
    return (
        <>
            <h3>Language</h3>
            <ul id="language" className="last">
                {resume["languages"].map((e) => (
                    <li key={e.language + e.fluency}>{e.language + " : " + e.fluency}</li>
                ))}
            </ul>
        </>
    )
}

export function Education({ resume }) {
    return (
        <>
            <h2>Education</h2>
            {resume["education"].map((e) => (
                <div key={"edu-" + e.startDate + e.endDate}>
                    <p>{parseInt(onlyYear(e.startDate)) + " - " + parseInt(onlyYear(e.endDate))}</p>
                    {e.studyType ? <p>{e.studyType + " - " + e.area}</p> : <p>{e.area}</p>}
                    <p>{e.institution}</p>
                </div>
            ))}
        </>
    )
}

export function Skils({ resume }) {
    return (
        <>
            <h2>Skils</h2>
            {resume["skills"].map((e) => (
                <div className="skl-cont" key={e.name + e.level}>
                    <div>{e.name}</div>
                    <div className="box-skl">
                        <div className={"skl-" + e.level}>
                            <div className="skl-left"></div>
                            <div className="skl-right"></div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export function Experiences({ resume }) {
    return (
        <>
            <h2>Experience</h2>
            {resume["work"].map((e) => (
                <div className="exp-block" key={"exp-" + e.startDate + e.endDate}>
                    <div>{parseInt(onlyYear(e.startDate)) + " - " + parseInt(onlyYear(e.endDate))}</div>
                    <div className="exp-txt">
                        <p>{e.company}</p>
                        <p>{e.position}</p>
                        <p>{e.summary}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export function References({ resume }) {
    return (
        <>
            <h2>References</h2>
            {resume["references"].map((e) => (
                <div key={e.name}>
                    <p>{e.name}</p>
                    <p>{e.reference}</p>
                </div>
            ))}
        </>
    )
}
