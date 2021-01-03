import React from "react"
import { AppProps, NextWebVitalsMetric } from "next/app"
import { NextPage } from "next"
import { ThemeProvider } from "styled-components"

import DefaultLayout from "@/layouts/Default"

import GlobalStyles from "@/styles/Global"
import theme from "../styles/theme"
import withDarkMode from "next-dark-mode"

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>

			<DefaultLayout>
				<GlobalStyles />

				<Component {...pageProps} />
			</DefaultLayout>
		</ThemeProvider>
		
	)
}

export const reportWebVitals = (metric: NextWebVitalsMetric): void  => {
	window["metrics"] = [
		...(window["metrics"] || []),
		metric
	] as NextWebVitalsMetric[]
}

export default App;
