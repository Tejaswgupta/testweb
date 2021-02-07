import { NextApiRequest, NextApiResponse } from "next";

const {Octokit} = require("@octokit/rest");

export default async (req: NextApiRequest,res:NextApiResponse): Promise<void> => { 


	try{

		const octokit = new Octokit({
			auth: "997229a26c0d7f2cf42280c80dad8bd84f7c4987"
		});
		const count = await octokit.request("GET /user");
		// const repos = await octokit.repos.listForAuthenticatedUser(
		// 	{
		// 		visibility:"all",
		// 		per_page: "100"
		// 	}
		// );
    
		res.status(200).json({
			// repo: repos,
			count: count,
		});
	
	}
	catch(error){
		console.log(error);
	}



	
	
	

	


	
}