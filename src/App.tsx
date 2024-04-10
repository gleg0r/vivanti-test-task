import s from './App.module.scss';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';
function App() {
  return (
    <div className={s.App}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
