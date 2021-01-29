import styled from "styled-components"

import { SpotlightProps } from "@/components/Spotlight"

export const SpotlightContent = styled.span<SpotlightProps & { visible: boolean }>`
	& > :first-child {
		position: relative;

		z-index: 1;
	}

	& > :first-child::after {
		content: "";

		width: ${(props) => props.visible ? (props.width ?? "100%") : 0};
		height: ${(props) => props.height};

		background-color: var(--purple-color);

		left: ${(props) => props.left};
		right: ${(props) => props.right};
		bottom: ${(props) => props.bottom};
		top: ${(props) => props.top};

		position: absolute;

		z-index: -1;

		transition: all 0.5s;
	}
` 

// linear-gradient(90deg , #12c2e9, #c471ed , #f64f59);
// linear-gradient(45deg , #FC466B , #3F5EFB);