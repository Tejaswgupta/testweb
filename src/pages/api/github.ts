const {Octokit} = require("@octokit/rest");

export default async (req,res)=>{



	const octokit = new Octokit({
		auth: "997229a26c0d7f2cf42280c80dad8bd84f7c4987"
	})

	// const repos = await octokit.repos.listForAuthenticatedUser(
	// 	{
	// 		visibility:"all",
	// 		per_page: "100"
	// 	}
	// );
    
	const count = await octokit.request("GET /user").catch((e)=>{console.log(e)});

	console.log(count);


	return res.status(200).json({
		// repo: repos,
		count: count,
	});

}