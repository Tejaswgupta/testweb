import React from "react"
import { AppProps, NextWebVitalsMetric } from "next/app"
import { NextPage } from "next"
import { ThemeProvider } from "styled-components"

import DefaultLayout from "@/layouts/Default"

import GlobalStyles from "@/themes/Global"
import darktheme , {lightTheme} from "../themes/theme"

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={lightTheme}>

			<DefaultLayout>
				<GlobalStyles />

				<Component {...pageProps}  />

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
