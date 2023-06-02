# code-next-react-components

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/code-next-react-components)

A lesson for the [Code Next](https://codenext.withgoogle.com/) React club.

In this lesson, engineers will

- recall how to communicate from a parent to a child component
- learn how to communicate from a child to a parent or sibling component
- practice state management

## Component Relationships

A parent component renders its child components. This is best illustrated with an example:

```jsx
const Parent = () => {
  return (
    <div>
      This text is rendered from the Parent
      <Child />
      <Sibling />
    </div>
  );
};

const Child = () => {
  return <div>This text is rendered from the Child</div>;
};

const Sibling = () => {
  return <div>This text is rendered from the Sibling</div>;
};
```

Keep in mind that the Sibling component is also a Child. 

There are three relationships of concern:

- Parent -> Child
- Child -> Parent
- Sibling -> Sibling

## Parent to Child

Parents talk to children through props. It's as simple as that.

```jsx
const Parent = () => {
  const [secret, setSecret] = useState('foo');

  return <Child msg={secret} />;
};

const Child = (props) => {
  const msg = props.msg;

  return <div>msg</div>;
};
```

Typically, state lives in a parent component and it only gets passed down to the components that need to know about it.

### YOUR TURN

Open `src/ParentToChild.js` and practice.

## Child to Parent

Sometimes you want a child to tell a parent that something happened.

```jsx
const Foo = () => {
  const onClick = () => {
    console.log('clicked!');
  };
  return <button onClick={onClick}></button>
};
```

Seem familiar? Children talk to parents by passing a _function_ as a prop. It's essentially an event that the parent can "listen" to.

Consider a todo list app. The todos data should live in a parent component, but the parent needs to know when a todo list item has been clicked.

```jsx
const INITIAL_TODOS = [
  { id: 1, text: 'master react' },
  { id: 2, text: 'walk dog' },
  { id: 3, text: 'practice guitar' },
];

const NOOP = () => {
  // noop
};

const TodoList = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const onTodoListItemClick = (todo) => {
    setTodos((todos) => todos.filter(({ id }) => todo.id !== id ));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onClick={onTodoListItemClick} />
      ))}
    </ul>
  );
};

const TodoListItem = (props) => {
  const todo = props.todo;
  // onClick might be undefined, so we use a noop function to ensure we can call it.
  const onClick = props.onClick ?? NOOP;

  return (
    <li>{todo.text} <button onClick={() => onClick(todo)} >done</button></li>
  );
};
```

### YOUR TURN

Open `src/ChildToParent.js` and practice.

## Sibling to Sibling

What do siblings have in common? A parent.

- Do we know how to communicate from child to parent? Yes, through function props.
- Do we know how to communicate from parent to child? Yes, through props.

Knowing these things, how can we communicate between siblings? Take a moment to think about this before reading on.

The answer is that we let the state "live" in the parent, and we make the parent in charge of relaying those messages.

### YOUR TURN

Open `src/ChildToChild.js` and practice.

## General Tips

Designing components is an art and a science. Sometimes you'll easily find communication structures that work well. Other times, you might find yourself fighting with React.

If you find yourself in such a situation, one of the good things you can do is ask yourself where state should live. The tradeoff of lifting state higher is that potentially more components will know about it. Usually, the less state you're juggling around, the better.

Design components similarly to how you would design classes. Particularly, design components such that they don't have to know anything about their parent or siblings. They will have to know some things about their children, but try not to couple things past the first depth of children. You'll find that sometimes you'll need to do this, and that's ok.