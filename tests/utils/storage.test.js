import { describe, it, expect, beforeEach } from "vitest";
import { getUsername } from "../../js/utils/storage.js";

describe("Get Username functions", () => {
  beforeEach(() => {
    const storage = {};
    global.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key],
    };
  });
  describe("getUsername", () => {
    it("retrieve the user from storage", () => {
      localStorage.setItem("user1", JSON.stringify("userNumberOne"));
    });
    it("returned value from user object in storage", () => {
      const getUser = getUsername();
      expect(getUser).toBe("userNumberOne");
    });
    it("returns null from storage when no user exists", () => {
      const user = getUsername();
      expect(user).toBeNull();
    });
  });
});
