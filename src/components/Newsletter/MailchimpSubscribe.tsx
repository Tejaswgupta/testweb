import React from "react";
import Mailchimp from "react-mailchimp-form";
import styles from "./index.module.css";
import { MailchimpContainer } from "./style";

const MailchimpForm = () => {
	return(
		<MailchimpContainer>
			<Mailchimp
				action="https://therecspot.us1.list-manage.com/subscribe/post?u=6b7b2d37f93b5f1219cb59205&amp;id=83aed52467"
				fields={[
					{
						name: "EMAIL",
						placeholder: "Your Email",
						type: "email",
						required: true,
					},
				]}
				messages={{
					sending: "Sending...",
					success: "Thank you for subscribing!",
					error: "An unexpected internal error has occurred.",
					empty: "You must write an e-mail.",
					duplicate: "You're already signed up!",
					button: "Request Early Access",
				}}
				styles={{
					sendingMsg: {
						color: "#fff12",
					},
					successMsg: {
						color: "#fff12",
					},
					duplicateMsg: {
						color: "#ffee48",
					},
					errorMsg: {
						color: "#ffb800",
					},
				}}
				className={styles.email}
			/>

		</MailchimpContainer>

	);
}


export default MailchimpForm;