import uri from "../../../constance/uri";
import { getRequestWithAccessToken } from "../default"

export const getDetailPlan = async (accessToken: string, id: string) => {
  try{
    const request  = getRequestWithAccessToken(accessToken);
    const response = await request.get(uri.detailPlan + `/${id}`);
    return response;
  } catch(error){
    throw error;
  }
}