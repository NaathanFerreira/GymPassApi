import { CheckIn, Prisma } from "@prisma/client";

export interface CheckInsRepository {
  findById(checkInId: string): Promise<CheckIn | null>;
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>;
  save(checkIn: CheckIn): Promise<CheckIn>;
  findManyByUserId(userId: string, page: number): Promise<CheckIn[]>;
  countByUserId(userId: string): Promise<number>;
  // check if exists a specific checkin in a specific date
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>;
}
