import { create} from "zustand";

const usePremiumTutorFilter = create ((set)=>({
    tutorFilterInfo : {
        tutorType : "",
        tutorGender : "",
        tutordistrict : "",
        tutorArea : "",
        tutorMedium : "",
        tutorClass : ""
    },

    updateTutorFilterInfo: (info) => set((state) =>{
        return {...state , tutorFilterInfo : info};
    })
}));

export default usePremiumTutorFilter;