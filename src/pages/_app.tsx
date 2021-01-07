import React from "react"
import { AppProps, NextWebVitalsMetric } from "next/app"
import { NextPage } from "next"
import { ThemeProvider } from "styled-components"

import DefaultLayout from "@/layouts/Default"

import GlobalStyles from "@/styles/Global"
import theme from "../styles/theme"
import withDarkMode from "next-dark-mode"
import { IntroProvider } from "@/components/Leon/context/IntroContext"
import { AnimatePresence } from "framer-motion"

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>

			<DefaultLayout>
				<GlobalStyles />
				<IntroProvider>
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps}  />
					</AnimatePresence>
				</IntroProvider>
				
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
