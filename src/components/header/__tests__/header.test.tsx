import { render } from "@test";
import { Header } from "../header";

describe("Header", (): void => {
	it("renders successfully", () => {
		expect(() => render(<Header />)).not.toThrow();
	});
});