import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      Primary: 'hsl(49,100%,58%)',
      Secondary: 'hsl(196,83%,75%)',
      Tertiary: 'hsl(106,47%,64%)',
    };
    const defaultValue = 'hsl(49,100%,58%)';
    const groupId = 'GROUP-ID1';

    const value = select(label, options, defaultValue, groupId);

    return <Button color={value}>rafal</Button>;
  })
  .add('Secondary', () => <Button secondary>heller</Button>);
