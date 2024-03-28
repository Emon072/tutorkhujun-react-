import { create } from 'zustand';

const useTutorPrimaryProfile = create((set) =>({
    tutorPrimaryInfoStore: {
        id : "",
        tutorName : "",
        gender : "",
        email : "",
        phone : "",
        tutionDistrict : "",
        tutionLocation : "",
        profilePicture : "",
        varsity : "",
        subject : "",
        Medium : "",
        classes : [],
        tutionType : "",
        isPremium : ""
     },

    setTutorPrimaryInfoStore: (info) => set((state) => {
        return { ...state, tutorPrimaryInfoStore: info };
    }),
    setTutorPrimaryInfoToDefaultStore : () => set((state) =>{
        return {...state , tutorPrimaryInfoStore : {
            id : "",
            tutorName : "",
            gender : "",
            email : "",
            phone : "",
            tutionDistrict : "",
            tutionLocation : "",
            profilePicture : "",
            varsity : "",
            subject : "",
            Medium : "",
            classes : [],
            tutionType : "",
            isPremium : ""
        }}
    })
}));

export default useTutorPrimaryProfile;
