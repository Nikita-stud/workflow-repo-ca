import { describe, it, expect, beforeEach } from "vitest";
import { getUsername } from "../../js/utils/storage.js";

describe("Get Username functions", () => {
  //We make a fake setItem and get Item from localStorage
  beforeEach(() => {
    const storage = {};
    global.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key],
    };
  });
  describe("getUsername", () => {
    //We set fake user object in fake localStorage and check it he exists
    it("retrieve the user from storage", () => {
      const mockUser = { name: "user1" };
      localStorage.setItem("user", JSON.stringify(mockUser));
      const getUser = getUsername();
      expect(getUser).toBe("user1");
    });
    //We check if no token exists and checks if returned null
    it("returns null from storage when no user exists", () => {
      const user = getUsername();
      expect(user).toBeNull();
    });
  });
});
