import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const AboutImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      {
        images: allFile(filter: { ext: { ne: ".js" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(width: 350, layout: FIXED)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFixed = image.node.childImageSharp.gatsbyImageData;
      return <GatsbyImage image={imageFixed} className="rounded shadow-lg" alt={alt} />;
    }}
  />
);

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
