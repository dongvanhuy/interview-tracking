import Index from "./index";

const util = require("util");

describe("renders App to DOM", () => {
  it("should render", () => {
    expect(util.inspect(Index)).toMatchSnapshot();
  });
});
