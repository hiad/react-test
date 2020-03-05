import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import User from './User';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { ModalProvider } from "react-modal-hook";

//TODO: Move this function as a global.
function renderWithRouter(
      ui,
      { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
      return {
            ...render(
                  <Router history={history}>
                        <ModalProvider>
                              {ui}
                        </ModalProvider>
                  </Router>),
            // adding `history` to the returned utilities to allow us
            // to reference it in our tests (just try to avoid using
            // this to test implementation details).
            history,
      }
}

describe('User', () => {
      it('should find name', () => {
            renderWithRouter(
                  <table>
                        <tbody>
                              <User personId={0} name={'hector'} age={18} />
                        </tbody>
                  </table>
            );
            expect(screen.queryByText('18')).toBeInTheDocument();
      });

      it('should find age', () => {
            renderWithRouter(
                  <table>
                        <tbody>
                              <User personId={0} name={'hector'} age={18} />
                        </tbody>
                  </table>
            );
            expect(screen.queryByText('hector')).toBeInTheDocument();
            expect(screen.queryByText('18')).toBeInTheDocument();
      });
});
