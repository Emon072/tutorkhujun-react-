// const jwt = require('jsonwebtoken');
import { read_database } from "../../mock_database_folder/ReadDatabase";
let tutorInfo = [];

const addMockTutor = (requestConfig) => {
    console.log(tutorInfo);

    return Promise.resolve(requestConfig.data);
};

const updateMockTutor = (requestConfig) => {
    // Your update logic here
};

const loginMockTutor = (requestConfig) => {
    // Your login logic here
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
