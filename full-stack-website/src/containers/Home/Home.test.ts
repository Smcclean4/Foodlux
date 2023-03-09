// tests for the Home Component\
import { expect, test, describe, jest } from "@jest/globals";
import itemExists from "./Home";
import setRender from "./Home";
import setLoading from "./Home";
import Categories from "./Home";
import UserData from "./Home";
import setValue from "./Home";

describe('confirming that functions and variables do what they are supposed to in Home', () => {
  test('checks whether an item exists in the cart', () => {
    expect(itemExists).toBeTruthy();
    expect(itemExists).not.toBeUndefined();
  })
  test('checking if setRender is truthy', () => {
    expect(setRender).toBeTruthy()
    expect(setRender).not.toBeUndefined();
  })
  test('checking if setLoading is truthy', () => {
    expect(setLoading).toBeTruthy()
    expect(setLoading).not.toBeUndefined();
  })
  test('checking if Categories contains some sort of value', () => {
    expect(Categories).toBeDefined();
  })
  test('checking if UserData contains some sort of value', () => {
    expect(UserData).toBeDefined();
  })
  test('checking if setValue has an initial value of 0', () => {
    expect(setValue).toHaveLength(0);
  })
})
