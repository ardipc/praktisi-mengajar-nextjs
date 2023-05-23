
import nextConnect from 'next-connect';

import { Mahasiswa } from '@/models';

const handler = nextConnect()
    .get(async (req, res) => {
        var data = await Mahasiswa.findAndCountAll();
        return res.json({ status: true, data });
    })
    .post(async (req, res) => {
        var { body } = req;
        var insert = Mahasiswa.create(body);
        return res.json({ insert });
    });

export default handler;