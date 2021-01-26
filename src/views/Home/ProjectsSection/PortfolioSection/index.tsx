import * as S from "./styles";
import PortfolioItems from "../PortfolioItems/index";
import React, { Component }  from "react";
import { Button, Summary } from "@/components";
import { SeeMoreContainer } from "../../Skills/styles";
import { appUrls } from "@/lib/personal";

const PortfolioSection: React.FC= () => {
	return (
		<S.PortfolioSectionContainer id="portfolio">
			{/* <Titles>PORTFÓLIO</Titles>
			 */}
			<S.PortfolioSectionContent>
				<Summary
					spotlightWidth="220px"
					type="About"
					title="Projects."
					description="A brief list of my projects"
				/>
				<PortfolioItems />
				<SeeMoreContainer>
					<Button href={appUrls.projects}>
						CLICK HERE TO SEE MORE
					</Button>
				</SeeMoreContainer>
			</S.PortfolioSectionContent>
		</S.PortfolioSectionContainer>
	);
};

export default PortfolioSection;
