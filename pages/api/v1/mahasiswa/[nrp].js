import { createRouter } from 'next-connect';

import { Mahasiswa } from '../../../../models/index';
import { where } from 'sequelize';

const handler = createRouter()
    .get(async (req, res) => {
        const { nrp } = req.query;
        var mahasiwa = await Mahasiswa.findByPk(nrp);
        return res.json({ status: true, data: mahasiwa });
    })
    .put(async (req, res) => {
        const { body, query } = req;
        const { nrp } = query;
        var mahasiswa = await Mahasiswa.update(body, { where: { nrp: nrp }});
        return res.json({ status: true, body, nrp });
    })
    .delete(async (req, res) => {
        const { nrp } = req.query;
        var mahasiswa = Mahasiswa.destroy({ where: { nrp: nrp }});
        res.json({ status: true });
    });

export default handler.handler();