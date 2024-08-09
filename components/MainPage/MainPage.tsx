import React from 'react'
import styles from "../../styles/main-page/index.module.css";
import Link from 'next/link';

const MainPage = () => {
  return (
    <main className={styles.main}>
        <div>
          <h1>Тест сайта</h1>
          <Link href='/settings'>Кнопка</Link>
        </div>
    </main>
  )
}

export default MainPage