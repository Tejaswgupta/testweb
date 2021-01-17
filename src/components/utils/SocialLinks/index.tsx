import { Icon, IconButton } from "@/components"
import { contactMap } from "@/lib/personal"
import { AuxBarContainer, AuxBarContent } from "@/views/Home/Introduction/styles"
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
    
		</Container>
		
	// <AuxBarContainer>
	// 	<AuxBarContent>
	// 		<SocialLink href="https://github.com/tejaswgupta" target="_blank">
	// 			<Icon
	// 				src="/icons/github.svg">
	// 			</Icon>
	// 		</SocialLink>

	// 		<SocialLink>
	// 			<Icon
	// 				src="/icons/quote.svg"
	// 				alt="mail">
	// 			</Icon>
	// 		</SocialLink>

	// 		<SocialLink
	// 			href="mailto:contact@tejaswagupta.me"
	// 			target="_blank">
	// 			<Icon
	// 				src="/icons/mail.svg"
	// 				alt="mail">
	// 			</Icon>
	// 		</SocialLink>
	// 	</AuxBarContent>
	// </AuxBarContainer>
		
	
	// <IconButton
	// 	src={contactMap.whatsapp.iconSrc}
	// 	href={contactMap.whatsapp.url}
	// 	alt={contactMap.whatsapp.alt}
	// />

	// <IconButton
	// 	src={contactMap.linkedin.iconSrc}
	// 	href={contactMap.linkedin.url}
	// 	alt={contactMap.linkedin.alt}
	// />

	// <IconButton
	// 	src={contactMap.mail.iconSrc}
	// 	href={contactMap.mail.url}
	// 	alt={contactMap.mail.alt}
	// />

	// <IconButton
	// 	src={contactMap.github.iconSrc}
	// 	href={contactMap.github.url}
	// 	alt={contactMap.github.alt}
	// />
	


	)
}

export default SocialLinks
