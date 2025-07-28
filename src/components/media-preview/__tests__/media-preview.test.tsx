import { render } from "@test";
import { MediaPreview } from "../media-preview";
import { MediaMock } from "@iv/mocks";

describe("MediaPreview", (): void => {
	it("renders successfully", () => {
		expect(() => render(<MediaPreview media={MediaMock} />)).not.toThrow();
	});
});