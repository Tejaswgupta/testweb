import { Icon } from "@/components"
import React from "react"
import {
	FaGithub,
	FaWhatsapp,
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
				<Icon
					src="/icons/github.svg">
				</Icon>
			</SocialLink>

			<SocialLink>
				<Icon
					src="/icons/quote.svg"
					alt="mail">
				</Icon>
			</SocialLink>

			<SocialLink
				href="mailto:contact@tejaswagupta.me"
				target="_blank">
				<Icon
					src="/icons/mail.svg"
					alt="mail">
				</Icon>
			</SocialLink>
      
			{/* {!isBanner && (
				<SocialLink
					href="https://api.whatsapp.com/send?phone=+919935631169&text=Hey!%20Vi%20seu%20portf%C3%B3lio...%20vamos%20tomar%20um%20caf%C3%A9%3F"
					target="_blank"
				>
					<FaWhatsapp />
				</SocialLink>
			)} */}
		</Container>
	)
}

export default SocialLinks
