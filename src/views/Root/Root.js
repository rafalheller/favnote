import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>hello heller</h1>
    <Button>Close / save</Button>
    <Button secondary>Remove</Button>
    <Button active>Remove</Button>
  </div>
);

export default Root;
