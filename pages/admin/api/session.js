import { withSessionRoute } from "@/libs/iron-session";
import { createRouter } from "next-connect";

const VALID_EMAIL = "test@gmail.com";
const VALID_PASSWORD = "password";

const router = createRouter()
    .post(async (req, res) => {
        const { email, password } = req.body;
        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            req.session.user = {
                email: VALID_EMAIL,
                isAdmin: true
            };
            await req.session.save();
            return res.json({ status: true });
        }

        return res.json({ status: false });
    });

export default withSessionRoute(router.handler());