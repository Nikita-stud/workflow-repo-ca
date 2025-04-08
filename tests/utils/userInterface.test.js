import { describe, it, expect, beforeEach } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";
import { CONFIG } from "../config.test.js";

/*
 *  Returns true when current path matches href exactly
 *  Returns true for root path (“/”) when path is “/” or “/index.html”
 *  Returns true when current path includes the href
 *  Returns false when paths don’t match
 */

/*
export const isActivePath = (href, currentPath) => {
  if (href === "/") {
    return currentPath === "/" || currentPath === "/index.html";
  } else {
    return currentPath.includes(href);
  }
};
*/

describe("check Path", () => {
  beforeEach(() => {
    global.fetch = CONFIG;
  });

  const testCases = [
    { href: "/help", currentPath: "/help", expected: "true" },
    { href: "/", currentPath: "/", expected: "true" },
    { href: "/", currentPath: "/index.html", expected: "true" },
    { href: "/help", currentPath: "/help/contact", expected: "true" },
    { href: "/help", currentPath: "/about", expected: "false" },
  ];
  testCases.forEach(({ href, currentPath, expected }) => {
    it(`returns${expected} for href ${href} and currentPath ${currentPath}`, () => {
      const result = isActivePath(href, currentPath);
      expect(result).toBe(expected);
    });
  });
});
