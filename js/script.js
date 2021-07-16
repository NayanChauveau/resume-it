fetch("../resume-it/json/maxwell.json")
    .then(function(resp) {
        return resp.json()
    })
    .then(function(resume) {
        frenchResume(resume)
    })

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function onlyYear (date) {
    let year = ''
    for (let i = 0; i < 4; i++) {
        year += date[i]
    }
    return year
}


function frenchResume (resume) {
    let left = document.querySelector("#left")

    // title

    left.querySelector("#name h1").innerText = resume.basics.name
    left.querySelector("#name h2").innerText = resume.basics.label

    // Perso

    left.querySelector("#address li:first-child").innerText = resume.basics.location.address
    left.querySelector("#address li:nth-child(2)").innerText = resume.basics.location.postalCode + ', ' + resume.basics.location.city
    
    left.querySelector("#web li:first-child").innerText = resume.basics.email
    if (resume.basics.website) {left.querySelector("ul#web").appendChild(document.createElement('li')).innerText = resume.basics.website}
    for (social of resume.basics.profiles) {
        if (social.url) {
            left.querySelector("ul#web").appendChild(document.createElement('li')).innerText = social.url
        }
    }

    left.querySelector("#phone li:first-child").innerText = resume.basics.phone

    // About me
    
    left.querySelector("#about p").innerText = resume.basics.summary

    // Languages

    for (language of resume.languages) {
        if (language) {
            left.querySelector("#language ul").appendChild(document.createElement('li')).innerText = language.language + ' : ' + language.fluency
        }
    }

    /********************* Center right **********************/ 

    let rightCenter = document.querySelector("#right-center")

    // Education

    for (education of resume.education) {
        // Creation of <div><p></p><p></p><p></p></div> and add an innerText
        rightCenter.querySelector("#education").appendChild(document.createElement('div')).innerHTML = `<p>${escapeHtml(onlyYear(education.startDate) + ' - ' +onlyYear(education.endDate))}</p><p>${escapeHtml(education.studyType)} - ${escapeHtml(education.area)}</p><p>${escapeHtml(education.institution)}</p>`
    }

    // Skils

    for (skill of resume.skills) {
        // Creation of <div></div><div class="box-skl"><div class="skl-"><div class="skl-left"></div><div class="skl-right"></div></div></div> and add an innerText
        rightCenter.querySelector("#skils > div").appendChild(document.createElement('div')).innerHTML = `<div>${escapeHtml(skill.name)}</div><div class="box-skl"><div class="skl-${escapeHtml(skill.level)}"><div class="skl-left"></div><div class="skl-right"></div></div></div>`
    }

    
}

