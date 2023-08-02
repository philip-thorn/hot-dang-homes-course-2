import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
import { clearAndTransformBlocks } from "utils/cleanAndTransformBlocks";

export default function Home(props) {
  console.log("PROPS: ", props);
  return <div>
    <BlockRenderer blocks={props.blocks} />
  </div>;
}

export const getStaticProps =  async () => {
  const {data} = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks
          }
        }
      }
    `
  });
  const blocks = clearAndTransformBlocks(data.nodeByUri.blocks);
  return{
    props : {
      blocks,
    }
  }
}