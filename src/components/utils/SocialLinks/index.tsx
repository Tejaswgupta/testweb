import React from "react"
import {
	FaLinkedin,
	FaFacebook,
	FaInstagram,
	FaGithub,
	FaWhatsapp,
	FaMailBulk,
	FaWind
} from "react-icons/fa"

import { Container, SocialLink } from "./styles"

interface SocialProps {
	isBanner?: boolean
}

const SocialLinks: React.FC<SocialProps> = ({ isBanner = true }) => {
	return (
		<Container>
			<SocialLink href="https://github.com/tejaswgupta" target="_blank">
				<FaGithub />
			</SocialLink>

			<SocialLink
				// href="https://www.instagram.com/tejasw__gupta/"
				// target="_blank"
			>
				<FaWind />
			</SocialLink>

			<SocialLink
				href="mailto:contact@tejaswagupta.me"
				target="_blank"
			>
				<FaMailBulk />
			</SocialLink>
      
			{!isBanner && (
				<SocialLink
					href="https://api.whatsapp.com/send?phone=+919935631169&text=Daniel!%20Vi%20seu%20portf%C3%B3lio...%20vamos%20tomar%20um%20caf%C3%A9%3F"
					target="_blank"
				>
					<FaWhatsapp />
				</SocialLink>
			)}
		</Container>
	)
}

export default SocialLinks
