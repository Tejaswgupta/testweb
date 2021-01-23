import React, { useMemo } from "react"
import Typical from "react-typical"
import { FaAngleDown } from "react-icons/fa"

import { Container, FrontPageContainer, FrontPageSubtitle, FrontPageTitle, KeepGoingButton, TypedContainer } from "./styles"
import SocialLinks from "../utils/SocialLinks"
import { Box } from "../Leon/styled"
import ReactTyped from "react-typed"


const Banner: React.FC = () => {
	const bannerType = useMemo(
		() => (

			<FrontPageContainer>	

				<FrontPageTitle> Tejaswa Gupta</FrontPageTitle>

				<FrontPageSubtitle>
					{/* // <Typical
			// 	steps={[
			// 		"Hey there",
			// 		1800,
			// 		"I am Tejaswa Gupta",
			// 		1800,
			// 		"I develop iOS apps",
			// 		800,
			// 		"I develop Android apps",
			// 		800,
			// 		"I develop Web apps",
			// 		800,
			// 		"I develop Machine learning algorithms"
					
			// 	]}
			// 	loop={Infinity}
			// 	wrapper="p"/>  */}

					<ReactTyped
						strings={[
							"I develop iOS apps",
							"I develop Android apps",
							"I develop Web apps",
						]}
						typeSpeed={40}
						backSpeed={20}
						backDelay={1150}
						showCursor
						cursorChar="|"
						loop
					/>

				</FrontPageSubtitle>
	
			</FrontPageContainer> 

		
		),
		[]
	)

	return (
		<Container id="banner">
			{bannerType}
			<SocialLinks />
			<KeepGoingButton href="#about">
				<FaAngleDown />
			</KeepGoingButton>
		</Container>
	)
}

export default Banner
