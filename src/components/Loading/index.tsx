import React, { useState } from "react"

import {
	LoadingContainer,
	Logo
} from "@/components/Loading/styles"

import useDidMount from "@/hooks/useDidMount"

import { environmentConfig } from "@/config/environment"

const Loading: React.FC = () => {
	const [isLoaded, setIsLoaded] = useState(environmentConfig.isDev)

	useDidMount(() => {
		const stateCheckInterval = setInterval(() => {
			if (document.readyState === "complete") { 
				clearInterval(stateCheckInterval);
				
				setTimeout(() => {
					setIsLoaded(true)
				}, 3000)
			}
		}, 100)
	})

	return (
		<LoadingContainer isLoaded={isLoaded}>
			<Logo
				src="/images/new-logo.webp"
				alt="logo"
			/>
		</LoadingContainer>
	)
}

export default Loading
