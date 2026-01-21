import { render } from "@test";
import { MediaPreview } from "../media-preview";
import { MediaMock } from "@iv/mocks";
import { MediaContextProvider } from "@iv/context";

describe("MediaPreview", (): void => {
	it("renders successfully", () => {
		expect(() => render(<MediaContextProvider><MediaPreview media={MediaMock} /></MediaContextProvider>)).not.toThrow();
	});
});