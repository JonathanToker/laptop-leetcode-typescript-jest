import {describe, test, expect} from "@jest/globals";
import { sumOfTwo } from "./app";
describe("#sumOfTwo", () => {
    describe("negative cases", () => {
        test("supposed to be 0", () => {
            expect(sumOfTwo(1, -1)).toBe(0);
        })
    })
    describe("positive cases", () => {
        test("supposed to be 10", () => {
            expect(sumOfTwo(4, 6)).toBe(10);
        })
    })
})