const inputName = document.getElementById("userName");
const inputTitle = document.getElementById("userTitle");
const inputEmail = document.getElementById("userEmail");
const inputPhone = document.getElementById("userPhone");
const inputBirth = document.getElementById("userBirthDate");
const inputLinkedIn = document.getElementById("userLinkedIn");
const inputProfessionalSummary = document.getElementById("userProfessionalSummary");

function inputClear(input, isFocus){
    input.value = "";
    input.classList.remove("input-success");
    input.classList.remove("input-error");

    if(isFocus){
        input.focus();
    }
}

function inputValidator(input, value, isValid) {
    if (value == "" || value == null || value == undefined) {
        input.classList.remove("input-success");
        input.classList.add("input-error");
        return false;
    } else {
        input.classList.remove("input-error");
        input.classList.add("input-success");
        if (!isValid) {
            return false;
        } else {
            return true;
        }
    }
}

function validate() {
    const valueProfessionalSumary = inputProfessionalSummary.value;


    let isValid = true;

    isValid = inputValidator(inputProfessionalSummary, valueProfessionalSumary, isValid);

    isValid = validateInputsInContainer("certification", isValid);
    isValid = validateInputsInContainer("education", isValid);
    isValid = validateInputsInContainer("workExperience", isValid);
    isValid = validateInputsInContainer("languages", isValid);
    isValid = validateInputsInContainer("software", isValid);
    isValid = validateInputsInContainer("skills", isValid);
    isValid = validateInputsInContainer("personalInformation", isValid);

    return isValid;
}

function generateResume() {
    if (!validate()) {
        alert("All information is required");
    } else {
        const valueName = inputName.value;
        const valueTitle = inputTitle.value;
        const valueEmail = inputEmail.value;
        const valuePhone = inputPhone.value;
        const valueBirth = inputBirth.value;
        const valueLinkedIn = inputLinkedIn.value;
        const valueProfessionalSumary = inputProfessionalSummary.value;

        const mainContainer = document.getElementById("Cv-container");

        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }

        const divCol3 = document.createElement("div");
        divCol3.setAttribute(
            "class", "col-3"
        );

        const divCardLF = document.createElement("div");
        divCardLF.setAttribute(
            "class", "card"
        );

        const divCardBodyLF = document.createElement("div");
        divCardBodyLF.setAttribute(
            "class", "card-body"
        );

        const h2CardTitle = document.createElement("h2");
        h2CardTitle.setAttribute(
            "class", "card-title text-center"
        );
        h2CardTitle.innerText = `${valueName}`;

        const h4CardText = document.createElement("h4");
        h4CardText.setAttribute(
            "class", "card-text text-center"
        );
        h4CardText.innerText = `${valueTitle}`;

        divCardBodyLF.appendChild(h2CardTitle);
        divCardBodyLF.appendChild(h4CardText);


        //Container Personal Information
        const divPersonalInformation = document.createElement("div");
        divPersonalInformation.setAttribute(
            "class", "personalInformation"
        );

        const divCardPI = document.createElement("div");
        divCardPI.setAttribute(
            "class", "card"
        );

        const divCardHeaderPI = document.createElement("div");
        divCardHeaderPI.setAttribute(
            "class", "card-header bg-primary text-light text-center"
        );

        const h5PI = document.createElement("h5");
        h5PI.innerText = "Información Personal";

        const ulListPI = document.createElement("ul");
        ulListPI.setAttribute(
            "class", "list-group list-group-flush"
        );

        const liEmailPI = document.createElement("li");
        liEmailPI.setAttribute(
            "class", "list-group-item"
        );
        liEmailPI.innerText = `Email: ${valueEmail}`; 

        const liTelefonoPI = document.createElement("li");
        liTelefonoPI.setAttribute(
            "class", "list-group-item"
        );
        liTelefonoPI.innerText = `Teléfono: ${valuePhone}`; 

        const liNacimientoPI = document.createElement("li");
        liNacimientoPI.setAttribute(
            "class", "list-group-item"
        );
        liNacimientoPI.innerText = `Fecha de nacimiento: ${valueBirth}`; 

        const liLinkedInPI = document.createElement("li");
        liLinkedInPI.setAttribute(
            "class", "list-group-item"
        );
        liLinkedInPI.innerText = `LinkedIn: ${valueLinkedIn}`; 

        divCardBodyLF.appendChild(divPersonalInformation);
        divPersonalInformation.appendChild(divCardPI);
        divCardPI.appendChild(divCardHeaderPI);
        divCardHeaderPI.appendChild(h5PI);
        divCardPI.appendChild(ulListPI);
        ulListPI.appendChild(liEmailPI);
        ulListPI.appendChild(liTelefonoPI);
        ulListPI.appendChild(liNacimientoPI);
        ulListPI.appendChild(liLinkedInPI);

        //container Skill
        const divSkills = document.createElement("div");
        divSkills.setAttribute(
            "class", "skills mt-4"
        );

        const divCardSkill = document.createElement("div");
        divCardSkill.setAttribute(
            "class", "card"
        );

        const divCardHeaderSkill = document.createElement("div");
        divCardHeaderSkill.setAttribute(
            "class", "card-header bg-primary text-light text-center"
        );

        const h5Skill = document.createElement("h5");
        h5Skill.innerText = "Habilidades";

        const ulListSkill = document.createElement("ul");
        ulListSkill.setAttribute(
            "class", "list-group list-group-flush"
        );

        const skillsContainer = document.getElementById("skills-container");
        const skillEntries = skillsContainer.querySelectorAll(".d-flex");

        skillEntries.forEach(entry => {
            const skillName = entry.querySelector(".skillName").value;
            const skillScore = entry.querySelector(".skillScore").value;

            if (skillName && skillScore) {
                const liSkill = document.createElement("li");
                liSkill.setAttribute("class", "list-group-item");
                liSkill.innerText = `${skillName} (${skillScore}/5)`;
                ulListSkill.appendChild(liSkill);
            }
        });

        divCardBodyLF.appendChild(divSkills);
        divSkills.appendChild(divCardSkill);
        divCardSkill.appendChild(divCardHeaderSkill);
        divCardHeaderSkill.appendChild(h5Skill);
        divCardSkill.appendChild(ulListSkill);    
        


        //container Software
        const divSoftware = document.createElement("div");
        divSoftware.setAttribute(
            "class", "software mt-4"
        );

        const divCardSoftware = document.createElement("div");
        divCardSoftware.setAttribute(
            "class", "card"
        );

        const divCardHeaderSoftware = document.createElement("div");
        divCardHeaderSoftware.setAttribute(
            "class", "card-header bg-primary text-light text-center"
        );

        const h5Software = document.createElement("h5");
        h5Software.innerText = "Software";

        const ulListSoftware = document.createElement("ul");
        ulListSoftware.setAttribute(
            "class", "list-group list-group-flush"
        );

        const softwareContainer = document.getElementById("software-container");
        const softwareEntries = softwareContainer.querySelectorAll(".d-flex");

        softwareEntries.forEach(entry => {
            const softwareName = entry.querySelector(".softwareName").value;
            const softwarScore = entry.querySelector(".softwareScore").value;

            if (softwareName && softwarScore) {
                const liSoftware = document.createElement("li");
                liSoftware.setAttribute("class", "list-group-item");
                liSoftware.innerText = `${softwareName} (${softwarScore}/5)`;
                ulListSoftware.appendChild(liSoftware);
            }
        });
        
        divCardBodyLF.appendChild(divSoftware);
        divSoftware.appendChild(divCardSoftware);
        divCardSoftware.appendChild(divCardHeaderSoftware);
        divCardHeaderSoftware.appendChild(h5Software);
        divCardSoftware.appendChild(ulListSoftware);

        //container Idiomas
        const divLanguage = document.createElement("div");
        divLanguage.setAttribute(
            "class", "language mt-4"
        );

        const divCardLanguage = document.createElement("div");
        divCardLanguage.setAttribute(
            "class", "card"
        );

        const divCardHeaderLanguage = document.createElement("div");
        divCardHeaderLanguage.setAttribute(
            "class", "card-header bg-primary text-light text-center"
        );

        const h5Language = document.createElement("h5");
        h5Language.innerText = "Idiomas";

        const ulListLanguage = document.createElement("ul");
        ulListLanguage.setAttribute(
            "class", "list-group list-group-flush"
        );

        const languageContainer = document.getElementById("languages-container");
        const languageEntries = languageContainer.querySelectorAll(".d-flex");

        languageEntries.forEach(entry => {
            const languageName = entry.querySelector(".languageName").value;
            const languageScore = entry.querySelector(".languageScore").value;

            if (languageName && languageScore) {
                const liLanguage = document.createElement("li");
                liLanguage.setAttribute("class", "list-group-item");
                liLanguage.innerText = `${languageName} (${languageScore}/5)`;
                ulListLanguage.appendChild(liLanguage);
            }
        });

        divCardBodyLF.appendChild(divLanguage);
        divLanguage.appendChild(divCardLanguage);
        divCardLanguage.appendChild(divCardHeaderLanguage);
        divCardHeaderLanguage.appendChild(h5Language);
        divCardLanguage.appendChild(ulListLanguage);


        //Container derecha
        const divCol6 = document.createElement("div");
        divCol6.setAttribute(
            "class", "col-6"
        );

        const divCardRH = document.createElement("div");
        divCardRH.setAttribute(
            "class", "card"
        );

        const divCardBodyRH = document.createElement("div");
        divCardBodyRH.setAttribute(
            "class", "card-body"
        );


        //container Resumen Profesional
        const divProfessionalSummary = document.createElement("div");
        divProfessionalSummary.setAttribute(
            "class", "professionalSummary"
        );

        const divCardPS = document.createElement("div");
        divCardPS.setAttribute(
            "class", "card"
        );

        const divCardHeaderPS = document.createElement("div");
        divCardHeaderPS.setAttribute(
            "class", "card-header bg-primary text-light"
        );

        const h5PS = document.createElement("h5");
        h5PS.innerText = "Resumen Laboral";

        const paragraphPS = document.createElement("p");
        paragraphPS.setAttribute(
            "class", "card-text m-1"
        );
        paragraphPS.innerText = `${valueProfessionalSumary}`;

        divCardBodyRH.appendChild(divProfessionalSummary);
        divProfessionalSummary.appendChild(divCardPS);
        divCardPS.appendChild(divCardHeaderPS);
        divCardHeaderPS.appendChild(h5PS);
        divCardPS.appendChild(paragraphPS);



        //container Experiencia Laboral
        const divWorkExperience = document.createElement("div");
        divWorkExperience.setAttribute(
            "class", "workExperience mt-4"
        );

        const divCardWE= document.createElement("div");
        divCardWE.setAttribute(
            "class", "card"
        );

        const divCardHeaderWE = document.createElement("div");
        divCardHeaderWE.setAttribute(
            "class", "card-header bg-primary text-light"
        );

        const h5WE = document.createElement("h5");
        h5WE.innerText = "Experiencia Laboral";

        const ulListWE= document.createElement("ul");
        ulListWE.setAttribute(
            "class", "list-group list-group-flush"
        );

        const weContainer = document.getElementById("workExperience-container");
        const weEntries = weContainer.querySelectorAll(".d-flex");

        weEntries.forEach(entry => {
            const weName = entry.querySelector(".weName").value;
            const weStartDate = entry.querySelector(".weStartDate").value; 
            const weEndDate = entry.querySelector(".weEndDate").value;

            if (weName && weStartDate && weEndDate) {
                const liWE = document.createElement("li");
                liWE.setAttribute("class", "list-group-item");
                liWE.innerText = `${weName} (${weStartDate} - ${weEndDate})`;
                ulListWE.appendChild(liWE);
            }
        });

        divCardBodyRH.appendChild(divWorkExperience);
        divWorkExperience.appendChild(divCardWE);
        divCardWE.appendChild(divCardHeaderWE);
        divCardHeaderWE.appendChild(h5WE);
        divCardWE.appendChild(ulListWE);

        
        //container Educacion
        const divEducation = document.createElement("div");
        divEducation.setAttribute(
            "class", "education mt-4"
        );

        const divCardEducation= document.createElement("div");
        divCardEducation.setAttribute(
            "class", "card"
        );

        const divCardHeaderEducation = document.createElement("div");
        divCardHeaderEducation.setAttribute(
            "class", "card-header bg-primary text-light"
        );

        const h5Education = document.createElement("h5");
        h5Education.innerText = "Educación";

        const ulListEducation = document.createElement("ul");
        ulListEducation.setAttribute(
            "class", "list-group list-group-flush"
        );

        const educationContainer = document.getElementById("education-container");
        const educationEntries = educationContainer.querySelectorAll(".d-flex");

        educationEntries.forEach(entry => {
            const educationName = entry.querySelector(".educationName").value;
            const educationStartDate = entry.querySelector(".educationStartDate").value; 
            const educationEndDate = entry.querySelector(".educationEndDate").value; 

            if (educationName && educationStartDate && educationEndDate) {
                const liEducation = document.createElement("li");
                liEducation.setAttribute("class", "list-group-item");
                liEducation.innerText = `${educationName} (${educationStartDate} - ${educationEndDate})`;
                ulListEducation.appendChild(liEducation);
            }
        });

        divCardBodyRH.appendChild(divEducation);
        divEducation.appendChild(divCardEducation);
        divCardEducation.appendChild(divCardHeaderEducation);
        divCardHeaderEducation.appendChild(h5Education);
        divCardEducation.appendChild(ulListEducation);
        
        //container Certificacion
        const divCertification = document.createElement("div");
        divCertification.setAttribute(
            "class", "certification mt-4"
        );

        const divCardCertification = document.createElement("div");
        divCardCertification.setAttribute(
            "class", "card"
        );

        const divCardHeaderCertification = document.createElement("div");
        divCardHeaderCertification.setAttribute(
            "class", "card-header bg-primary text-light"
        );

        const h5ECertification = document.createElement("h5");
        h5ECertification.innerText = "Certificación";

        const ulListCertification = document.createElement("ul");
        ulListCertification.setAttribute(
            "class", "list-group list-group-flush"
        );

        const certificationContainer = document.getElementById("certification-container");
        const certificationEntries = certificationContainer.querySelectorAll(".d-flex");

        certificationEntries.forEach(entry => {
            const certificationName = entry.querySelector(".certificationName").value;
            const certificationStartDate = entry.querySelector(".certificationStartDate").value; 
            const certificationEndDate = entry.querySelector(".certificationEndDate").value; 

            if (certificationName && certificationStartDate && certificationEndDate) {
                const liCertification = document.createElement("li");
                liCertification.setAttribute("class", "list-group-item");
                liCertification.innerText = `${certificationName} (${certificationStartDate} - ${certificationEndDate})`;
                ulListCertification.appendChild(liCertification);
            }
        });
        

        divCardBodyRH.appendChild(divCertification);
        divCertification.appendChild(divCardCertification);
        divCardCertification.appendChild(divCardHeaderCertification);
        divCardHeaderCertification.appendChild(h5ECertification);
        divCardCertification.appendChild(ulListCertification);

        divCardRH.appendChild(divCardBodyRH);
        divCol6.appendChild(divCardRH);
        divCardLF.appendChild(divCardBodyLF);
        divCol3.appendChild(divCardLF);
        mainContainer.appendChild(divCol3);
        mainContainer.appendChild(divCol6);

        formClear()
    }
}

function addSkill(){
    const main = document.getElementById("skills");
    
    const divContainerSkills = document.createElement("div");

    divContainerSkills.setAttribute(
        "class", "d-flex column-gap-2 mt-1 createDinamic"
    );

    const inputSkillName = document.createElement("input");
    inputSkillName.setAttribute(
        "type", "text"
    );
    inputSkillName.setAttribute(
        "class", "skillName form-control"
    );

    const selectScoreSkill = document.createElement("select");
    selectScoreSkill.setAttribute(
        "class", "skillScore form-select"
    );

    const optionSelectScore0 = document.createElement("option");
    optionSelectScore0.innerText = "Select some option";
    optionSelectScore0.setAttribute(
        "value", ""
    );

    const optionSelectScore1 = document.createElement("option");
    optionSelectScore1.innerText = "1";
    optionSelectScore1.setAttribute(
        "value", "1"
    );

    const optionSelectScore2 = document.createElement("option");
    optionSelectScore2.innerText = "2";
    optionSelectScore2.setAttribute(
        "value", "2"
    );

    const optionSelectScore3 = document.createElement("option");
    optionSelectScore3.innerText = "3";
    optionSelectScore3.setAttribute(
        "value", "3"
    );

    const optionSelectScore4 = document.createElement("option");
    optionSelectScore4.innerText = "4";
    optionSelectScore4.setAttribute(
        "value", "4"
    );

    const optionSelectScore5 = document.createElement("option");
    optionSelectScore5.innerText = "5";
    optionSelectScore5.setAttribute(
        "value", "5"
    );

    selectScoreSkill.appendChild(optionSelectScore0);
    selectScoreSkill.appendChild(optionSelectScore1);
    selectScoreSkill.appendChild(optionSelectScore2);
    selectScoreSkill.appendChild(optionSelectScore3);
    selectScoreSkill.appendChild(optionSelectScore4);
    selectScoreSkill.appendChild(optionSelectScore5);
    divContainerSkills.appendChild(inputSkillName);
    divContainerSkills.appendChild(selectScoreSkill);
    main.appendChild(divContainerSkills);
}

function addSoftwareProgramming(){
    const main = document.getElementById("software");
    
    const divContainersoftware = document.createElement("div");

    divContainersoftware.setAttribute(
        "class", "d-flex column-gap-2 mt-1 createDinamic"
    );

    const inputSoftwareProgrammingName = document.createElement("input");
    inputSoftwareProgrammingName.setAttribute(
        "type", "text"
    );
    inputSoftwareProgrammingName.setAttribute(
        "class", "softwareName form-control"
    );
    inputSoftwareProgrammingName.setAttribute(
        "id", "userProgrammingLanguageName"
    );

    const selectScoreProgramming = document.createElement("select");
    selectScoreProgramming.setAttribute(
        "class", "softwareScore form-select"
    );
    selectScoreProgramming.setAttribute(
        "id", "userLanguageScore"
    );

    const optionSelectSoftware0 = document.createElement("option");
    optionSelectSoftware0.innerText = "Select some option";
    optionSelectSoftware0.setAttribute(
        "value", ""
    );

    const optionSelectSoftware1 = document.createElement("option");
    optionSelectSoftware1.innerText = "1";
    optionSelectSoftware1.setAttribute(
        "value", "1"
    );

    const optionSelectSoftware2 = document.createElement("option");
    optionSelectSoftware2.innerText = "2";
    optionSelectSoftware2.setAttribute(
        "value", "2"
    );

    const optionSelectSoftware3 = document.createElement("option");
    optionSelectSoftware3.innerText = "3";
    optionSelectSoftware3.setAttribute(
        "value", "3"
    );

    const optionSelectSoftware4 = document.createElement("option");
    optionSelectSoftware4.innerText = "4";
    optionSelectSoftware4.setAttribute(
        "value", "4"
    );

    const optionSelectSoftware5 = document.createElement("option");
    optionSelectSoftware5.innerText = "5";
    optionSelectSoftware5.setAttribute(
        "value", "5"
    );

    selectScoreProgramming.appendChild(optionSelectSoftware0);
    selectScoreProgramming.appendChild(optionSelectSoftware1);
    selectScoreProgramming.appendChild(optionSelectSoftware2);
    selectScoreProgramming.appendChild(optionSelectSoftware3);
    selectScoreProgramming.appendChild(optionSelectSoftware4);
    selectScoreProgramming.appendChild(optionSelectSoftware5);
    divContainersoftware.appendChild(inputSoftwareProgrammingName);
    divContainersoftware.appendChild(selectScoreProgramming);
    main.appendChild(divContainersoftware);
}

function addLanguage(){
    const main = document.getElementById("languages");
    
    const divContainerLanguages = document.createElement("div");

    divContainerLanguages.setAttribute(
        "class", "d-flex column-gap-2 mt-1 createDinamic"
    );

    const inputLanguageName = document.createElement("input");
    inputLanguageName.setAttribute(
        "type", "text"
    );
    inputLanguageName.setAttribute(
        "class", "languageName form-control"
    );
    inputLanguageName.setAttribute(
        "id", "userProgrammingLanguageName"
    );

    const selectScoreLanguage = document.createElement("select");
    selectScoreLanguage.setAttribute(
        "class", "languageScore form-select"
    );
    selectScoreLanguage.setAttribute(
        "id", "userLanguageScore"
    );

    const optionSelectLanguage0 = document.createElement("option");
    optionSelectLanguage0.innerText = "Select some option";
    optionSelectLanguage0.setAttribute(
        "value", ""
    );

    const optionSelectLanguage1 = document.createElement("option");
    optionSelectLanguage1.innerText = "1";
    optionSelectLanguage1.setAttribute(
        "value", "1"
    );

    const optionSelectLanguage2 = document.createElement("option");
    optionSelectLanguage2.innerText = "2";
    optionSelectLanguage2.setAttribute(
        "value", "2"
    );

    const optionSelectLanguage3 = document.createElement("option");
    optionSelectLanguage3.innerText = "3";
    optionSelectLanguage3.setAttribute(
        "value", "3"
    );

    const optionSelectLanguage4 = document.createElement("option");
    optionSelectLanguage4.innerText = "4";
    optionSelectLanguage4.setAttribute(
        "value", "4"
    );

    const optionSelectLanguage5 = document.createElement("option");
    optionSelectLanguage5.innerText = "5";
    optionSelectLanguage5.setAttribute(
        "value", "5"
    );

    selectScoreLanguage.appendChild(optionSelectLanguage0);
    selectScoreLanguage.appendChild(optionSelectLanguage1);
    selectScoreLanguage.appendChild(optionSelectLanguage2);
    selectScoreLanguage.appendChild(optionSelectLanguage3);
    selectScoreLanguage.appendChild(optionSelectLanguage4);
    selectScoreLanguage.appendChild(optionSelectLanguage5);
    divContainerLanguages.appendChild(inputLanguageName);
    divContainerLanguages.appendChild(selectScoreLanguage);
    main.appendChild(divContainerLanguages);
}

function addWorkExperience(){
    const main = document.getElementById("workExperience");
    
    const divContainerWork = document.createElement("div");
    divContainerWork.setAttribute(
        "class", "d-flex column-gap-3 mt-1 createDinamic"
    );

    const inputWorkName = document.createElement("input");
    inputWorkName.setAttribute(
        "type", "text"
    );
    inputWorkName.setAttribute(
        "class", "weName form-control form-control-sm"
    );
    inputWorkName.setAttribute(
        "id", "userWorkExperience"
    );

    const inputWorkStart = document.createElement("input");
    inputWorkStart.setAttribute(
        "type", "date"
    );
    inputWorkStart.setAttribute(
        "class", "weStartDate form-control"
    );
    inputWorkStart.setAttribute(
        "id", "userWorkStartDate"
    );
    inputWorkStart.setAttribute(
        "min", "1890-01-01"
    );
    inputWorkStart.setAttribute(
        "max", "2140-12-31"
    );

    const inputWorEnd = document.createElement("input");
    inputWorEnd.setAttribute(
        "type", "date"
    );
    inputWorEnd.setAttribute(
        "class", "weEndDate form-control"
    );
    inputWorEnd.setAttribute(
        "id", "userWorkEndDate"
    );
    inputWorEnd.setAttribute(
        "min", "1890-01-01"
    );
    inputWorEnd.setAttribute(
        "max", "2140-12-31"
    );

    divContainerWork.appendChild(inputWorkName);
    divContainerWork.appendChild(inputWorEnd);
    divContainerWork.appendChild(inputWorkStart);
    main.appendChild(divContainerWork);
}

function addEducation(){
    const main = document.getElementById("education");
    
    const divContainerEducation = document.createElement("div");
    divContainerEducation.setAttribute(
        "class", "d-flex column-gap-3 mt-1 createDinamic"
    );

    const inputEducationName = document.createElement("input");
    inputEducationName.setAttribute(
        "type", "text"
    );
    inputEducationName.setAttribute(
        "class", "educationName form-control form-control-sm"
    );
    inputEducationName.setAttribute(
        "id", "userEducationName"
    );

    const inputEducationStart = document.createElement("input");
    inputEducationStart.setAttribute(
        "type", "date"
    );
    inputEducationStart.setAttribute(
        "class", "educationStartDate form-control"
    );
    inputEducationStart.setAttribute(
        "id", "userEducationStartDate"
    );
    inputEducationStart.setAttribute(
        "min", "1890-01-01"
    );
    inputEducationStart.setAttribute(
        "max", "2140-12-31"
    );

    const inputEducationEnd = document.createElement("input");
    inputEducationEnd.setAttribute(
        "type", "date"
    );
    inputEducationEnd.setAttribute(
        "class", "educationEndDate form-control"
    );
    inputEducationEnd.setAttribute(
        "id", "userEducationEndDate"
    );
    inputEducationEnd.setAttribute(
        "min", "1890-01-01"
    );
    inputEducationEnd.setAttribute(
        "max", "2140-12-31"
    );


    divContainerEducation.appendChild(inputEducationName);
    divContainerEducation.appendChild(inputEducationEnd);
    divContainerEducation.appendChild(inputEducationStart);
    main.appendChild(divContainerEducation);
}

function addCertification(){
    const main = document.getElementById("certification");
    
    const divContainerCertification = document.createElement("div");
    divContainerCertification.setAttribute(
        "class", "d-flex column-gap-3 mt-1 createDinamic"
    );

    const inputCertificationName = document.createElement("input");
    inputCertificationName.setAttribute(
        "type", "text"
    );
    inputCertificationName.setAttribute(
        "class", "certificationName form-control form-control-sm"
    );
    inputCertificationName.setAttribute(
        "id", "userCertificationName"
    );

    const inputCertificationStart = document.createElement("input");
    inputCertificationStart.setAttribute(
        "type", "date"
    );
    inputCertificationStart.setAttribute(
        "class", "certificationStartDate form-control"
    );
    inputCertificationStart.setAttribute(
        "id", "userCertificationStartDate"
    );
    inputCertificationStart.setAttribute(
        "min", "1890-01-01"
    );
    inputCertificationStart.setAttribute(
        "max", "2140-12-31"
    );

    const inputCertificationEnd = document.createElement("input");
    inputCertificationEnd.setAttribute(
        "type", "date"
    );
    inputCertificationEnd.setAttribute(
        "class", "certificationEndDate form-control"
    );
    inputCertificationEnd.setAttribute(
        "id", "userCertificationEndDate"
    );
    inputCertificationEnd.setAttribute(
        "min", "1890-01-01"
    );
    inputCertificationEnd.setAttribute(
        "max", "2140-12-31"
    );

    divContainerCertification.appendChild(inputCertificationName);
    divContainerCertification.appendChild(inputCertificationEnd);
    divContainerCertification.appendChild(inputCertificationStart);
    main.appendChild(divContainerCertification);
}

function validateInputsInContainer(containerId, isValid) {
    const container = document.getElementById(containerId);
    const inputs = container.querySelectorAll("input");
    const selects = container.querySelectorAll("select");
    
    let firstEmptyInput = null;

    for (let input of inputs) {
        if (input.value.trim() === "") {
            input.classList.remove("input-success");
            input.classList.add("input-error");

            if (input.type === "text" && !firstEmptyInput) {
                firstEmptyInput = input;
            }

            isValid = false;
        } else {
            input.classList.remove("input-error");
            input.classList.add("input-success");
        }
    }

    for (let select of selects) {
        if (select.value.trim() === "") {
            select.classList.remove("input-success");
            select.classList.add("input-error");
            isValid = false;
        } else {
            select.classList.remove("input-error");
            select.classList.add("input-success");
        }
    }

    if (firstEmptyInput) {
        firstEmptyInput.focus();
    }

    return isValid;
}

function formClear(){
    inputClear(inputName, true);
    inputClear(inputTitle, false);
    inputClear(inputEmail, false);
    inputClear(inputPhone, false);
    inputClear(inputBirth, false);
    inputClear(inputLinkedIn, false);
    inputClear(inputProfessionalSummary, false);

    inputsCreateClear("certification");
    inputsCreateClear("skills");
    inputsCreateClear("software");
    inputsCreateClear("languages");
    inputsCreateClear("workExperience");
    inputsCreateClear("education");
}

function inputsCreateClear(containerId){
    const container = document.getElementById(containerId);
    const inputs = container.querySelectorAll("input");
    const selects = container.querySelectorAll("select");
    const containerToDelete = container.querySelectorAll(".createDinamic");

    containerToDelete.forEach(element => element.remove());

    for (let input of inputs) {
        input.classList.remove("input-success");
        input.classList.remove("input-error");
        input.value = "";
    }

    for (let select of selects) {
        select.classList.remove("input-success");
        select.classList.remove("input-error");
        select.value = "";
    }
}