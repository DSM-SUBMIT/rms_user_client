import uri from "../../../constance/uri";
import { getRequestWithAccessToken } from '../default';
import { ContentRequest } from "../../../constance/writePlan/index";
import { reducerType } from "../../../modules/redux/reducer";

export const SavePlanRequest= (
  state : reducerType['writePlan'],
) : ContentRequest => {
  return {
    content : state.content,
    goal: state.goal,
    includeCode: state.includeCode,
    includeOthers: state.includeOthers,
    includeOutcome: state.includeOutcome,
    includeResultReport: state.includeResultReport,
    plannedEndDate: state.plannedEndDate,
    plannedStartDate: state.plannedEndDate}
  
}

export const SavePlan = async (accessToken: string, body: ContentRequest, projectId: number) => {
  try {
      const request = getRequestWithAccessToken(accessToken);
      const response = await request.post(uri.writePlan + `/${projectId}`, body);
      return response;
    } catch (error) {
      throw error;
    }
};


export const SubmitPlan = async (accessToken: string, body: ContentRequest, projectId: number) => {
  try {
    await SavePlan(accessToken, body, projectId);
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.post(uri.writePlan + `submit` + `/${projectId}`);
      return response;
  } catch (error) {
    throw error;
    }
}