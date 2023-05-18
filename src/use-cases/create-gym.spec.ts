import { beforeEach, describe, expect, it } from "vitest";
import { CreateGymUseCase } from "./create-gym";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";

let gymsRepository: InMemoryGymsRepository;
// system under test
let sut: CreateGymUseCase;

describe("Create Gym Use Case", () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new CreateGymUseCase(gymsRepository);
  });

  it("should be able to create a gym", async () => {
    const { gym } = await sut.execute({
      title: "Javascript Gym",
      description: null,
      phone: null,
      latitude: -20.7799794,
      longitude: -49.416115,
    });

    expect(gym.id).toEqual(expect.any(String));
  });
});
