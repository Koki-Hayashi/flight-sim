import React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import {NextPageContext} from 'next';

interface Context extends NextPageContext {
  renderPage: (arg: any) => any;
}

export default class MyDocument extends Document<{ styleTags: any }> {
  static async getInitialProps({renderPage}: Context): Promise<any> {

    const sheet = new ServerStyleSheet();

    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return {...page, styleTags};
  }

  render(): React.ReactElement {
    return (
      <Html>
        <Head/>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}
