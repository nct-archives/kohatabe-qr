import type { NextPage } from 'next'
import { useState } from 'react'

import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/common.module.scss'

import QRCode from 'qrcode.react'
import ReactJsBarcode from 'react-jsbarcode'

const Home: NextPage = () => {
  const [error, setError] = useState('')

  const [emailInput, setEmailInput] = useState('')
  const [email, setEmail] = useState('')
  const [domain, setDomain] = useState('')

  const applyEmail = () => {
    setError('')
    setEmail('')

    const emailObj = emailInput.split('@')
    console.log(emailObj)

    if (!emailInput || emailObj.length !== 2) {
      setError('メールアドレスを入力してください')
      return
    }

    setEmail(emailObj[0])
    setDomain(emailObj[1])
  }

  return (
    <div>
      <Head>
        <title>
          小春六花はヨーグルトが食べたい 参加特典 現地受取り支援システム
        </title>
        <meta
          property="og:title"
          content="小春六花はヨーグルトが食べたい 参加特典 現地受取り支援システム"
        ></meta>
        <meta
          property="og:description"
          content="コハタベ各種企画の参加特典を受け取る際の手続きを簡略化します。"
        ></meta>
        <meta name="keywords" content="小春六花,オンリーイベント"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://kohatabe.jp"></meta>
        <meta property="og:image" content="https://kohatabe.jp/icon.png"></meta>
        <meta
          property="og:site_name"
          content="小春六花はヨーグルトが食べたい 参加特典 現地受取り支援システム"
        ></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@nct_kohatabe"></meta>
        <meta name="twitter:url" content="https://kohatabe.jp/icon.png"></meta>
        <meta
          name="twitter:title"
          content="小春六花はヨーグルトが食べたい 参加特典 現地受取り支援システム"
        ></meta>
        <meta
          name="twitter:description"
          content="コハタベ各種企画の参加特典を受け取る際の手続きを簡略化します。"
        ></meta>
        <meta
          name="twitter:image"
          content="https://kohatabe.jp/icon.png"
        ></meta>
        <link rel="canonical" href="https://kohatabe.jp" />
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
        参加特典 現地受取り支援システム
      </div>
      <main className={styles.main}>
        <p>
          開催記念合同誌、ヨーグルト動画投稿祭の参加特典を配布する際の本人確認をいたします。
          <br />
          フォーム送信時にご入力いただいたメールアドレスをご入力いただき、表示されたバーコードをサークルメンバーにお見せください。
        </p>

        {error ? (
          <div className={`${styles.alert} ${styles.alert_danger}`}>
            {error}
          </div>
        ) : (
          <></>
        )}

        {email ? (
          <div className={styles.codeArea}>
            <div className={styles.codeArea_codeWrap}>
              {/* <QRCode value={email} includeMargin={true} size={150}></QRCode> */}
              <ReactJsBarcode
                className={styles.codeArea_code}
                value={email}
                options={{ format: 'code39', displayValue: false }}
              />
              <ReactJsBarcode
                className={styles.codeArea_code}
                value={domain}
                options={{ format: 'code39', displayValue: false }}
              />
            </div>
            <div className={styles.codeArea_content}>
              {email}@{domain}
            </div>
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
                  e.preventDefault()
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
            バーコードを表示
          </button>
        </form>
      </main>
    </div>
  )
}

export default Home
