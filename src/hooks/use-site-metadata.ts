import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              bio
              name
              photo
              contacts {
                twitter
                github
                email
                rss
              }
            }
            menu {
              path
              label
            }
            url
            title
            subtitle
            copyright
            disqusShortname
          }
        }
      }
    `,
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
