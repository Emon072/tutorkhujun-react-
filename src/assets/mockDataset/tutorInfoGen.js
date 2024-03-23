class Tutor {
    constructor(
      name,
      profilePicture,
      isPremium,
      university,
      subject,
      gender,
      qualification,
      areaCovered,
      tutorLocation,
      memberSince,
      totalViews,
      expectedMinimumSalary,
      currentStatusForTuition,
      daysPerWeek,
      preferredTuitionStyle,
      placeOfLearning,
      extraFacilities,
      preferredMediumOfVersion,
      preferredClass,
      preferredSubjects,
      preferredTime,
      preferredAreaToTeach
    ) {
      this.name = name;
      this.profilePicture = profilePicture;
      this.isPremium = isPremium;
      this.university = university;
      this.subject = subject;
      this.gender = gender;
      this.qualification = qualification;
      this.areaCovered = areaCovered;
      this.tutorLocation = tutorLocation;
      this.memberSince = memberSince;
      this.totalViews = totalViews;
      this.expectedMinimumSalary = expectedMinimumSalary;
      this.currentStatusForTuition = currentStatusForTuition;
      this.daysPerWeek = daysPerWeek;
      this.preferredTuitionStyle = preferredTuitionStyle;
      this.placeOfLearning = placeOfLearning;
      this.extraFacilities = extraFacilities;
      this.preferredMediumOfVersion = preferredMediumOfVersion;
      this.preferredClass = preferredClass;
      this.preferredSubjects = preferredSubjects;
      this.preferredTime = preferredTime;
      this.preferredAreaToTeach = preferredAreaToTeach;
    }
  }
  
 // Function to generate random data
function generateRandomTutor() {
    const names = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Brown', 'David Wilson'];
    const premium = [true , false];
    const genders = ['Male', 'Female'];
    const qualifications = ['Bachelor\'s Degree', 'Master\'s Degree', 'PhD'];
    const locations = ['City A', 'City B', 'City C', 'City D'];
    const statuses = ['Available', 'Unavailable'];
    const styles = ['Online', 'Home', 'Both'];
    const classes = ['Primary', 'Secondary', 'High School', 'College'];
    const subjects = ['Math', 'Science', 'English', 'History', 'Programming'];
    const times = ['Morning', 'Afternoon', 'Evening'];
    const areas = ['Urban', 'Suburban', 'Rural'];
    const university = ['Bangladesh University of Engineering & Technology' , 'Khulna University of Engineering & Technology' , 'Rajshahi University of Engineering & Technology' ,'Chittagong University of Engineering & Technology', 'Dhaka University', 'Shahjalal University of Engineering & Technology'];
    const subject = ['CSE', 'ME', 'Software', 'Physics', 'Math', 'Chemistry','Biology']
  
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomPremium = premium[Math.floor(Math.random() * premium.length)];
    const randomGender = genders[Math.floor(Math.random() * genders.length)];
    const randomQualification = qualifications[Math.floor(Math.random() * qualifications.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const randomSubjects = subjects.slice(0, Math.floor(Math.random() * subjects.length) + 1);
    const randomTime = times[Math.floor(Math.random() * times.length)];
    const randomArea = areas[Math.floor(Math.random() * areas.length)];
    const randomUniversity = university[Math.floor(Math.random() * university.length)];
    const randomSubject = subject[Math.floor(Math.random() * subject.length)];
  
    // Example real image URLs
    const imageUrls = [
      'https://randomuser.me/api/portraits/men/1.jpg',
      'https://randomuser.me/api/portraits/men/2.jpg',
      'https://randomuser.me/api/portraits/men/3.jpg',
      'https://randomuser.me/api/portraits/men/4.jpg',
      'https://randomuser.me/api/portraits/men/5.jpg',
        'https://randomuser.me/api/portraits/men/6.jpg',
        'https://randomuser.me/api/portraits/men/7.jpg',
        'https://randomuser.me/api/portraits/men/8.jpg',
        'https://randomuser.me/api/portraits/men/9.jpg',
        'https://randomuser.me/api/portraits/men/10.jpg',
        'https://randomuser.me/api/portraits/men/11jpg',
        'https://randomuser.me/api/portraits/men/12.jpg',
        'https://randomuser.me/api/portraits/men/13.jpg',
       ' https://randomuser.me/api/portraits/men/14.jpg',
        'https://randomuser.me/api/portraits/men/15.jpg',
        'https://randomuser.me/api/portraits/men/16.jpg'
      // Add more real image URLs here',
    ];
  
    const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  
    return new Tutor(
      randomName,
      randomImageUrl,
      randomPremium,
      randomUniversity,
      randomSubject,
      randomGender,
      randomQualification,
      Math.random() * 100, // Random area covered
      randomLocation,
      '2022-01-01', // Mock member since date
      Math.floor(Math.random() * 1000), // Random total views
      Math.floor(Math.random() * 1000), // Random expected minimum salary
      randomStatus,
      Math.floor(Math.random() * 7) + 1, // Random days per week
      randomStyle,
      'Any', // Mock place of learning
      'None', // Mock extra facilities
      'English', // Mock preferred medium of version
      randomClass,
      randomSubjects,
      randomTime,
      randomArea
    );
  }
  // Generating 20 mock data arrays
  const teacherInfoArr = Array.from({ length: 20 }, () => generateRandomTutor());
  // console.log(teacherInfoArr);
//   console.log(mockData);
export default  teacherInfoArr;
  