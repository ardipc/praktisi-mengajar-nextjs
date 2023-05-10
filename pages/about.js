import Header from "@/components/Header";
import Link from "next/link";
import { Fragment } from "react";

export default function About() {
    return (
        <Fragment>
            <Header
                title="About Title"
                keywords="Keywords About Title"
                description="Description Content About"
            />
            <h1>About</h1>
            <Link href="/">Home</Link>

            <hr />

            <section>
                About page
            </section>
        </Fragment>
    );
}