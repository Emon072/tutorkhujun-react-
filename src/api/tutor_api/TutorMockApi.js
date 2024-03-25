// const jwt = require('jsonwebtoken');
import { read_database } from "../../mock_database_folder/ReadDatabase";
import { uid } from "uid";
let tutorInfo = [];


const addMockTutor = (requestConfig) => {
    const existingTutor = tutorInfo.find(tutor => tutor.phone === requestConfig.data.phone);
    if (existingTutor) {
        console.log("here");
        return Promise.reject("Phone number already registered");
    } else {
        let tutor = {...requestConfig.data};
        tutor = {...tutor , id: `TS-${tutorInfo.length + 1}`};
        tutorInfo.push(tutor);
        const sendResponse = {token : uid(), id : tutor.id}
        return Promise.resolve(sendResponse);
    }
};

const updateMockTutor = (requestConfig) => {
    // Your update logic here
};

const loginMockTutor = (requestConfig) => {
    // Your login logic here`
};

export const TutorMockApi = (requestConfig) => {
    tutorInfo = read_database("tutor-loginInfo");
    switch (requestConfig.url) {
        case "/add-tutor":
            return addMockTutor(requestConfig);
        case "/update-tutor":
            return updateMockTutor(requestConfig);
        case "/login-tutor":
            return loginMockTutor(requestConfig);
        default:
            break;
    }
};
