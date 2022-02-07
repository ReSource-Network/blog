import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.png' />

            <link rel='apple-touch-icon' sizes='192x192' href='/logo@192.png' />
            <link
              rel='icon'
              type='image/png'
              sizes='64x64'
              href='/logo@64.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='512x512'
              href='/logo@512.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='1024x1024'
              href='/logo@1024.png'
            />

            <link rel='manifest' href='/manifest.json' />
          </Head>

          <body>
            <script src='noflash.js' />

            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
