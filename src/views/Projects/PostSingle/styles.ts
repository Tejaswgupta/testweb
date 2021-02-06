import styled from "styled-components"

import {
	Section,
	LazyLoadedImage,
	PostInfo as PostInfoComponent
} from "@/components" 

export const PostSingleSectionContainer = styled(Section.Container)`
	margin-top: var(--section-container-margin-bottom);

	padding-bottom: var(--section-container-margin-bottom);

	margin-bottom: 0 !important;
`

export const PostSingleSectionContent = styled(Section.Content)``

export const PostInfo = styled(PostInfoComponent)`
	max-width: 500px;

	margin-bottom: 10rem;
`

export const PostCover = styled(LazyLoadedImage)`
	width: 100%;
	height: 50vh;

	display:flex;
	flex-direction:row;

	background-color: black;
	overflow: auto;
	border-radius: 4rem;

	img {
		width:100%;
		object-fit: fill;
		object-position: center;
	}
`

export const PostContent = styled.div`
	margin-top: 10rem;

	& > * {
		color: var(--gray-color-1);
	}


`
