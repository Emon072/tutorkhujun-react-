import { tutorCallApi } from "./TutorCallApi"

export const getTutorTutionInfo = ()=>{
    return tutorCallApi({
        url : "/tutor-tution",
        method : "GET",
    });
}

export const PostTutorTutionInfo = (tutionInfo) =>{
    return tutorCallApi({
        url : "/add-tutor-tution",
        method : "POST",
        data : tutionInfo
    });
}

export const PutTutorTutionInfo = (tutionInfo) =>{
    return tutorCallApi({
        url : "/update-tutor-tution",
        method : "POT",
        data : tutionInfo
    });
}