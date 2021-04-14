import React from 'react'

const defaultTitle = 'Flight Simulator'

export const Head: React.FC = () => {
  return <Head>
    <title>{defaultTitle}</title>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
  </Head>
}