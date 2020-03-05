import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
      withKnobs,
      text,
} from '@storybook/addon-knobs';
import User from './User';
import { Router } from 'react-router-dom';
import { ModalProvider } from "react-modal-hook";
import { createMemoryHistory } from 'history';

const Box = styled.div`
    max-width: 14rem;
    border: 1px solid var(--colors-red);
    padding: 1rem;
`;

storiesOf('User', module)
      .addDecorator(withKnobs)
      .add('default', () => {
            const history = createMemoryHistory({ initialEntries: ['/'] });
            return (
                  <>
                        <Router history={history}>
                              <ModalProvider>
                                    <h2>User</h2>
                                    <Box>
                                          <table>
                                                <tbody>
                                                      <User
                                                            name={text('name', 'Hector')}
                                                            age={text('age', '12')}
                                                      />
                                                </tbody>
                                          </table>
                                    </Box>
                              </ModalProvider>
                        </Router>

                  </>
            )
      });