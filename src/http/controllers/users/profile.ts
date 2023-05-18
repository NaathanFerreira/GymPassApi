import { makeGetUserProfileUseCase } from "@/use-cases/factories/make-get-user-profile-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function profile(req: FastifyRequest, reply: FastifyReply) {
  const getUserProfile = makeGetUserProfileUseCase();

  // req.user é preenchido pelo req.jwtVerify(); no arquivo verify-jwt
  const { user } = await getUserProfile.execute({ userId: req.user.sub });

  return reply.status(200).send({
    user: {
      ...user,
      // "remove a password_hash do objeto"
      password_hash: undefined,
    },
  });
}
