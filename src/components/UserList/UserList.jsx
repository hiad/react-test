import React, { useState, useEffect } from 'react';
import User from '../User/User';
import { fetch } from '../../utils/utils';
import { Table } from 'reactstrap';
import {
      Link,
} from "react-router-dom";
import {
      H5,
      Button,
} from './StyledComponents';


const UserList = ({
      className,
}) => {
      const [data, setData] = useState([]);

      const gettingUsers = async () => {
            try {
                  //TODO: Use env var to url
                  const { data } = await fetch('https://my-json-server.typicode.com/sgcis/codetest/persons');
                  setData(data);
            } catch (err) {
                  //TODO: Handle errors
                  console.log(err);
            }
      }

      useEffect(() => {
            gettingUsers();
      }, []);

      return (
            <>
                  <H5>Person List</H5>
                  <Link to={"/add"}>
                        <Button>Add new person</Button>
                  </Link>
                  <Table
                        className={className}
                  >
                        <thead>
                              <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Actions</th>
                                    <th>Modal</th>
                              </tr>
                        </thead>
                        <tbody>
                              {data.map((user, idx) => (
                                    <User
                                          key={idx}
                                          {...user}
                                    />
                              ))}
                        </tbody>
                  </Table>
            </>
      )
};

export default UserList;
