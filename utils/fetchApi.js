import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '2eefe9369dmsh4b5233e1fb5cc10p145149jsnbe777db7bba5',
    },
  });

  return data;
};
