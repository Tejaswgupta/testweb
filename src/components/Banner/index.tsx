import React, { useMemo } from "react"
import MailchimpForm from "../Newsletter/MailchimpSubscribe";
import { ComingSoonContainer, Container, FrontPageContainer, FrontPageSubtitle, FrontPageTitle, LandingImage } from "./styles"


const Banner: React.FC = () => {
	const bannerType = useMemo(
		() => (
			<FrontPageContainer>
				<ComingSoonContainer> COMING SOON </ComingSoonContainer>
				<FrontPageTitle> Paravijjyan</FrontPageTitle>

				<FrontPageSubtitle>Making Mindfulness Accessible</FrontPageSubtitle>
				{/* <MailchimpForm /> */}
			</FrontPageContainer>
		),
		[]
	);

	return (
		<Container id="banner">		
			{bannerType}
			<LandingImage src='/images/Landing.png'/>
		</Container>
	);
}

export default Banner
