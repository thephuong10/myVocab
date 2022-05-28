import rootApi from "./index";

const vocabApi = {
  getAll: async () => await rootApi.getRequest("vocab/get/all"),
  create: async (data) => await rootApi.postOrPutRequest("vocab", data, "POST"),
  update: async (data) => await rootApi.postOrPutRequest("vocab", data, "PUT"),
  remove: async (id) => await rootApi.deleteRequest(`vocab/${id}`),
};

export default vocabApi;
