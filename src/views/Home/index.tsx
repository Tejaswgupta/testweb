import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

import HomeLayout from "@/layouts/Home";



const Banner = dynamic(()=> import("../../components/Banner")) ;
// const CoffeeLoading = dynamic(() => import("@/components/CoffeeLoading"));
import { getServerDeviceInfo } from "@/lib/device"



type HomeProps = {
	isMobile: boolean;
};

const Home: NextPage<HomeProps> = (props) => {
	const { isMobile } = props;

	return (
		<HomeLayout >
			
			{/* <Header /> */}
			{/* <CoffeeLoading /> */}
			{/* <IntroductionSection /> */}
			{/* <Leon onComplete={useIntroContext} color={"black"}/> */}
			<Banner />
			{/* <TimelineSection /> */}
			{/* <SkillsSection />
			<PortfolioSection/> */}
			{/* <QuotesSection /> */}
			{/* <ContactSection />
			<Footer/> */}
		</HomeLayout>
	);
};

Home.getInitialProps = (ctx) => {
	const { isMobile } = getServerDeviceInfo(ctx)
	return {
		isMobile
	};
};

export default Home;
