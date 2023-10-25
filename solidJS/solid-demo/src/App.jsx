import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, createEffect, createMemo } from 'solid-js';

function App() {
  const [ count, setCount ] = createSignal(0);

  //signal derivados
  const doubleCount = () => count() * 2

  //signals memorizados
  const isDisibleByThree = createMemo(() => count() % 3 === 0);

  createEffect(() => {
    console.log('divisible by three change', isDisibleByThree());
  })

  return (
    <div class={styles.App}>
      <h1>Count: {count()}</h1>
      <h2>double count: {doubleCount()}</h2>
      <h2>is divisble by three: {isDisibleByThree() ? 'Yes' : 'No'}</h2>
      <button onclick={() => setCount(count() + 1)}>increment</button>
    </div>
  );
}

export default App;
