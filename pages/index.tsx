import type { NextPage } from 'next'
import { useState } from 'react'

import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/common.module.scss'

import QRCode from 'qrcode.react'

const Home: NextPage = () => {
  const [error, setError] = useState('')

  const [emailInput, setEmailInput] = useState('')
  const [email, setEmail] = useState('')

  const applyEmail = () => {
    setError('')
    setEmail('')

    if (!emailInput) {
      setError('メールアドレスを入力してください')
      return
    }
    setEmail(emailInput)
  }

  return (
    <div>
      <Head>
        <title>小春六花はヨーグルトが食べたい 特典受取り</title>
      </Head>
      <div className={styles.header}>
        <Link href="/">
          <a>
            <Image
              alt="ロゴタイプ"
              src="/logotype.png"
              width={843 / 3}
              height={170 / 3}
            />
          </a>
        </Link>
        <br />
        特典受取り
      </div>
      <main className={styles.main}>
        {error ? (
          <div className={`${styles.alert} ${styles.alert_danger}`}>
            {error}
          </div>
        ) : (
          <></>
        )}

        {email ? (
          <div className={styles.qrCodeArea}>
            <div className={styles.qrCodeArea_code}>
              <QRCode value={email} includeMargin={true} size={150}></QRCode>
            </div>
            <div className={styles.qrCodeArea_content}>{email}</div>
          </div>
        ) : (
          <></>
        )}

        <form>
          <div className={styles.formPart}>
            <input
              className={styles.input}
              type="email"
              autoComplete="email"
              placeholder="メールアドレス"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key == 'Enter') {
                  applyEmail()
                }
              }}
            ></input>
            <span className={styles.input_label}>メールアドレス</span>
            <span className={styles.help}>
              フォーム送信の際にご入力していただいたメールアドレスです。
            </span>
          </div>
          <button
            type="button"
            className={styles.button}
            onClick={() => {
              applyEmail()
            }}
          >
            QRコードを表示
          </button>
        </form>
      </main>
    </div>
  )
}

export default Home
