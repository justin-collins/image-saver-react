import { render } from "@test";
import { MediaFilterDrawer } from "../media-filter-drawer";
import { MediaContextProvider } from "@iv/context";

describe("MediaFilterDrawer", (): void => {
	it("renders successfully", () => {
		expect(() => render(<MediaContextProvider><MediaFilterDrawer /></MediaContextProvider>)).not.toThrow();
	});
});