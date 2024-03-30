import { studentAxiosCall } from "./StudentCallApi";


export const registerNewStudent = (student) =>{
    // console.log(student)
    return studentAxiosCall({
        url : "/add-student",
        method : "POST",
        data : student
    });
}

export const logInStudent = (phone , password) =>{
    // console.log(phone , password)
    return studentAxiosCall({
        url : "/loing-student",
        method : "POST",
        data : {phone : phone , password : password}
    });
}

export const getAllJobInfo = () =>{
    return studentAxiosCall({
        url : "/all-job",
        method : "GET",
    })
}

export const getSingleJobInfo = (id) =>{
    return studentAxiosCall({
        url : "/single-job",
        method : "GET",
        data : id,
    })
}