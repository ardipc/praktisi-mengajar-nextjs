import Head from "next/head";


export default function Header(props) {
    const { title, keywords, description } = props;
    return (
        <Head>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
        </Head>
    );
}