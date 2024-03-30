import { tutorAxiosCall, tutorCallApi } from "./TutorCallApi"

// ------------------------ this will create new tutor id ----------------------------------------
export const registerNewTutorLogin = (tutor) => {
    return tutorAxiosCall({
        url : "/add-tutor",
        method : "POST",
        data : tutor,
    });
}


export const registerNewTutorPrimaryInfo = (tutorPrimaryInfo) => {

    return tutorCallApi({
        url : "/add-tutor-primary",
        method : "POST",
        data : tutorPrimaryInfo,
    });
}

export const updateNewTutorPrimaryInfo = (tutorPrimaryInfo) => {
    return tutorCallApi({
        url : "/update-tutor-primary",
        method : "PUT",
        data : tutorPrimaryInfo,
    });
}

export const getTutorPrimaryInfo = () =>{
    return tutorCallApi({
        url : "/get-tutor-primary",
        method : "GET",
    });
}

export const getSingleTutorPrimaryInfo = (id) =>{
    return tutorAxiosCall({
        url : "/get-single-tutor-primary",
        method : "GET",
        data : id,
    });
}

export const getAllTutorPrimaryInfo = () => {
    return tutorAxiosCall({
        url : "/get-all-tutor-primary",
        method : "GET",
    });
}

export const tutorLogin = (phoneNumber , Inputpassword) =>{
    // console.log(phoneNumber , Inputpassword);
    return tutorAxiosCall({
        url : "/login-tutor",
        method : "GET",
        data : {phone : phoneNumber, password : Inputpassword},
    });
}