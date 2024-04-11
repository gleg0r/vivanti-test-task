import s from './App.module.scss';
import { Provider } from 'react-redux';
import store from './store';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <div className={s.App}>
        <Header />
        <MainPage />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
