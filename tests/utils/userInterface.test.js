import { describe, it, expect, beforeEach } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";
import { CONFIG } from "../config.test.js";

describe("check Path", () => {
  //We fake the URL we fetch without using VITE
  beforeEach(() => {
    global.fetch = CONFIG;
  });

  //We create the cases in an Object for us to loop through
  const testCases = [
    { href: "/help", currentPath: "/help", expected: true },
    { href: "/", currentPath: "/", expected: true },
    { href: "/", currentPath: "/index.html", expected: true },
    { href: "/help", currentPath: "/help/contact", expected: true },
    { href: "/help", currentPath: "/about", expected: false },
  ];

  //We loop through and check if the statements are correct
  testCases.forEach(({ href, currentPath, expected }) => {
    it(`returns ${expected} for href (${href}) and currentPath (${currentPath})`, () => {
      const result = isActivePath(href, currentPath);
      expect(result).toBe(expected);
    });
  });
});
