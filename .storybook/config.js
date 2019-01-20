import { configure } from '@storybook/react';

import 'happo-plugin-storybook/register';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
