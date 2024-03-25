import { TutorMockApi } from "./TutorMockApi";

export const tutorAxiosCall = (requestConfig) =>{
    return TutorMockApi(requestConfig);
}

export const tutorCallApi = (requestConfig) => {
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken) {
        throw new Error ("User not logged in");
    }

    return tutorAxiosCall({
        ...requestConfig ,
        headers:{
            BearerToken : jwtToken,
        },
    });
};