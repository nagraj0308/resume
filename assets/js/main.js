/* Define all the functions */

setTitle = (data) => {
    document.querySelector('.header-title').innerHTML = data.name;
    // document.querySelector('.header-subtitle').innerHTML = data.sub_title;
    document.querySelector('#aboutIntro').innerHTML = data.about.intro;
    document.querySelector('#contactEmail').innerHTML = data.about.contact.email;
    document.querySelector('#contactEmail').setAttribute("href", `mailto:${data.about.contact.email}`);
    document.querySelector('#contactPhone').innerHTML = data.about.contact.phone;
    // document.querySelector('#contactAddress').innerHTML = data.about.contact.address;
    document.querySelector('#contactWebsite').innerHTML = data.about.contact.portfolio;
    document.querySelector('#contactWebsite').setAttribute("href", `${data.about.contact.portfolio}`);
}

setLinks = (links) => {
    let ul = document.querySelector('#linkList');
    links.forEach(link => {
        let li = document.createElement('li');
        let title = document.createElement('div');
        title.className = 'link-title';
        title.innerHTML = link.title;
        li.appendChild(title);

        let linkSrc = document.createElement('div');
        linkSrc.className = 'link-src';
        let a = document.createElement('a');
        a.href = link.src;
        a.target = '_blank';
        a.innerHTML = link.src
        linkSrc.appendChild(a);
        li.appendChild(linkSrc);

        ul.appendChild(li);
    });
}

setEducation = (education) => {
    let ul = document.querySelector('#educationList');
    education.forEach(edu => {
        let li = document.createElement('li');

        let eduHeader = document.createElement('div');
        eduHeader.className = 'edu-header';

        let eduAlma = document.createElement('span');
        eduAlma.className = 'edu-alma';
        eduAlma.innerHTML = edu.alma;
        eduHeader.appendChild(eduAlma);

        let eduDuration = document.createElement('span');
        eduDuration.className = 'edu-duration';
        eduDuration.innerHTML = edu.duration;
        eduHeader.appendChild(eduDuration);

        li.appendChild(eduHeader);

        let eduClassData = document.createElement('div');
        eduClassData.className = 'edu-class-data';

        let eduStd = document.createElement('span');
        eduStd.className = 'edu-std';
        eduStd.innerHTML = edu.std;
        eduClassData.appendChild(eduStd);

        let eduScore = document.createElement('span');
        eduScore.className = 'edu-score';
        eduScore.innerHTML = edu.score;
        eduClassData.appendChild(eduScore);

        li.appendChild(eduClassData);

        ul.appendChild(li);
    });
}

setProjects = (projects) => {
    let ul = document.querySelector('#projectList');
    projects.forEach(project => {
        let li = document.createElement('li');

        let projectHeader = document.createElement('div');
        projectHeader.className = 'project-header';

        let projectTitle = document.createElement('span');
        projectTitle.className = 'project-title';
        projectTitle.innerHTML = project.title;
        projectHeader.appendChild(projectTitle);


        if (project.link.length > 5) {
            let projectLink = document.createElement('span');
            projectLink.className = 'project-link';

            let a = document.createElement('a');
            a.href = project.link;
            a.target = '_blank';
            a.innerHTML = `(${project.link})`;

            projectLink.appendChild(a);
            projectHeader.appendChild(projectLink);
        }

        let projectDuration = document.createElement('span');
        projectDuration.className = 'project-duration';
        projectDuration.innerHTML = project.duration;
        projectHeader.appendChild(projectDuration);

        li.appendChild(projectHeader);

        let projectDesc = document.createElement('div');
        projectDesc.className = 'project-desc';
        projectDesc.innerHTML = project.desc;

        li.appendChild(projectDesc);

        ul.appendChild(li);
    })
}

setSkills = (skills) => {
    let skillList = document.querySelector('#skillList');
    skills.forEach(skill => {
        let type_klass = "cat-skill-type";
        let body_klass = "cat-skill-body";

        if (skill.graph == "false") {
            // type_klass += " force-inline";
            body_klass += "-gen";
        }

        let catSkillItem = document.createElement('li');
        catSkillItem.className = 'cat-skill-item';

        let catSkillType = document.createElement('span');
        catSkillType.className = type_klass;
        catSkillType.innerHTML = skill.category;
        catSkillItem.appendChild(catSkillType);

        let catSkillBody = document.createElement('span');
        catSkillBody.className = body_klass;

        if (skill.graph == "true") {
            skill.topics.forEach(topic => {
                let skillGen = document.createElement('div');
                skillGen.className = 'skill-gen';

                let skillTitle = document.createElement('div');
                skillTitle.className = 'skill-title';
                skillTitle.innerHTML = topic;
                skillGen.appendChild(skillTitle);

                let skillProgressTrack = document.createElement('div');
                skillProgressTrack.className = 'skill-progress-track';
                let skillProgress = document.createElement('div');
                skillProgress.className = 'skill-progress';
                skillProgress.style = `width: ${topic.perc}`;
                skillProgressTrack.appendChild(skillProgress);

                skillGen.appendChild(skillProgressTrack);

                catSkillBody.appendChild(skillGen);
            })
        } else {
            skill.topics.forEach(topic => {
                let skillGen = document.createElement('div');
                skillGen.className = 'skill-gen';
                skillGen.innerHTML = topic;
                catSkillBody.appendChild(skillGen);
            });
        }

        catSkillItem.appendChild(catSkillBody);

        skillList.appendChild(catSkillItem);
    });

}

setExperience = (experiences) => {
    let expList = document.querySelector('#experienceList');
    experiences.forEach(evt => {
        let li = document.createElement('li');

        let achItem = document.createElement('div');
        achItem.className = 'ach-item';

        let achTitle = document.createElement('div');
        achTitle.className = 'ach-title';
        achTitle.innerText = evt.desc;
        achItem.appendChild(achTitle);

        let achDuration = document.createElement('div');
        achDuration.className = 'ach-duration';
        achDuration.innerHTML = evt.date;
        achItem.appendChild(achDuration);

        li.appendChild(achItem);

        if (evt.details) {
            let achDetails = document.createElement('ul');
            achDetails.className = 'expDet';

            evt.details.forEach(dText => {
                detItem = document.createElement('li');
                detItem.innerHTML = dText;
                achDetails.appendChild(detItem);
            });

            li.appendChild(achDetails);
        }

        expList.appendChild(li);
    });
}

setEvents = (events) => {
    let footer = document.querySelector('.footer');
    events.forEach(event => {
        let eventTitle = setCatagoryHeader(event.title);
        footer.appendChild(eventTitle);

        let eventBody = document.createElement('div');
        eventBody.className = 'cat-list-body';

        let ul = document.createElement('ul');

        event.body.forEach(evt => {
            let li = document.createElement('li');

            let achItem = document.createElement('div');
            achItem.className = 'ach-item';

            let achTitle = document.createElement('div');
            achTitle.className = 'ach-title';
            achTitle.innerText = evt.desc;
            achItem.appendChild(achTitle);

            let achDuration = document.createElement('div');
            achDuration.className = 'ach-duration';
            achDuration.innerHTML = evt.date;
            achItem.appendChild(achDuration);

            li.appendChild(achItem);
            ul.appendChild(li);
        });

        eventBody.appendChild(ul);
        footer.appendChild(eventBody);
    });
}

setCatagoryHeader = (title) => {
    let catHeader = document.createElement('div');
    catHeader.className = 'cat-header';

    let catIndicator = document.createElement('span');
    catIndicator.className = 'cat-indicator';

    let i = document.createElement('i');
    i.className = 'fa fa-chevron-right';
    i['area-hidden'] = 'true';
    catIndicator.appendChild(i);
    catHeader.appendChild(catIndicator);

    let catTitle = document.createElement('span');
    catTitle.className = 'cat-title';
    catTitle.innerHTML = title;
    catHeader.appendChild(catTitle);

    return catHeader;
}

correctHTML = () => {
    let desc = document.getElementsByClassName("ach-title");
            for (let i = 0; i < desc.length; i++) {
                desc[i].innerHTML = desc[i].innerText;
            };

    window.addEventListener("load", () => {

            // Extra padding for last skill item
            /*let skillItems = document.querySelectorAll(".footer > .cat-skill-item");
            if (skillItems) {
                skillItems[skillItems.length - 1].classList.add("pad-bottom-extra");
            }*/

        }, false);
}

//  Entry Function
(() => {
    // Call functions to load profile
    setTitle(profileData);
    setExperience(profileData.experiences);
    setProjects(profileData.projects);
    setSkills(profileData.skills);
    setEducation(profileData.education);
    setEvents(profileData.events);
    correctHTML();
})();


