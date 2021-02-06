import React from "react"

import { DetailedPost } from "@/lib/posts"

import {
	PostSingleSectionContainer,
	PostSingleSectionContent,
	PostCover,
	PostContent
} from "@/views/Projects/PostSingle/styles"
import { PostInfo } from "@/components"


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
			</PostSingleSectionContent>
		</PostSingleSectionContainer>
	)
}

export default PostSingle
