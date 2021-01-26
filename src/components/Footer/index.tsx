import { footer, FooterText } from "./style";
import React from "react";

export const Footer:React.FC = () =>{
	return(
		<footer>
			<FooterText> {`© ${new Date().getFullYear()} Tejaswa Gupta - All rights reserved.`}</FooterText>
		</footer>
	);
}