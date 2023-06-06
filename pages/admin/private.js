import { getCookie } from 'cookies-next';

export const getServerSideProps = async ({ req, res}) => {
    const user = getCookie('user', {req, res});
    console.log(user);

    if(user) {
        return {
            props: {

            }
        }
    }

    return {
        notFound: true
    }
};

const Private = (props) => {
    return (
        <div>
            Private
        </div>
    );
}

export default Private;
