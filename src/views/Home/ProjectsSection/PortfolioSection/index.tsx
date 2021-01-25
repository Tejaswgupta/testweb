import * as S from "./styles";
import PortfolioItems from "../PortfolioItems/index";
import React, { Component }  from "react";
import { Summary } from "@/components";

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
			</S.PortfolioSectionContent>
		</S.PortfolioSectionContainer>
	);
};

export default PortfolioSection;
