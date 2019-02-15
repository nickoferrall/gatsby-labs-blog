import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';

const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`;

const Page3 = () => {
  return (
    <Layout>
      <h1>Heyyy</h1>
      <h3>Image File Data</h3>
      <StaticQuery
        query={getImageData}
        render={data => (
          <table>
            <thead>
              <tr>
                <th>Relative Path</th>
                <th>Size of Image</th>
                <th>Extension</th>
                <th>Birthtime</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>{node.relativePath}</td>
                  <td>{node.size}</td>
                  <td>{node.extension}</td>
                  <td>{node.birthtime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      />
      <Link to="/page-2 ">Go to page 2</Link>
    </Layout>
  );
};

export default Page3;
