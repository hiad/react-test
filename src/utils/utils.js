import axios from 'axios';

const fetch = async (url) => await axios(
      url,
);


export {
      fetch,
}