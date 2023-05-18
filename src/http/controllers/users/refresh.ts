import { FastifyReply, FastifyRequest } from "fastify";

export async function refresh(req: FastifyRequest, reply: FastifyReply) {
  // valida q o usuário está autenticado mas não vai olhar pra informação que ta no header, somente nos cookies (onde está o refresh token)
  await req.jwtVerify({ onlyCookie: true });

  const { role } = req.user;

  const token = await reply.jwtSign(
    // payload
    { role },
    {
      sign: {
        sub: req.user.sub,
      },
    }
  );

  const refreshToken = await reply.jwtSign(
    // payload
    { role },
    {
      sign: {
        sub: req.user.sub,
        expiresIn: "7d",
      },
    }
  );

  return reply
    .setCookie("refreshToken", refreshToken, {
      // quais rotas tem acesso a esse cookie (todos)
      path: "/",
      secure: true,
      sameSite: true,
      httpOnly: true,
    })
    .status(200)
    .send({ token });
}
