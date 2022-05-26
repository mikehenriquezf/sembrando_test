import { prisma } from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const carId = req.query.id;

    if (req.method === "DELETE") {
        const carro = await prisma.carsModels.delete({
            where: {
                id: Number(carId),
            },
        });
        res.json(carro);
    } else {
        console.log("Fail :(");
    }
}
