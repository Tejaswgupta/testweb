import { NextApiRequest, NextApiResponse } from "next"

import { getPostData, getAllPostIds } from "@/lib/posts"
import { getLatestDate } from "@/lib/date"
import { getSiteBaseURL } from "@/lib/url"
import { handleError } from "@/lib/error"

import { getRssXML, GetRssXMLProps } from "@/templates/rss"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const previewPosts = getAllPostIds()

		const baseURL = getSiteBaseURL(req)

		const posts: GetRssXMLProps["posts"] = await Promise.all(
			previewPosts.map(async previewPost => {
				const { params } = previewPost

				const post = getPostData(params.slug)

				return {
					title: post.title,
					link: `${baseURL}/${params.slug}`,
					description: post.description,
					content: post.content,
					date: new Date(post.date).toUTCString()
				}
			})
		)

		const latestPostDate = getLatestDate(posts.map(post => new Date(post.date)))

		const sitemapXML = getRssXML({
			title: "Blog by Tejaswa Gupta",
			description: "A blog about technology.",
			link: baseURL,
			latestPostDate: latestPostDate.toUTCString(),
			posts
		})

		res.setHeader("Content-Type", "text/xml")

		res.status(200).end(sitemapXML)
	} catch (error) {
		handleError(error)
		res.status(500).json({ error: "ServerInternalError", details: error.message })
	}
}
