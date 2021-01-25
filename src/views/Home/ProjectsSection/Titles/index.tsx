import { TitlesProps } from "../types";
import * as S from "./styles";
import React, { Component }  from "react";

const Titles: React.FC= ({ children }: TitlesProps) => {
	return <S.Title>{children}</S.Title>;
};

export default Titles;
