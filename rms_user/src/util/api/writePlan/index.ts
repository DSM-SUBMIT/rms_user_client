import uri from "../../../constance/uri";
import { contentTypeRequest } from "../../../constance/writePlan/index";
import { getRequest } from "../default";

export const getSearchProject = async (body: contentTypeRequest) => {
    try {
        const request = getRequest();
        const response = await request.post<contentTypeRequest>(uri.writePlan, body);
        return response;
      } catch (error) {
        throw error;
      }
  };