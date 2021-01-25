import styled from "styled-components"

import {
	Section
} from "@/components" 

export const ContactSectionContainer = styled(Section.Container)`
	padding-bottom: var(--section-container-margin-bottom);

	margin-bottom: 0 !important;
`

export const ContactSectionContent = styled(Section.Content)``

export const ContactInfoContainer = styled.div`
	margin: var(--section-content-items-margin);
	

	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

export const ContactInfoContent = styled.div`
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

export const ContactButton = styled.button`
	background: none;

	position: relative;

	cursor: pointer;

	color: var(--gray-color-15);

	padding: 0 2rem;

	margin-top: 1.5vh;

	height: 3.5vh;

	width: 6vw;

	border-radius: 0.5rem;

	border: 2px solid var(--gray-color-15);


	&::before {
		content: "";

		position: absolute;

		width: 100%;
		bottom: 0;
		left: 0;
		height: 0px;

		background-color: var(--gray-color-15);

		transition: all 0.25s;

		z-index: -1;
	}

	&:hover {
		&::before {
			height: 100%;
		}

		color: var(--gray-color-1);
	}

	transition: all 0.5s;
`
