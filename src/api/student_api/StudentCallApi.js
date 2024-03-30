import { StudentMockApi } from "./StudentMockApi";

export const studentAxiosCall = (requestConfig) =>{
    return StudentMockApi(requestConfig);
}

export const studentCallApi = (requestConfig) =>{
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken){
        throw new Error("User not logged in");
    }

    return studentAxiosCall({
        ...requestConfig ,
        headers:{
            BearerToken : jwtToken,
        },
    });
}