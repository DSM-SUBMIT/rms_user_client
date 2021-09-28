import axios from 'axios';

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'https://munchkin.entrydsm.hs.kr',
    withCredentials: true,
    headers: {
      withCredentials: true,
    },
  });
  return request;
};

export const getRequestWithAccessToken = (
  token: string,
  type: 'json' | 'blob' | 'text' = 'json',
) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'https://munchkin.entrydsm.hs.kr',
    headers: {
      Authorization: `Bearer ${token}`,
      withCredentials: true,
    },
    responseType: type,
    withCredentials: true,
  });
  return request;
};
