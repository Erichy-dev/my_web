import { describe, it, expect, vi, test } from "vitest";

// import { mount } from "@vue/test-utils";
import { toggler } from "../BodyNavbar.vue";
describe("toggler", () => {
  test("one theme", () => {
    expect(toggler(true, false)).toBe(false)
  })
  test("conflicting themes", () => {
    expect(toggler(true, true)).toBe(false)
  })
  test("conflicting themes", () => {
    expect(toggler(false, false)).toBe(false)
  })
  test("conflicting themes", () => {
    expect(toggler(false, true)).toBe(false)
  })
})