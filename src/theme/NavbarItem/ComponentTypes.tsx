import React from 'react';
import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import {Github, SwitchLocal} from '@site/src/components';


 export default {
  ...ComponentTypes,
  'custom-github': () => (
    <Github>
      <Github.Star />
      <Github.Fork />
    </Github>
  ),
  'custom-local': SwitchLocal
};

