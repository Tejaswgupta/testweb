import React from "react"

import {
	HomeContainer
} from "@/layouts/Home/styles"

import { buildCDNUrl } from "@/lib/cdn"
import { appUrls } from "@/lib/personal"

import {
	SiriWave,
	MetaTag
} from "@/components"

type HomeLayoutProps = {
	isMobile?: boolean
}

const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
	const { children, isMobile } = props

	const 	title =  "Paravijjyan: Your Personal Mindfulness Assistant";
	const description = "Paravijjyan uses Machine learning you help you do yoga more interactively";

	return (
		<HomeContainer>
			<MetaTag
				page={{
					title,
					description
				}}
				share={{
					title,
					description,
					imageSrc: buildCDNUrl("images/new-logo.webp"),
					url: appUrls.home,
					type: "website"
				}}
			/>

			{children}

			{/* {!isMobile && (
				<SiriWave />
			)} */}
			<SiriWave/>
		</HomeContainer>
	)
}

export default HomeLayout
