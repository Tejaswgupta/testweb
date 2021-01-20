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

import {contactMap} from "lib/personal"

import { Container, SocialLink } from "./styles"

interface SocialProps {
	isBanner?: boolean
}

const SocialLinks: React.FC<SocialProps> = ({ isBanner = true }) => {
	return (
		<Container>
			<SocialLink href={contactMap.github.url}target="_blank">
				<FaGithub />
			</SocialLink>

			<SocialLink href={contactMap.instagram.url} target="_blank">
				<FaInstagram />
			</SocialLink>

			{/* <SocialLink href={contactMap.mail} target="_blank">
        <Icon src={contactMap.mail.iconSrc} alt={contactMap.mail.alt} />
      </SocialLink> */}

			<SocialLink
				href={contactMap.mail.url}
				target="_blank"
			>
				<BiMailSend />
			</SocialLink>

		
		</Container>
	)
}

export default SocialLinks
