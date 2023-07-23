/* @refresh reload */
import { render } from 'solid-js/web';
import {Route, Router, Routes} from "@solidjs/router";
import styles from '/src/App.module.css';

import './index.css';
import App from './App';
import Agreement from './pages/agreement';
import Contact from "./pages/contact";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <div class={styles.App}>
      <div class={styles.header}>
        <div class={styles.topnav}>
          <a href="/">
            <div>
              <span class="material-symbols-outlined">location_city</span> 
              <p>Şehirli</p>
            </div>
          </a>
        </div>
        
        <Router>
          <Routes>
            <Route path="/" component={App}/>
            <Route path="/sozlesme" component={Agreement}/>
            <Route path="/ulas" component={Contact}/>
          </Routes>
        </Router>
        
        <div class={styles.footer}>
          <a class={styles.a} href="/ulas">Bize Ulaşın</a>
          <a style="font-size: 20px;"> &#9679; </a>
          <a class={styles.a} href="/sozlesme">Kullanıcı Sözleşmesi</a>
          <a style="font-size: 20px;"> &#9679; </a>
          <a class={styles.a} href="https://github.com/Sehirli">GitHub</a>
          <a style="font-size: 20px;"> &#9679; </a>
          <a class={styles.a} href="https://emirsurmen.com/#/" target="_blank">© 2023 Emir Sürmen</a>
        </div>
      </div>
    </div>
  ),
  root!
);
