import { NextPage } from "next";
import useSwr from "swr";
import React, { useEffect } from "react";
import { Container } from "@/views/Home/ProjectsSection/PortfolioItems/styles";


async function fetcher(...arg){
	const res = await fetch(...arg);

	return res.json();
}

const repoCount: NextPage = () => {
	const { data } = useSwr("/api/github", fetcher);

	useEffect(() => {
		console.log(data);
	})


	return(
		<div>
			{
				data 
					? <h1>{+data.count.data.owned_private_repos + +data.count.data.public_repos}</h1>
					: "Loading"
			}


		</div>
	);

}

export default repoCount;


// data.repo.data.map(
//     (item)=>(
//         <li key={item.id}>{item.name}</li>
//     ))
