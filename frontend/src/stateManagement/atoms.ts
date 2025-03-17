import { atom } from "jotai";

export const submissionForm = atom({
        firstName: "",
        introduction: "",
        country: "",
        state: "",
        projectName: "",
        projectGithub: "",
        projectState: "",
        projectDemoLink: "",
        projectShortDesc: "",
        projectMainDesc: "",
        images: [],
        category: "",
        email : "",
        liveLink : "",
        imageShow : []
});


export const creationForm = atom({
        hackathonName: "",
        hackathonDescription: "",
        additionalDetails: "",
        hackathonPoster: "",
        additionalLinks: [],
        hackathonPrize: [],
        hackathonOpen: "",
        hackathonEnds: "",
        totalPrize: "",
        hackathonTheme: "",
})