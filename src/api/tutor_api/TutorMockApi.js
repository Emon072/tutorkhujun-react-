export const TutorMockApi = (requestConfig) => {
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