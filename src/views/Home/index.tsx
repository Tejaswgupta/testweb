import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

import HomeLayout from "@/layouts/Home";


const TimelineSection = dynamic(() => import("@/views/Home/Timeline"));
const SkillsSection = dynamic(() => import("@/views/Home/Skills"));
const ContactSection = dynamic(() => import("@/views/Home/Contact"));
const QuotesSection = dynamic(() => import("@/views/Home/Quotes"));
const Banner = dynamic(()=> import("../../components/Banner")) ;
const CoffeeLoading = dynamic(() => import("@/components/CoffeeLoading"));
const PortfolioSection = dynamic(() => import("./ProjectsSection/PortfolioSection/index"));

import { getDeviceInfo, getRequestUserAgent } from "@/lib/validation"
import IntroductionSection from "./Introduction";
import { Footer } from "@/components/Footer";


type HomeProps = {
	isMobile: boolean;
};

const Home: NextPage<HomeProps> = (props) => {
	const { isMobile } = props;

	return (
		<HomeLayout >
			
			{/* <Header /> */}
			<CoffeeLoading />
			{/* <IntroductionSection /> */}
			{/* <Leon onComplete={useIntroContext} color={"black"}/> */}
			<Banner />
			{/* <TimelineSection /> */}
			<SkillsSection />
			<PortfolioSection/>
			{/* <QuotesSection /> */}
			<ContactSection />
			<Footer/>
		</HomeLayout>
	);
};

Home.getInitialProps = (ctx) => {
	const userAgent = getRequestUserAgent(ctx)

	const { isMobile } = getDeviceInfo(userAgent)

	return {
		isMobile
	};
};

export default Home;
