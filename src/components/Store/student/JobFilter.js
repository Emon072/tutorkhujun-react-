import { create} from "zustand";

const useJobFilter = create ((set)=>({
    jobFilterInfo : {
        TutionType : "",
        tutorGender : "",
        tutordistrict : "",
        tutorArea : "",
        tutorMedium : "",
        tutorClass : ""
    },

    updateJobFilterInfo: (info) => set((state) =>{
        return {...state , jobFilterInfo : info};
    })
}));

export default useJobFilter;