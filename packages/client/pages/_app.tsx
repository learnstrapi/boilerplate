import { CSSReset, ThemeProvider } from "@chakra-ui/react"
import { appBg } from "assets/colors"
import { AppConfig } from "assets/config"
import { Meta } from "components"
import React from "react"

import { customTheme } from "../assets/theme"


interface IPropsMain {
  Component: React.FunctionComponent
  pageProps: object
}

function App({ Component, pageProps }: IPropsMain) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
        <Meta title={AppConfig.companyName} />
          <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            margin: 0;
            background-color: ${appBg};
          }
        `}
      </style>
    </ThemeProvider>
  )
}

export default App

export const getStaticProps = async () => {
  return {
    // Unlike `getInitialProps` the props are returned under a props key
    // The reasoning behind this is that there's potentially more options
    // that will be introduced in the future.
    // For example to allow you to further control behavior per-page.
    props: {}
  }
}
