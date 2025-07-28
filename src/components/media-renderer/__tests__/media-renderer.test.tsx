import { render } from "@test";
import { MediaMock } from "@iv/mocks";
import { MediaRenderer } from "../media-renderer";

describe("MediaRenderer", (): void => {
	it("renders successfully", () => {
		expect(() => render(<MediaRenderer media={MediaMock} />)).not.toThrow();
	});
});