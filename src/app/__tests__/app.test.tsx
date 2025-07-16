import { App } from "../app";
import { render } from "@test";

jest.mock('@iv/pages');

describe("App", (): void => {
	it("renders successfully", () => {
		expect(() => render(<App />)).not.toThrow();
	});
});