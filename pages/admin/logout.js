import { useRouter } from "next/router";
import { useEffect } from "react";
import { removeCookies } from 'cookies-next';

export async function getServerSideProps(context) {
    return {
        props: {}
    }
}

const Aktivasi = (props) => {
    const router = useRouter();
    
    useEffect(() => {
        autoFecth();
    }, []);

    const autoFecth = () => {
        removeCookies('user');
        router.push('/admin');
    }

    return (
        <div className="p-2">
            Loading...
        </div>
    );
}

export default Aktivasi;
