import axios from 'axios';
import { ImgResponse } from './components/types';

const KEY = 'dPdHUq4Jmuk-MwG5sdvUeRcZGH2g4tbB4Hj9G9VS1W0';
axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';

const axiosOptions = {
  headers: {
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${KEY}`,
  },
  params: {
    per_page: 20,
    query: '',
    page: 1,
  },
};

const fetchImg = async (value: string, page: number): Promise<ImgResponse> => {
  axiosOptions.params.query = value;
  axiosOptions.params.page = page;
  const response = await axios.get<ImgResponse>('', axiosOptions);
  return response.data;
};

export default fetchImg;