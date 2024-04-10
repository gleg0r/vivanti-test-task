import s from './App.module.scss';
import { Header } from './components/Header/Header';
import { MainBlock } from './components/MainBlock/MainBlock';
import { LaboratoryBlock } from './components/LaboratoryBlock/LaboratoryBlock';
function App() {

  return (
    <div className={s.App}>
      <Header />
      <main>
        <MainBlock />
        <p className={s.App__welcome}>
          Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары — 
          ваш надежный партнер в обеспечении качественной и точной диагностики!
        </p>
        <LaboratoryBlock />
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App
