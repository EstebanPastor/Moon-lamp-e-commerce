import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { orderId, status } = req.body;
  try {
    const updatedOrder = await prisma.orders.update({
      where: { id: orderId },
      data: { status: status },
    });
    return res.status(200).json({ updatedOrder });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Something went wrong while trying to update the product...",
      });
  }
}
