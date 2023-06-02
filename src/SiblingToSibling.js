import React, { useState } from 'react';

const EMPTY_MESSAGE = {
  from: '',
  text: '',
};

// TODO: Update this component to be able to accept messages from Foo and Bar.
export const SiblingToSibling = () => {
  const [message, setMessage] = useState(EMPTY_MESSAGE);

  return (
    <>
      <h2>SiblingToSibling</h2>

      <Foo message={message} />

      <Bar message={message} />
    </>
  );
};

const Foo = (props) => {
  const message = props.message;
  
  const [text, setText] = useState('');
  
  const onChange = (e) => {
    setText(e.target.value);
  };

  // TODO: Wire in this click handler somewhere reasonable.
  const onClick = () => {
    if (props.onMessage) {
      props.onMessage({ from: 'foo', text });
    }
  };

  return (
    <>
      <h3>Foo</h3>
      <div>last message from '{message.from}': {message.text}</div>
      <div className="input-group">
        <input className="form-control" onChange={onChange} value={text} />
        <button className="btn btn-primary">submit</button>
      </div>
    </>
  );
};

// TODO: Update this component to mirror Foo (except for one part).
const Bar = (props) => {
  const message = props.message;

  return (
    <>
      <h3>Bar</h3>
      <div>last message from '{message.from}': {message.text}</div>
      <div className="input-group">
        <input className="form-control" />
        <button className="btn btn-primary">submit</button>
      </div>
    </>
  );
};

// BONUS: Foo and Bar have a lot of duplicate functionality. Create a component
// that abstracts this away.
const Messenger = () => {};