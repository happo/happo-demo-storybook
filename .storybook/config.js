import { configure } from '@storybook/react';

import 'happo-plugin-storybook/addon';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
