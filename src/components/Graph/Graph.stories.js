import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
      withKnobs,
      text,
} from '@storybook/addon-knobs';
import Graph from './Graph';

const Box = styled.div`
    max-width: 14rem;
    border: 1px solid var(--colors-red);
    padding: 1rem;
`;

storiesOf('Graph', module)
      .addDecorator(withKnobs)
      .add('default', () => (
            <>
                  <h2>Graph</h2>
                  <Box>
                        <Graph
                              personId={text('personId', '0')}
                        />
                  </Box>

            </>
      ));