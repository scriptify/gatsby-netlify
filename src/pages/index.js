import React from "react";

function getData(data) {
    const edges = data.allMarkdownRemark.edges;
    return edges.length > 0 ? edges[0].node.frontmatter : {};
}

export default ({ data }) => {
    const general = getData(data);
    return (
        <section>
            <h3>{general.title}</h3>
            <p>
                {general.text}
            </p>
            <img src="https://source.unsplash.com/random/800x600" />
        </section>
    );
}

export const query = graphql`
    query StartPageQuery {
        allMarkdownRemark {
             edges {
             node {
               frontmatter {
                 title,
                 text,
                 team {
                   name,
                   photo,
                   position
                 }
               }
             }
           }
        }
    }
`;
