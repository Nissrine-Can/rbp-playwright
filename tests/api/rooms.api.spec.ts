import { test, expect } from "@playwright/test";

test.describe("Rooms API", () => {
  test("GET /api/room returns a list of rooms @smoke", async ({ request }) => {
    const res = await request.get("/api/room");
    expect(res.status()).toBe(200);

    const body = await res.json();
    expect(Array.isArray(body.rooms)).toBe(true);
    expect(body.rooms.length).toBeGreaterThan(0);

    const room = body.rooms[0];

    expect(room).toEqual(
      expect.objectContaining({
        roomid: expect.any(Number),
        roomName: expect.any(String),
        type: expect.any(String),
        roomPrice: expect.any(Number),
      }),
    );
  });
});
