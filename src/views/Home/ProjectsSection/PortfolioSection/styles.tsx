import styled, { css } from "styled-components";

import {
	Section
} from "@/components" 


// export const PortfolioSection = styled.section`
//   height: auto;
//   padding-top: 100px;
// `;

export const PortfolioSectionContainer = styled(Section.Container)`
	padding-bottom: var(--section-container-margin-bottom);

	margin-bottom: 0 !important;
`

export const PortfolioSectionContent = styled(Section.Content)``


export const PortfolioInfoContent = styled.div`
	display: flex;
	align-items: center;
	

	a {
		margin-left: 1rem;
	}
	
	margin-bottom: 1rem;
`

export const ContactInfoLink = styled.a`
	font-weight: bolder;

	@media (max-width: 768px) {
		font-size: 1.8rem;
	}
`
