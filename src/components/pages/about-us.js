import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import Content, { HTMLContent } from '../Content';
import TierTwoBanner from '../templates/TierTwoBanner/TierTwoBanner';
import { Grid, GridCell } from '../atoms/Structure/Structure';
import { TwoColumn } from '../molecules/TwoColumn/TwoColumn';

export const AboutUsTemplate = ({
  title,
  content,
  contentComponent,
  section,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <React.Fragment>
      <TierTwoBanner title={title} />
      {/* <TwoColumn /> */}
    </React.Fragment>
  );
};

AboutUsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutUs = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutUsTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        section={post.frontmatter.section}
      />
    </Layout>
  );
};

AboutUs.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutUs;

export const aboutUsQuery = graphql`
  query AboutUs($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        section {
          title
          descriptionOne
          ceoMessage
          descriptionTwo
        }
      }
    }
  }
`;
