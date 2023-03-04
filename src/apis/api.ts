import axios from 'axios';

export const testApi = async () => {
  try {
    const response = await axios.get('/docs_list');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
