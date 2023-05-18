import { makeCreateGymUseCase } from "@/use-cases/factories/make-create-gym-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(req: FastifyRequest, reply: FastifyReply) {
  const createGymBodySchema = z.object({
    title: z.string(),
    description: z.string().nullable(),
    phone: z.string().nullable(),
    latitude: z.number().refine((value) => {
      // latitude não pode ser menor que 90 (regras de geografia)
      // math.abs transforma em um valor positivo, absolute
      return Math.abs(value) <= 90;
    }),
    longitude: z.number().refine((value) => {
      // longitude não pode ser menor que 180 (regras de geografia)
      // math.abs transforma em um valor positivo, absolute
      return Math.abs(value) <= 180;
    }),
  });

  const { title, description, phone, latitude, longitude } =
    createGymBodySchema.parse(req.body);

  const createGymUseCase = makeCreateGymUseCase();

  await createGymUseCase.execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  });

  return reply.status(201).send();
}