import React, {
      useState,
      useEffect,
} from 'react';
import styled from 'styled-components';
import { fetch, mapUser } from '../../utils/utils';


const Root = styled.div`
      color: blue;
`;

const CircleImage = styled.img`
      border: 1px solid red;
`;

const Wrapper = styled.div`

`;
const Title = styled.p`
      font-size: 1rem;
`;

const Location = styled.p`
      font-size: 0.75rem;
`;


const UserExpanded = ({
      className,
      location,
}) => {

      const [data, setData] = useState([]);
      //TODO: Fix getting id
      const { pathname } = location;
      const gettingUsers = async () => {
            try {
                  //TODO: Use env var to url
                  const {
                        data
                  } = await fetch('https://api.github.com' + pathname);
                  const {
                        login,
                        location,
                        avatar_url
                  } = data;
                  setData({
                        name: login,
                        location: location,
                        image: avatar_url
                  });
            } catch (err) {
                  //TODO: Handle errors
                  console.log(err);
            }
      }

      useEffect(() => {
            gettingUsers();
      });

      return (
            <Root
                  className={className}
            >
                  {
                        data &&
                        <>
                              <CircleImage src={data.image} />
                              <Wrapper>
                                    <Title>{data.name}</Title>
                                    <Location>{data.location}</Location>
                              </Wrapper>
                        </>}
            </Root>
      )
};

export default UserExpanded;
