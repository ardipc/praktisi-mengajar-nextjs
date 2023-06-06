const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

import { createRouter } from "next-connect";
import middleware from '../../../../helpers/middleware';

import mongoDB from "@/helpers/mongodb";
import Categories from '@/models/categories';
import Products from '@/models/products';

const handler = createRouter()
    // .use(middleware)
    .get(async (req, res) => {
        await mongoDB();
        const { query } = req;
        if(query.id[1] === 'products') {
            let result = await Products.find({ category_id: new ObjectId(query.id[0]) }).populate({
                path: 'category_id',
                select: 'name description',
                options: { alias: 'category' }
            });
            return res.json({ status: true, result });
        } else {
            let result = await Categories.findById(query.id[0]);
            return res.json({ status: true, result });        
        }
    })
    .put(async (req, res) => {
        await mongoDB();
        const { query, body } = req;
        let result = await Categories.update({_id: query.id[0]}, body);
        return res.json({ status: true, result });
    })
    .delete(async (req, res) => {
        await mongoDB();
        const { query } = req;
        let del = await Categories.deleteOne({ _id: query.id[0] });
        return res.json({ status: true, result: del });
    });

export default handler.handler();