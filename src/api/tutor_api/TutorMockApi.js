// const jwt = require('jsonwebtoken');
import { read_database } from "../../mock_database_folder/ReadDatabase";
import { write_database } from "../../mock_database_folder/WriteDatabase";
import { uid } from "uid";
let tutorInfo = [];
let tokenInfoTutor = [];
let tutorPrimaryInfo = [];


const addMockTutor = (requestConfig) => {
    const existingTutor = tutorInfo.find(tutor => tutor.phone === requestConfig.data.phone);
    if (existingTutor) {
        return Promise.reject("Phone number already registered");
    } else {
        let tutor = {...requestConfig.data};
        tutor = {...tutor , id: `TS-${tutorInfo.length + 1}`};
        tutorInfo.push(tutor);
        write_database("tutor-loginInfo", tutorInfo);
        const sendResponse = {token : uid(), id : tutor.id}
        tokenInfoTutor.push(sendResponse);
        write_database("token-info-tutor", tokenInfoTutor);
        
        return Promise.resolve(sendResponse);
    }
};
const addTutorPrimaryInfo = (requestConfig) => {
    const bearerToken = requestConfig.headers.BearerToken;
    const alreadyLogin = tokenInfoTutor.find(tutor => tutor.token === bearerToken);

    if (alreadyLogin.id !== requestConfig.data.id){
        return Promise.reject("Authorization Failed");
    }
    else {
        tutorPrimaryInfo.push(requestConfig.data);
        write_database("tutor-primary-info", tutorPrimaryInfo);
        return Promise.resolve(tutorPrimaryInfo);
    }
};

const updateMockTutor = (requestConfig) => {
    // Your update logic here
};

const loginMockTutor = (requestConfig) => {
    const tutor = tutorInfo.find(t => t.phone === requestConfig.data.phone);
    if (!tutor){
        return Promise.reject("Account not found");
    }
    else if (tutor.password !== requestConfig.data.password){
        return Promise.reject("Password does not matched");
    }
    const tToken = tokenInfoTutor.find(t=> t.id === tutor.id);
    const response = {token : tToken.token}
    return Promise.resolve(response);
   
};

export const TutorMockApi = (requestConfig) => {
    tutorInfo = read_database("tutor-loginInfo");
    tokenInfoTutor = read_database("token-info-tutor");
    tutorPrimaryInfo = read_database("tutor-primary-info");
    // console.log(tutorInfo , tokenInfoTutor , tutorPrimaryInfo)
    switch (requestConfig.url) {
        case "/add-tutor":
            return addMockTutor(requestConfig);
        case "/add-tutor-primary":
            return addTutorPrimaryInfo(requestConfig);
        case "/update-tutor":
            return updateMockTutor(requestConfig);
        case "/login-tutor":
            return loginMockTutor(requestConfig);
        default:
            break;
    }
};
