import { NextPage } from "next";
import useSwr from "swr";
import React, { useEffect } from "react";
import { Container } from "@/views/Home/ProjectsSection/PortfolioItems/styles";
import { Content, RepoCountBox, ShadowText } from "./styles";



const fetcher = url => fetch(url).then(r => r.json())

const repoCount: NextPage = () => {
	const { data , error} = useSwr("/api/github", fetcher);

	

	if (error) return <div>failed to load</div>
	if (!data) return <h1>Loading...</h1>	

	return(
		<Content>
			

			{/* <RepoCountBox>Github Repository Count: {+data.count.data.owned_private_repos + +data.count.data.public_repos}</RepoCountBox> */}

			<RepoCountBox>UNDER ACTIVE CONSTRUCTION</RepoCountBox>

			{/* <ShadowText>Github Repository Count: {+data.count.data.owned_private_repos + +data.count.data.public_repos}</ShadowText> */}
		


		</Content>
	);

}

export default repoCount;


// data.repo.data.map(
//     (item)=>(
//         <li key={item.id}>{item.name}</li>
//     ))
