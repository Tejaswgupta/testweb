import React from "react";
import Head from "next/head";
import GoogleFonts from "next-google-fonts";

import { buildCDNUrl } from "@/lib/cdn";

const DefaultLayout: React.FC = (props) => {
	const { children } = props;

	return (
		<>
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" />
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,500&display=swap" />

			<Head>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="images/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="images/favicon-16x16.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="images/apple-touch-icon.png"
				/>
				<link rel="manifest" href="images/site.webmanifest" />
				<link rel="mask-icon" href="images/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<link rel="icon" href={buildCDNUrl("images/new-logo.webp")} />
				{/* 
				
				<link id="app-manifest" rel="manifest" href="/manifest.json"></link>
				<script defer type="text/javascript" src="https://static.guilherr.me/js/gtm.js"></script> */}
			</Head>


			{children}
		</>
	);
};

export default DefaultLayout;
