import { render } from "@test";
import { MediaFilterDrawer } from "../media-filter-drawer";

describe("MediaFilterDrawer", (): void => {
	it("renders successfully", () => {
		expect(() => render(<MediaFilterDrawer />)).not.toThrow();
	});
});