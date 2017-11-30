import React from 'react';
import NameField from './NameField';
import SubmitButton from './SubmitButton';
import Greeting from './Greeting';

const Hello = () => (
  <section>
    <h1>Hello, world!</h1>
    <p>What is your name?</p>
    <NameField />
    <SubmitButton />
    <Greeting />
  </section>
)

export default Hello;
