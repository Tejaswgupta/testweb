import { Icon } from "@/components"
import { Image } from "@/components/LazyLoadedImage/styles"
import React from "react"
import {
	FaInstagram,
	FaGithub,
	FaWhatsapp,
	FaVoicemail,
	FaMailBulk
} from "react-icons/fa"

import {BiMailSend} from "react-icons/bi"

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

			<SocialLink href="https://instagram.com/tejasw__gupta" target="_blank">
				<FaInstagram />
			</SocialLink>

			{/* <SocialLink href={contactMap.mail} target="_blank">
        <Icon src={contactMap.mail.iconSrc} alt={contactMap.mail.alt} />
      </SocialLink> */}

			<SocialLink
				href="https://api.whatsapp.com/send?phone=+919935631169&text=Daniel!%20Vi%20seu%20portf%C3%B3lio...%20vamos%20tomar%20um%20caf%C3%A9%3F"
				target="_blank"
			>
				<BiMailSend />
			</SocialLink>

		
		</Container>
	)
}

export default SocialLinks
