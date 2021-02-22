// import matter from "gray-matter"
// import marked from "marked"
// import fs from "fs"
// import path from "path"
// import readingTime from "reading-time"

// import { getFixedEncodeURIComponent } from "@/lib/url"
// import { getShortDate } from "@/lib/date"
// import { appUrls, authors } from "@/lib/personal"

// const POST_FOLDER_PATH = path.join(process.cwd(), "src", "projects")

// type GetPostShareUrls = {
// 	Props: {
// 		slug: string
// 		title: string
// 	}
// 	Response: {
// 		[key in "linkedin" | "facebook" | "whatsapp" | "twitter" | "telegram"]: string
// 	}
// }

// export const getPostShareUrls = (
// 	props: GetPostShareUrls["Props"]
// ): GetPostShareUrls["Response"] => {
// 	const projectsUrl = appUrls.projects
// 	const postUrl = `${projectsUrl}/${props.slug}`
// 	const defaultDescription = `Give a look at '${props.title}', written by Tejaswa Gupta`

// 	const url = getFixedEncodeURIComponent(postUrl)
// 	const title = getFixedEncodeURIComponent(props.title)
// 	const source = getFixedEncodeURIComponent(projectsUrl)
// 	const smallDescription = getFixedEncodeURIComponent(`${defaultDescription}!`)
// 	const fullDescription = getFixedEncodeURIComponent(`${defaultDescription} at ${url}!`)

// 	const shareUrls: GetPostShareUrls["Response"] = {
// 		linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${smallDescription}&source=${source}`,
// 		facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${smallDescription}`,
// 		telegram: `https://telegram.me/share/url?url=${url}&text=${smallDescription}`,
// 		twitter: `https://twitter.com/intent/tweet?text=${fullDescription}&related=_staticvoid`,
// 		whatsapp: `https://api.whatsapp.com/send?text=${fullDescription}`
// 	}

// 	return shareUrls
// }

export type DetailedPost = {
	title: string
	description: string
	coverSrc: string
	tags: string[]
	content: string
	slug: string
	authorName: string
	authorAvatarSrc: string
	date: string
}

// export const getDetailedPostBySlug = async (slug: string): Promise<DetailedPost> => {
// 	const postFilePath = path.join(POST_FOLDER_PATH, `${slug}.md`)
// 	const postFileContent = await fs.promises.readFile(postFilePath, "utf8")

// 	const meta = matter(postFileContent)
// 	const content = marked(meta.content)

// 	const { date } = meta.data

// 	const shortDate = getShortDate(new Date(date))
// 	const dateInMilliseconds = +new Date(date)
// 	const dateInString = date?.toISOString()

// 	const readingTimeTextInfo = readingTime(content)

// 	const postTitle = meta.data.title || ""

// 	const postShareUrls = getPostShareUrls({
// 		title: postTitle,
// 		slug
// 	})

// 	return {
// 		title: postTitle,
// 		description: meta.data.description || "",
// 		tags: meta.data.tags || [],
// 		coverSrc: meta.data.cover || "",
// 		content,
// 		slug,
// 		authorAvatarSrc: authors.Owner.avatarSrc,
// 		authorName: authors.Owner.name,
// 		date:"date"
// 	}
// }

// export const getAllDetailedPosts = async (): Promise<DetailedPost[]> => {
// 	const postFileNames = await fs.promises.readdir(POST_FOLDER_PATH)
	
// 	const detailedPosts: DetailedPost[] = await Promise.all(
// 		postFileNames.map(async postFileName => {
// 			const slug = postFileName.replace(".md", "")

// 			const post = await getDetailedPostBySlug(slug)
	
// 			return post
// 		})
// 	)

// 	return detailedPosts
// }

import projects from "../views/Home/ProjectsSection/PortfolioItems/projects.json";

export const getAllPostIds = () => {


	return projects.map(project => {
		return {
			params: {
				slug: project.project_name,
			} 
		}
	})
}

export function getPostData(id) {
	let data = {};
	projects.map((project)=>{
		data = project.project_name == id ? project : {};
	})

	return {...data};
}