import { atom } from "jotai";

interface SubmissionFormType {
        firstName : string,
        introduction : string,
        country : string,
        state : string,
        projectName : string,
        projectGithub : string,
        projectState : string,
        projectDemoLink: string,
        projectShortDesc: string,
        projectMainDesc: string,
        images: File[],
        category: string,
        email : string,
        liveLink : string,
        imageShow : string[]

}

export const submissionForm = atom<SubmissionFormType>({
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