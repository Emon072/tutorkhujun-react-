import { tutorCallApi } from "./TutorCallApi"

export const GetTutorEducationInfo = ()=>{
    return tutorCallApi({
        url : "/tutor-education",
        method : "GET",
    });
}

export const PostTutorEducationInfo = (educationInfo)=>{
    return tutorCallApi({
        url : "/add-tutor-education-info",
        method : "POST",
        data : educationInfo,
    });
}

export const PutTutorEducationInfo = (educationInfo)=>{
    return tutorCallApi({
        url : "/update-tutor-education-info",
        method : "PUT",
        data : educationInfo,
    });
}