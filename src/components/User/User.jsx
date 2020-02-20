import React from 'react';
import styled from 'styled-components';
import {
      Link,
} from "react-router-dom";

const Root = styled.a`
    color: blue;
`;

const Title = styled.p`
      font-size: 1rem;
`;

const User = ({
      className,
      name,
}) => (
            <Root
                  className={className}
            >
                  <Link to={"/users/" + name}>
                        <Title>{name}</Title>
                  </Link>
            </Root>
      );

export default User;
