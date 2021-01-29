import React, { useState } from "react"
import { AppProps, NextWebVitalsMetric } from "next/app"
import { NextPage } from "next"
import { ThemeProvider } from "styled-components"
import DefaultLayout from "@/layouts/Default"
import GlobalStyles from "@/themes/Global"

import  { darkTheme, lightTheme} from "../themes/theme";
import withDarkMode, { useDarkMode } from "next-dark-mode";



const App: NextPage<AppProps> = ({ Component  ,pageProps }) => {
	
	const {
		autoModeActive,
		autoModeSupported,
		darkModeActive,
		switchToAutoMode,
		switchToDarkMode,
		switchToLightMode,
	} = useDarkMode();
	

	return (
		<ThemeProvider theme={lightTheme}>

			<GlobalStyles />

			<DefaultLayout>		
				
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
