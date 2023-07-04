import type { Component } from 'solid-js';

import styles from '.././App.module.css';

const Home: Component = () => {
    return (
        <div class={styles.centered}>
            <p style="padding: 30px">Şehirli, herkesten önce parmağının ucundan tüm olup biteni görmeni hedefliyor. İnsanların paylaştıkları olayları anında haritada görebilecek, kendin gördüğün olayları da paylaşabileceksin. Şehirli, sadece bir sosyal medya değil; <underline>bağımsız</underline> bir haber aracı.
            </p>
            <a class={styles.a}><img src="/src/assets/appstore_download.png" alt="App Store'dan indir" height="70px" style="vertical-align: center"/></a>
            <a>&ensp;</a>
            <a class={styles.a}><img alt="Google Play'den alın" src="/src/assets/googleplay_download.png" height="93px" style="vertical-align: bottom"/></a>
        </div>
    );
}

export default Home;
