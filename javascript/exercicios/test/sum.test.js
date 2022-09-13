import sum from "../1/sum";

describe("Sum of four integer numbers", () => {
  test("The result of this sum should be 297", () => {
    expect(sum(43, 79, 84, 91)).toBe(297);
  });

  test("The result of this sum should be 189", () => {
    expect(sum(9, 87, 58, 35)).toBe(189);
  });

  test("The result of this sum should be 266", () => {
    expect(sum(93, 74, 15, 84)).toBe(266);
  });

  test("The result of this sum should be 145", () => {
    expect(sum(63, 27, 32, 23)).toBe(145);
  });

  test("The result of this sum should be 184", () => {
    expect(sum(81, 87, 14, 2)).toBe(184);
  });

  test("The result of this sum should be 260", () => {
    expect(sum(58, 52, 93, 57)).toBe(260);
  });

  test("The result of this sum should be 169", () => {
    expect(sum(32, 28, 90, 19)).toBe(169);
  });

  test("The result of this sum should be 311", () => {
    expect(sum(80, 50, 81, 100)).toBe(311);
  });
});
