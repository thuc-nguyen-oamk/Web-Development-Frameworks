import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Notification from './components/Notification';
import Container from './components/Container';

function App() {
  return (
    <div>
      <Header />

      <NavBar />

      <Notification
        title="LEVYARVOSTELU"
        text="Haloo Helsinki! teki kahden tähden levyn, joka on isolla tavalla ihan kiva"
        bgColor="primary"
      />

      <Notification
        title="PÄIVÄN TIMANTTI"
        text="HS:n erikoisartikkeli kertoo, mitä 11.9.2001 tapahtui ja miten se oli mahdollista
              MAINOS: Aloita aamusi Hesarilla. Tutustu nyt 2 viikkoa maksutta!"
        bgColor="primary"
      />

      <Notification
        title="MAINOS"
        text="Aloita aamusi Hesarilla. Tutustu nyt 2 viikkoa maksutta!"
        bgColor="secondary"
      />

      <Container />


    </div>

  );
}

export default App;
