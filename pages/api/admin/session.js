
import { createRouter } from "next-connect";
import { setCookie } from 'cookies-next';

const VALID_EMAIL = "admin@gmail.com";
const VALID_PASSWORD = "password";

const router = createRouter()
    .post(async (req, res) => {
        const { email, password } = req.body;
        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            setCookie('user', VALID_EMAIL, { req, res });
            return res.json({ status: true, result: 'User ditemukan.' });
        }
        return res.json({ status: false, result: 'User tidak ditemukan.' });
    });

export default router.handler();