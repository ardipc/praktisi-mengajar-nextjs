import Link from "next/link";
import Header from "@/components/Header";

export default function Contact() {
    return (
        <>
            <Header title="Contact Title" keywords="contact, contact me" description="Description" />
            <section>
                Page Contact
                <Link href="/">Home</Link>
            </section>
        </>
    );
}