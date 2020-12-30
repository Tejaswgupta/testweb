import React, { useMemo } from "react"
import Typical from "react-typical"
import { FaAngleDown } from "react-icons/fa"

import { Container, KeepGoingButton } from "./styles"
import SocialLinks from "../utils/SocialLinks"

const Banner: React.FC = () => {
	const bannerType = useMemo(
		() => (
			<Typical
				steps={[
					"Hey there",
					2000,
					"I am Tejaswa Gupta",
					1500,
					// 'I develop',
					// 100,
					"I develop iOS apps",
					800,
					"I develop Android apps",
					800,
					"I develop Web apps",
					800
					// 'I am an Android developer',
					// 200
					// 'E amo ☕',
					// 1500
				]}
				loop={Infinity}
				wrapper="p"
			/>
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
