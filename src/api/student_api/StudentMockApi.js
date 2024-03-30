import { uid } from "uid";
import { read_database } from "../../mock_database_folder/ReadDatabase"
import { write_database } from "../../mock_database_folder/WriteDatabase";
import jobInfoArr from "../../assets/mockDataset/student/jobInfoGen";

let studentInfo = [];
let tokenInfoStudent = [];


const addNewStudent = (requestConfig) => {
    const existingStudent = studentInfo.find((student) => student.phone === requestConfig.data.phone);
    if (existingStudent){
        return Promise.reject("Phone number already being used");
    }
    else{
        let student = {...requestConfig.data};
        student = {...student , stId : `St-${studentInfo.length + 1}`};
        studentInfo.push(student);
        write_database("student-loginInfo", studentInfo);
        let response = {token : uid() , stId : student.stId};
        tokenInfoStudent.push(response);
        write_database("token-info-student", tokenInfoStudent);
        return Promise.resolve(response);
    }
}
const loginStudentApi = (requestConfig) => {
    // console.log(requestConfig.data)
    const existingStudent = studentInfo.find((student) => student.phone === requestConfig.data.phone);
    console.log(existingStudent)
    if (existingStudent && existingStudent.password === requestConfig.data.password){
        let token = tokenInfoStudent.find((t) => t.stId === existingStudent.stId);
        // console.log(token)
        return Promise.resolve(token);
    }   
    else{
        return Promise.reject("Password Doesn't Matched");
    }
}

const getAllJobInfoApi = (requestConfig) => {
    // alert("here")
    // console.log(jobInfoArr)
    return Promise.resolve(jobInfoArr);
}
const getSingleJobInfoApi = (requestConfig) =>{
    const job = jobInfoArr.find((job) => job.jobId === requestConfig.data);
    return Promise.resolve(job);
}

export const StudentMockApi = (requestConfig) => {

    // console.log(requestConfig)
    studentInfo = read_database("student-loginInfo");
    tokenInfoStudent = read_database("token-info-student");

    switch (requestConfig.url) {
        case "/add-student":
            return addNewStudent(requestConfig);
        case "/loing-student":
            return loginStudentApi(requestConfig);
        case "/all-job":
            return getAllJobInfoApi(requestConfig);
        case "/single-job":
            return getSingleJobInfoApi(requestConfig);
        default:
            break;
    }
}