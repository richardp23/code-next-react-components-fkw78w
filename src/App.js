import React from 'react';
import { ParentToChild } from './ParentToChild';
import { ChildToParent } from './ChildToParent';
import { SiblingToSibling } from './SiblingToSibling';

export default function App() {
  return (
    <div className="container">
      <h1>code-next-react-components</h1>

      <hr />

      <ParentToChild />

      <br />

      <ChildToParent />

      <br />

      <SiblingToSibling />
    </div>
  );
}
