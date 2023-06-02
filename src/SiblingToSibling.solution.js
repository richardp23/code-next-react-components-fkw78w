import React, { useState } from 'react';

const EMPTY_MESSAGE = {
  from: '',
  text: '',
};

// TODO: Update this component to be able to accept messages from Foo and Bar.
export const SiblingToSibling = () => {
  const [message, setMessage] = useState(EMPTY_MESSAGE);

  const onMessage = (message) => {
    setMessage(message);
  };

  return (
    <>
      <h2>SiblingToSibling</h2>

      <Foo message={message} onMessage={onMessage} />

      <Bar message={message} onMessage={onMessage} />

      <Messenger name={'baz'} message={message} onMessage={onMessage} />
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
      <div>
        last message from '{message.from}': {message.text}
      </div>
      <div className="input-group">
        <input className="form-control" onChange={onChange} value={text} />
        <button className="btn btn-primary" onClick={onClick}>
          submit
        </button>
      </div>
    </>
  );
};

// TODO: Update this component to mirror Foo (except for one part).
const Bar = (props) => {
  const message = props.message;

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    if (props.onMessage) {
      props.onMessage({ from: 'bar', text });
    }
  };

  return (
    <>
      <h3>Bar</h3>
      <div>
        last message from '{message.from}': {message.text}
      </div>
      <div className="input-group">
        <input className="form-control" onChange={onChange} value={text} />
        <button className="btn btn-primary" onClick={onClick}>
          submit
        </button>
      </div>
    </>
  );
};

// BONUS: Foo and Bar have a lot of duplicate functionality. Create a component
// that abstracts this away. Add it as a Baz sibling.
const Messenger = (props) => {
  const name = props.name;
  const message = props.message;
  const onMessage = props.onMessage;

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    if (onMessage) {
      onMessage({ from: name, text });
    }
  };

  return (
    <>
      <h3>{capitalize(name)}</h3>
      <div>
        last message from '{message.from}': {message.text}
      </div>
      <div className="input-group">
        <input className="form-control" onChange={onChange} value={text} />
        <button className="btn btn-primary" onClick={onClick}>
          submit
        </button>
      </div>
    </>
  );
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
