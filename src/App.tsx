import s from './App.module.scss';
import { Header } from './components/Header/Header';

function App() {

  return (
    <div className={s.App}>
      <Header />
      <main>main</main>
      <footer>footer</footer>
    </div>
  )
}

export default App
