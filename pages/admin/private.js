import { withSessionSsr } from "@/libs/iron-session";

export const getServerSideProps = withSessionSsr(
    async ({ req, res}) => {
        const { user } = req;
        console.log(user)

        if(!user) {
            return {
                notFound: true
            };
        } 

        return {
            props: {
                user
            }
        }
    }
);

const Private = (props) => {
    console.log(props.user)
    return (
        <div>
            Private {user.email}
        </div>
    );
}

export default Private;
