// const jwt = require('jsonwebtoken');
import { read_database } from "../../mock_database_folder/ReadDatabase";
import { write_database } from "../../mock_database_folder/WriteDatabase";
import { uid } from "uid";
let tutorInfo = [];
let tokenInfoTutor = [];
let tutorPrimaryInfo = [];
let tutorEducationInfo =[];
let tutorTutionInfo = [];


const addMockTutor = (requestConfig) => {
    const existingTutor = tutorInfo.find(tutor => tutor.phone === requestConfig.data.phone);
    if (existingTutor) {
        return Promise.reject("Phone number already registered");
    } else {
        let tutor = {...requestConfig.data};
        tutor = {...tutor , id: `TS-${tutorInfo.length + 1}`};
        tutorInfo.push(tutor);
        write_database("tutor-loginInfo", tutorInfo);
        const sendResponse = {token : uid(), id : tutor.id};
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
        return Promise.resolve(requestConfig.data);
    }
};

const updateTutorPrimaryApi = (requestConfig) => {
    const bearerToken = requestConfig.headers.BearerToken;
    const alreadyLogin = tokenInfoTutor.find(tutor => tutor.token === bearerToken);

    if (alreadyLogin.id !== requestConfig.data.id){
        return Promise.reject("Authorization Failed");
    }
    else {
        tutorPrimaryInfo = tutorPrimaryInfo.map((tutor) => {
            if (tutor.id === alreadyLogin.id) return requestConfig.data;
            return tutor;
        })
        write_database("tutor-primary-info", tutorPrimaryInfo);
        return Promise.resolve(requestConfig.data);
    }
}

const getTutorPrimaryInfoApi = (requestConfig) =>{
    const bearerToken = requestConfig.headers.BearerToken;
    const alreadyLogin = tokenInfoTutor.find(tutor => tutor.token === bearerToken);


    if (!alreadyLogin.id){
        // console.log("jkhdf")
        return Promise.reject("Authorization Failed");
    }
    else {
        const primaryInfo = tutorPrimaryInfo.find(tutor => tutor.id === alreadyLogin.id);
        return Promise.resolve(primaryInfo);
    }
}

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

const getTutorEducation = (requestConfig) =>{
    const bearerToken = requestConfig.headers.BearerToken;
    const alreadyLogin = tokenInfoTutor.find(tutor => tutor.token === bearerToken);

    if (!alreadyLogin.id){
        return Promise.reject("Authorization Failed");
    }
    else {
        const educationInfo = tutorEducationInfo.find(tutor=> tutor.id === alreadyLogin.id);
        return Promise.resolve(educationInfo);
    }
}

const addTutorEducationInfo = (requestConfig) =>{
    const bearerToken = requestConfig.headers.BearerToken;
    const alreadyLogin = tokenInfoTutor.find(tutor => tutor.token === bearerToken);
    // console.log(alreadyLogin);

    if (alreadyLogin.id !== requestConfig.data.id){
        return Promise.reject("Authorization Failed");
    }
    else {
        tutorEducationInfo.push(requestConfig.data);
        write_database("tutor-education-info", tutorEducationInfo);
        return Promise.resolve(requestConfig.data);
    }
}

const updateTutorEducationInfo = (requestConfig)=>{
    const bearerToken = requestConfig.headers.BearerToken;
    const alreadyLogin = tokenInfoTutor.find(tutor => tutor.token === bearerToken);

    if (alreadyLogin.id !== requestConfig.data.id){
        return Promise.reject("Authorization Failed");
    }
    else {

        tutorEducationInfo = tutorEducationInfo.map((tutor) => {
            if (tutor.id === alreadyLogin.id) {
                return requestConfig.data;
            }
            return tutor;
        });
        // console.log(tutorEducationInfo);
        write_database("tutor-education-info", tutorEducationInfo);
        return Promise.resolve(requestConfig.data);
    }
}

//  ---------------------------------- this section is for tutor tution info -------------------------
const getTutorTutionApi = (requestConfig)=>{
    const bearerToken = requestConfig.headers.BearerToken;
    const alreadyLogin = tokenInfoTutor.find(tutor => tutor.token === bearerToken);

    if (!alreadyLogin.id){
        return Promise.reject("Authorization Failed");
    }
    else {

        const tutionInfo = tutorTutionInfo.find(tutor => tutor.id === alreadyLogin.id);
        // write_database("tutor-education-info", tutorEducationInfo);
        return Promise.resolve(tutionInfo);
    }
}

const postTutorTutionApi = (requestConfig) =>{
    const bearerToken = requestConfig.headers.BearerToken;
    const alreadyLogin = tokenInfoTutor.find(tutor => tutor.token === bearerToken);

    
    if (alreadyLogin.id !== requestConfig.data.id){
        return Promise.reject("Authorization Failed");
    }
    else {
        
        tutorTutionInfo.push(requestConfig.data);
        write_database("tutor-tution-info", tutorTutionInfo);
        return Promise.resolve(requestConfig.data);
    }
}
const putTutorTutionApi = (requestConfig) => {
    const bearerToken = requestConfig.headers.BearerToken;
    const alreadyLogin = tokenInfoTutor.find(tutor => tutor.token === bearerToken);
    
    // console.log(alreadyLogin , requestConfig.data);
    
    if (alreadyLogin.id !== requestConfig.data.id){
        return Promise.reject("Authorization Failed");
    }
    else {

        // const tutionInfo = tutorTutionInfo.find(tutor => tutor.id === alreadyLogin.id);
        tutorTutionInfo = tutorTutionInfo.map((tution) =>{
            if (tution.id === alreadyLogin.id) return requestConfig.data;
            return tution;
        })
        write_database("tutor-tution-info", tutorTutionInfo);
        return Promise.resolve(requestConfig.data);
    }
}

export const TutorMockApi = (requestConfig) => {
    tutorInfo = read_database("tutor-loginInfo");
    tokenInfoTutor = read_database("token-info-tutor");
    tutorPrimaryInfo = read_database("tutor-primary-info");
    tutorEducationInfo = read_database("tutor-education-info");
    tutorTutionInfo = read_database("tutor-tution-info");

    // console.log(tutorInfo , tokenInfoTutor , tutorPrimaryInfo)
    switch (requestConfig.url) {
        case "/add-tutor":
            return addMockTutor(requestConfig);
        case "/add-tutor-primary":
            return addTutorPrimaryInfo(requestConfig);
        case "/update-tutor-primary":
            return updateTutorPrimaryApi(requestConfig);
        case "/get-tutor-primary":
            return getTutorPrimaryInfoApi(requestConfig);
        case "/update-tutor":
            return updateMockTutor(requestConfig);
        case "/login-tutor":
            return loginMockTutor(requestConfig);
        case "/tutor-education":
            return getTutorEducation(requestConfig);
        case "/add-tutor-education-info":
            return addTutorEducationInfo(requestConfig);
        case "/update-tutor-education-info":
            return updateTutorEducationInfo(requestConfig);
        case "/tutor-tution":
            return getTutorTutionApi(requestConfig);
        case "/add-tutor-tution":
            return postTutorTutionApi(requestConfig);
        case "/update-tutor-tution":
            return putTutorTutionApi(requestConfig);
        default:
            break;
    }
};
