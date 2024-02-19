import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setValue((prev) => prev + 1);

  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log('I run when "counter" changes.');
  }, [counter]);

  useEffect(() => {
    console.log('I run only once.');
  }, []);

  useEffect(() => {
    console.log('I run when "keyword" changes.');
  }, [keyword]);

  useEffect(() => {
    console.log('I run when keyword & counter change');
  }, [keyword, counter]);

  const Hello = () => {
    useEffect(() => {
      console.log('created :)');
      return () => console.log('destroyed :(');
    }, []);
    return <h1>Hello</h1>;
  };

  const [showing, setShowing] = useState(false);

  const onShowClick = () => setShowing((prev) => !prev);

  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={'Continue'} />
      <hr />
      <input value={keyword} onChange={onChange} type="text" placeholder="Searcch here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <hr />
      {showing ? <Hello /> : null}
      <button onClick={onShowClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
};

export default App;
