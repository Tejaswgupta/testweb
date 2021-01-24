import React, { useMemo } from "react"
import { FaAngleDown } from "react-icons/fa"

import { Container, FrontPageContainer, FrontPageSubtitle, FrontPageTitle, KeepGoingButton } from "./styles"
import SocialLinks from "../utils/SocialLinks"
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
							"I develop ML algorithms"
						]}
						typeSpeed={40}
						backSpeed={20}
						backDelay={1500}
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
			<KeepGoingButton href="#about" id='KeepGoingButton'>
				<FaAngleDown />
			</KeepGoingButton>
		</Container>
	)
}

export default Banner
