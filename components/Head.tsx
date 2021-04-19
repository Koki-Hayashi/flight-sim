import React from 'react'

import _Head from 'next/head'

export const Head: React.FC = () => {

  return <_Head>
    <title>flight sim</title>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'/>
    <link href='https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap' rel='stylesheet'/>
    <link href='https://fonts.googleapis.com/css?family=Noto+Sans+SC&display=swap' rel='stylesheet'/>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description" content={"flight simulator"}/>
    <meta name="robots" content="noindex"/>
  </_Head>
}