import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

class Test extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => this.setState({ ready: true }), 100);

    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule('.foobar { border: 1px solid red }');
  }

  render() {
    if (!this.state.ready) {
      return null;
    }
    return (
      <div className="foobar">
        I'm ready
      </div>
    );
  }
}
storiesOf('Test', module).add('asynchronus with inserted css', () => <Test />);
