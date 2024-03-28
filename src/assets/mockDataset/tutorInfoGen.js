import PrefferedTutoringStyleArr from '../mockDataset/PrefferedTutoringStyle';
import { DistrictInfoArr } from '../mockDataset/DistrictInfo';
import MediumInfoArr from '../mockDataset/MediumInfo';

class Tutor {
    constructor(
      id,
      tutorName,
      gender,
      email,
      phone,
      tutionDistrict,
      tutionLocation,
      profilePicture,
      varsity,
      subject,
      Medium,
      classes,
      tutionType,
      isPremium
    ) {
      this.id = id;
      this.tutorName = tutorName;
      this.gender = gender;
      this.email = email;
      this.phone = phone;
      this.tutionDistrict = tutionDistrict;
      this.tutionLocation = tutionLocation;
      this.profilePicture = profilePicture;
      this.varsity = varsity;
      this.subject = subject;
      this.Medium = Medium;
      this.classes = classes;
      this.tutionType = tutionType;
      this.isPremium = isPremium;
    }
  }
  
 // Function to generate random data
function generateRandomTutor() {
    const names = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Brown', 'David Wilson'];
    const genders = ['Male', 'Female'];
    const emails = ['one@gmail.com', 'two@gmail.com', 'three@gmail.com']
    const phones = ['01791290951', '01612807072', '01756435421', '01314563456', '01831231276']
    const varsity = ['Bangladesh University of Engineering and Technology (BUET)', 'Khulna University of Engineering and Technology (KUET)', 'Rajshahi University of Engineering and Technology (RUET)', 'Chittagong University of Engineering and Technology (CUET)', 'Dhaka University ( DU )', 'Shahjalal University of Science and Technology (SUST)']
    const subject = ['CSE', 'ME', 'Software', 'Physics', 'Math', 'Chemistry','Biology']
    const premium = [true , false];
  
    
    
  
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomGender = genders[Math.floor(Math.random() * genders.length)];
    const randomEmail = emails[Math.floor(Math.random() * emails.length)];
    const randomPhone = phones[Math.floor(Math.random() * phones.length)];
    const randomDistrict = Math.floor(Math.random() * DistrictInfoArr.length);
    const randomVarsity = varsity[Math.floor(Math.random() * varsity.length)];
    const randomSubject = subject[Math.floor(Math.random() * subject.length)];
    const randomMedium = Math.floor(Math.random() * MediumInfoArr.length);
    const randomTutionType = Math.floor(Math.random() * PrefferedTutoringStyleArr.length);
    const randomPremium = premium[Math.floor(Math.random() * premium.length)];
    
    const imageUrls = [];

    for (let i = 1; i <= 100; i++) {
        imageUrls.push(`https://randomuser.me/api/portraits/men/${i}.jpg`);
    }
  
    const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  
    return new Tutor(
      "TS-"+ Math.floor(Math.random *1000),
      randomName,
      randomGender,
      randomEmail,
      randomPhone,
      DistrictInfoArr[randomDistrict].district,
      DistrictInfoArr[randomDistrict].area[Math.floor(Math.random() * DistrictInfoArr[randomDistrict].area.length)],
      randomImageUrl,
      randomVarsity,
      randomSubject,
      MediumInfoArr[randomMedium].medium,
      MediumInfoArr[randomMedium].classes[Math.floor(Math.random() * MediumInfoArr[randomMedium].classes.length)],
      PrefferedTutoringStyleArr[randomTutionType],
      randomPremium
    );
  }
  // Generating 20 mock data arrays
  const teacherInfoArr = Array.from({ length: 100 }, () => generateRandomTutor());
  // console.log(teacherInfoArr);
//   console.log(mockData);
export default  teacherInfoArr;
  