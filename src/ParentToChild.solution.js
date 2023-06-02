import React, { useState } from 'react';

// TODO: Without changing anything, what does this code do?
export const ParentToChild = () => {
  const [msg, setMsg] = useState('');

  // TODO: Update this code so that the fooified and barified versions of
  // the message are rendered when the input is changed.
  const onChange = (e) => {
    setMsg(e.target.value);
  };

  return (
    <>
      <h2>ParentToChild</h2>

      <div>
        <input id="msg" className="form-control" onChange={onChange} value={msg} />
      </div>

      <div>msg: {msg}</div>

      <Fooifier msg={msg} />
    </>
  );
};
const Fooifier = (props) => {
  const msg = props.msg;
  const msgWithFoo = `${msg} foo`;

  return (
    <>
      <div>fooified: {msgWithFoo}</div>
      {/* msg could also be assign it msg, it doesn't matter */}
      <Barifier msg={msgWithFoo} />
    </>
  );
};

const Barifier = (props) => {
  const msg = props.msg;
  const msgWithBar = `${msg} bar`;

  return (
    <>
      <div>barified: {msgWithBar}</div>
    </>
  );
};
