import MediumInfoArr from "../MediumInfo";
import { DistrictInfoArr } from "../DistrictInfo";
import timingShiftArr from "../TimingShiftArr";

class Job {
    constructor(
        studentId,
        jobId,
        tutoringGender,
        tutorMedium,
        studentClass,
        jobDistrict,
        jobArea,
        studentGender,
        jobSubjects,
        tutoringTime,
        noOfStudents,
        tutoringDays,
        tuitionFees,
        otherRequirements,
        jobCreatedTime,
        tutoringType
    ){
        this.studentId = studentId;
        this.jobId = jobId;
        this.tutoringGender = tutoringGender;
        this.tutorMedium = tutorMedium;
        this.studentClass = studentClass;
        this.jobDistrict = jobDistrict;
        this.jobArea = jobArea;
        this.studentGender = studentGender;
        this.jobSubjects = jobSubjects;
        this.tutoringTime = tutoringTime;
        this.noOfStudents = noOfStudents;
        this.tutoringDays = tutoringDays;
        this.tuitionFees = tuitionFees;
        this.otherRequirements = otherRequirements;
        this.jobCreatedTime = jobCreatedTime;
        this.tutoringType = tutoringType;
    }
}

function generateRandomJob(){
    const genders = ['Male', 'Female'];
    const subject = ['CSE', 'ME', 'Software', 'Physics', 'Math', 'Chemistry','Biology'];
    const tutoringType = ['Home Tutoring' , 'Online Tutoring'];

    const otherRequirements = [
        "Experienced tutors from Bangladeshi universities are encouraged to apply.",
        "Candidates with a background in O/A levels (Edexcel) are preferred.,,,,Near Comfort Diagnostic Centre",
        "Medical tutors with experience in DMC/ShSMC/SSMC (minimum 1 year) are sought after.",
        "Engineers with at least 1 year of experience are requested to apply for tutoring positions.",
        "Tutors with a minimum of 2 years of experience in public universities are preferred.",
        "Physics department alumni from Dhaka University are encouraged to apply.,,,Border Bazar",
        "Candidates with teaching experience in Bangladeshi universities are highly desired.",
        "Preference will be given to tutors with a background in Bangladeshi educational institutions.",
        "Experienced instructors from Bangladeshi universities are invited to apply for tutoring roles.",
        "DU graduates with experience in Physics education are encouraged to apply.,,,Border Bazar",
        "Tutors with a proven track record in Bangladeshi university settings are sought after.",
        "Candidates familiar with the curriculum of Bangladeshi universities are encouraged to apply.",
        "Applicants with a background in Bangladeshi educational systems are preferred.",
        "Tutors with experience in Bangladeshi university entrance exam preparation are encouraged to apply.",
        "DU Physics department alumni are preferred for tutoring positions.,,,Border Bazar",
        "Candidates with experience in teaching Bangladeshi university students are encouraged to apply.",
        "Tutors with expertise in Bangladeshi university-level subjects are sought after.",
        "Candidates with teaching experience in Bangladeshi educational institutions are preferred.",
        "Applicants with a thorough understanding of Bangladeshi university standards are desired.",
        "DU graduates with teaching experience are encouraged to apply for tutoring positions.,,,Border Bazar",
        "Tutors with a strong background in Bangladeshi university education are highly desired.",
        "Candidates with experience in tutoring Bangladeshi university students are encouraged to apply.",
        "Applicants with a history of teaching in Bangladeshi university settings are preferred.",
        "DU Physics department alumni with teaching experience are encouraged to apply.,,,Border Bazar",
        "Tutors with a deep understanding of Bangladeshi university curriculum are sought after.",
        "Candidates with experience in Bangladeshi university exam preparation are encouraged to apply.",
        "Applicants with a passion for educating Bangladeshi university students are preferred.",
        "DU graduates with a strong academic background are encouraged to apply.,,,Border Bazar",
        "Tutors with experience in Bangladeshi university-level teaching are highly desired.",
        "Candidates with a commitment to Bangladeshi university education are encouraged to apply.",
        "Applicants with experience in teaching Bangladeshi university entrance exams are preferred.",
        "DU Physics department alumni with a passion for teaching are encouraged to apply.,,,Border Bazar",
        "Tutors with familiarity in Bangladeshi university standards are sought after.",
        "Candidates with a dedication to educating Bangladeshi university students are preferred.",
        "Applicants with a background in Bangladeshi educational pedagogy are encouraged to apply.",
        "DU graduates with teaching experience in Physics are encouraged to apply.,,,Border Bazar",
        "Tutors with experience in Bangladeshi university-level instruction are highly desired.",
        "Candidates with a strong connection to Bangladeshi university communities are preferred.",
        "Applicants with a history of success in tutoring Bangladeshi university students are desired.",
        "DU Physics department alumni with a commitment to education are encouraged to apply.,,,Border Bazar",
        "Tutors with a comprehensive understanding of Bangladeshi university curriculum are sought after.",
        "Candidates with experience in preparing Bangladeshi university students for exams are preferred.",
        "Applicants with a genuine interest in Bangladeshi university education are encouraged to apply.",
        "DU graduates with teaching experience and a passion for education are encouraged to apply.,,,Border Bazar",
        "Tutors with a background in Bangladeshi university teaching methods are highly desired.",
        "Candidates with a proven track record of success in educating Bangladeshi university students are preferred.",
        "Applicants with experience in mentoring Bangladeshi university students are encouraged to apply.",
        "DU Physics department alumni with a strong commitment to teaching are encouraged to apply.,,,Border Bazar",
        "Tutors with a deep knowledge of Bangladeshi university standards and practices are sought after.",
        "Candidates with experience in guiding Bangladeshi university students towards academic success are preferred.",
        "Applicants with a background in fostering a supportive learning environment for Bangladeshi university students are encouraged to apply.",
        "DU graduates with teaching experience and a dedication to student success are encouraged to apply.,,,Border Bazar"
      ];
      
    const randomGender = genders[Math.floor(Math.random() * genders.length)];
    const randomSubject = subject[Math.floor(Math.random() * subject.length)];
    const randomRequirements = otherRequirements[Math.floor(Math.random() * otherRequirements.length)];
    const randomTimeShift = timingShiftArr[Math.floor(Math.random() *timingShiftArr.length)];
    const randomMedium = Math.floor(Math.random() * MediumInfoArr.length);
    const randomDistrict = Math.floor(Math.random() * DistrictInfoArr.length);
    const randomTutoring = tutoringType[Math.floor(Math.random() * tutoringType.length)];

    return new Job(
        "ST-" + (Math.floor(Math.random() * 1000) + 100),
        "JB-"+ (Math.floor(Math.random() * 1000)),
        randomGender,
        MediumInfoArr[randomMedium].medium,
        MediumInfoArr[randomMedium].classes[Math.floor(Math.random() * MediumInfoArr[randomMedium].classes.length)],
        DistrictInfoArr[randomDistrict].district,
        DistrictInfoArr[randomDistrict].area[Math.floor(Math.random() * DistrictInfoArr[randomDistrict].area.length)],
        randomGender,
        randomSubject,
        randomTimeShift,
        Math.floor(Math.random() * 10) + 1 ,
        Math.floor(Math.random() * 10)%7 + 1 ,
        (((Math.floor(Math.random() * 10) + 1)*5 ) * 100),
        randomRequirements,
        new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 30))),
        randomTutoring
    );
}

const jobInfoArr = Array.from({ length : 300 }, () => generateRandomJob());

export default jobInfoArr;