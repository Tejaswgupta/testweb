import Titles from ".";
import { Story, Meta } from "@storybook/react/types-6-0";
import React, { Component }  from "react";

export default {
	title: "Titles",
	component: Titles,
} as Meta;

export const Basic: Story = (args) => <Titles {...args} />;
Basic.args = { children: "JUST A TEXT" };
