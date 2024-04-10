import s from './App.module.scss';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';

function App() {
  return (
    <div className={s.App}>
      <Header />
      <MainPage />
      <footer>footer</footer>
    </div>
  );
}

export default App;
