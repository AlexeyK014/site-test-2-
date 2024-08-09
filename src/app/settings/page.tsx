import React from 'react'
import styles from '../../../styles/settings-page/index.module.css'
import Link from 'next/link'

const Page = () => {
  return (
    <div className={styles.settings}>
        <h2 className={styles.title_settings}>Settings</h2>
        <button className={styles.btn_settings}>Настроить</button>
        <div className={styles.link}>
          <Link href='/' className={styles.back_settings}>
            <p>На главную</p>
          </Link>
        </div>
    </div>
  )
}

export default Page