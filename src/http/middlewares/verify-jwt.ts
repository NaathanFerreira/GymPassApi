import { FastifyReply, FastifyRequest } from "fastify";

export async function verifyJwt(req: FastifyRequest, reply: FastifyReply) {
  try {
    // verifica o jwt presente no header
    // caso validado, ele pega as infos do token e armazena em req.user
    // caso contrário, retorna erro
    await req.jwtVerify();
  } catch (err) {
    return reply.status(401).send({
      message: "Unauthorized",
    });
  }
}
