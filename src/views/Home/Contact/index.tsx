import React from "react"

import {
	Button,
	Summary,
} from "@/components"

import {
	ContactSectionContainer,
	ContactSectionContent,
	ContactInfoContainer,
	ContactInfoContent,
	ContactInfoLink,
	ContactButton,
} from "@/views/Home/Contact/styles"

import { contactMap } from "@/lib/personal"
import { BiMailSend } from "react-icons/bi"
import { SocialLink } from "@/components/utils/SocialLinks/styles"

const ContactSection: React.FC = () => (
	<ContactSectionContainer>
		<ContactSectionContent>
			<Summary
				spotlightWidth="220px"
				type="Contact"
				title="Contact."
				description="Have a great idea? Lets Talk"
			/>


			{/* <SocialLink>
						<BiMailSend/>
					</SocialLink> */}

			<ContactButton>
						Get in touch
			</ContactButton>
				
			
				
			{/* <ContactInfoContent>
					<Icon
						src={contactMap.whatsapp.iconSrc}
						alt={contactMap.whatsapp.alt}
					/>

					<ContactInfoLink
					href={contactMap.whatsapp.url}
				target="_blank"
					rel="noopener"
					>
						{contactMap.whatsapp.rawValue}f
					</ContactInfoLink>
				</ContactInfoContent> */}
		
		</ContactSectionContent>
	</ContactSectionContainer>


)

export default ContactSection
