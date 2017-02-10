import { configure } from '@kadira/storybook';

const req = require.context('../components', true, /.stories.jsx$/);
const _ = require('lodash');

function loadStories() {
  _.forEach(req.keys(), req);
}

configure(loadStories, module);