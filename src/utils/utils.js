import axios from 'axios';

const fetch = async (url) => await axios(
      url,
);

const mapperUsers = (users) => (
      users.map((
            {
                  id,
                  login,
            }) => ({
                  id,
                  name: login
            }))
);


export {
      fetch,
      mapperUsers,
}