import { expect, describe, it } from "vitest";
import {
  validateEmail,
  validatePassword,
  validateForm,
} from "../../js/utils/validation.js";

describe("validateEmail", () => {
  it("returns true for valid student Noroff email", () => {
    const email = "student@stud.noroff.no";
    const result = validateEmail(email);
    expect(result).toBe(true);
  });

  it("returns true for valid Noroff staff email", () => {
    const email = "teacher@noroff.no";
    const result = validateEmail(email);
    expect(result).toBe(true);
  });

  it("returns false for non-Noroff email", () => {
    const email = "student@gmail.com";
    const result = validateEmail(email);
    expect(result).toBe(false);
  });

  it("returns false for invalid email format", () => {
    const email = "not-an-email";
    const result = validateEmail(email);
    expect(result).toBe(false);
  });
});

describe("validatePassword", () => {
  //the password it what is parsed in the function
  //the expected is the toBe of the test
  const testCases = [
    { password: "short", expected: false },
    { password: "exactly8", expected: true },
    { password: "longerpassword", expected: true },
  ];

  testCases.forEach(({ password, expected }) => {
    it(`returns ${expected} for password "${password}"`, () => {
      const result = validatePassword(password);
      expect(result).toBe(expected);
    });
  });
});

describe("validateForm", () => {
  // We're testing three different situations:
  const testCases = [
    {
      // Situation 1: Everything is correct
      email: "valid@stud.noroff.no",
      password: "validpass",
      expected: { isValid: true, errors: {} },
    },
    {
      // Situation 2: Everything is wrong
      email: "invalid@gmail.com",
      password: "short",
      expected: {
        isValid: false,
        errors: {
          email: "Please enter a valid Noroff email address",
          password: "Password must be at least 8 characters",
        },
      },
    },
    {
      // Situation 3: Email is good but password is too short
      email: "valid@noroff.no",
      password: "short",
      expected: {
        isValid: false,
        errors: {
          password: "Password must be at least 8 characters",
        },
      },
    },
  ];

  testCases.forEach(({ email, password, expected }) => {
    it(`validates correctly for email "${email}" and password "${password}"`, () => {
      const result = validateForm(email, password);
      expect(result).toEqual(expected);
    });
  });
});
