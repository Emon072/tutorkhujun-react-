import { tutorAxiosCall } from "./TutorCallApi"

// ------------------------ this will create new tutor id ----------------------------------------
export const registerNewTutor = (tutor) => {
    return tutorAxiosCall({
        url : "/add-tutor",
        method : "POST",
        data : tutor,
    });
}