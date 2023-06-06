import { useRouter } from "next/router";

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div>
            Cari: {slug}
        </div>
    );
}

export default Slug;
