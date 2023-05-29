import { useRouter } from "next/router";
import { useEffect } from "react";

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

    const autoFecth = (token) => {
        localStorage.removeItem('token');
        router.push('/login');
    }

    return (
        <div className="p-2">
            Loading...
        </div>
    );
}

export default Aktivasi;
