import logo from './logo.svg';
import styles from './styles/app.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.appheader}>
        <img src={logo} className={styles["app-logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.applink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
