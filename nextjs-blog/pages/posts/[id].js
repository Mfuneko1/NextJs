import Layout from "../../components/layout";

export default function Post(){
    let content = '';

    content = <div></div>;
    return content;
}

export async function getStaticPaths() {
    // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
}