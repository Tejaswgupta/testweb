import React from "react"

import {
	PostSingleSectionContainer,
	PostSingleSectionContent,
	PostCover,
	PostContent
} from "@/views/Projects/PostSingle/styles"
import { PostInfo } from "@/components"


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


const PostSingle: React.FC<DetailedPost> = (props) => {


	return (
		<PostSingleSectionContainer>
			<PostSingleSectionContent>
				<PostInfo 
					date= {props.date}
					description={props.description}	
					tags={props.tags}
					title={props.title}
					authorName={props.authorName}
					authorAvatarSrc={props.authorAvatarSrc}
				/>

				<PostCover
					src={props.coverSrc}
					alt={props.title}
				/>

				<PostContent
					dangerouslySetInnerHTML={{ __html: props.content }}
				/>
				{/* {props.content}
				</PostContent> */}
			</PostSingleSectionContent>
		</PostSingleSectionContainer>
	)
}

export default PostSingle
