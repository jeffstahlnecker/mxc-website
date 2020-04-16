import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import Button from './Button';
import { StyledRow, Text, Image, Title, Paragraph } from './Row.styled';

const Row = ({ title, text, image, ctaUrl, cta, placement, boxShadow, backgroundColor }) => {
	const data = useStaticQuery(getImage);
	return (
		<StyledRow shadow={boxShadow} background={backgroundColor}>
			<Text order={placement}>
				<Title>{title}</Title>
				<Paragraph>{text}</Paragraph>
				<Button url={ctaUrl}>{cta}</Button>
			</Text>
			<Image>
				<Img fluid={image || data.coverimage.childImageSharp.fluid} />
			</Image>
		</StyledRow>
	);
};

const getImage = graphql`
	{
		coverimage: file(relativePath: { eq: "mxcLogoStars.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
	}
`;

export default Row;
