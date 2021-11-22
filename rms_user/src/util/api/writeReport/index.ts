import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';
import { ReportContentRequest } from '../../../constance/writeReport/index';
import { reducerType } from '../../../modules/redux/reducer';

export const WriteReportRequest = (state: reducerType['writeReport']): ReportContentRequest => {
  return {
    content: state.content.join('!@#$%'),
    videoUrl: state.videoUrl,
  };
};

export const SaveReport = async (accessToken: string, body: ReportContentRequest, id: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.post(uri.writeReport + `/${id}`, body);
    return response;
  } catch (error) {
    throw error;
  }
};

export const SubmitReport = async (accessToken: string, body: ReportContentRequest, id: number) => {
  try {
    await SaveReport(accessToken, body, id);
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.post(uri.writeReport + `/submit` + `/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
