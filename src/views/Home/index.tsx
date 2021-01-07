import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

import HomeLayout from "@/layouts/Home";
import Banner from "../../components/Banner";

import IntroductionSection from "@/views/Home/Introduction";
const TimelineSection = dynamic(() => import("@/views/Home/Timeline"));
const SkillsSection = dynamic(() => import("@/views/Home/Skills"));
const ContactSection = dynamic(() => import("@/views/Home/Contact"));
const QuotesSection = dynamic(() => import("@/views/Home/Quotes"));

import { isMobileRequest } from "@/lib/validation";
import CoffeeLoading from "@/components/CoffeeLoading";

type HomeProps = {
	isMobile: boolean;
};

const Home: NextPage<HomeProps> = (props) => {
	const { isMobile } = props;

	return (
		<HomeLayout isMobile={isMobile}>
			{/* <IntroductionSection /> */}
			{/* <Header /> */}
			<CoffeeLoading />
			{/* <Leon onComplete={useIntroContext} color={"black"}/> */}
			<Banner />
			{/* <TimelineSection /> */}
			<SkillsSection />
			{/* <QuotesSection /> */}
			<ContactSection />
		</HomeLayout>
	);
};

Home.getInitialProps = (ctx) => {
	const isMobile = isMobileRequest(ctx);

	return {
		isMobile: !!isMobile,
	};
};

export default Home;
