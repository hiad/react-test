import React, { useState, useEffect } from 'react';
import User from '../User/User'
import styled from 'styled-components';
import { fetch, mapperUsers } from '../../utils/utils';


const Root = styled.a`
    color: blue;
`;


const UserList = ({
      className,
}) => {
      const [data, setData] = useState([]);

      const gettingUsers = async () => {
            try {
                  //TODO: Use env var to url
                  const { data } = await fetch('https://api.github.com/users');
                  const users = mapperUsers(data);
                  setData(users.slice(0, 5));
            } catch (err) {
                  //TODO: Handle errors
                  console.log(err);
            }
      }

      useEffect(() => {
            gettingUsers();
      }, []);

      return (
            <Root
                  className={className}
            >
                  {data.map((user) => (
                        <User
                              {...user}
                              onClickAction={
                                    () => {
                                          
                                    }
                              }
                        />
                  ))}
            </Root>
      )
};

export default UserList;
