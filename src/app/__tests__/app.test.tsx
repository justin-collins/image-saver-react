import { render, screen } from "@testing-library/react";
import { App } from "../app";

describe("App", (): void => {
	it("renders successfully", async (): Promise<void> => {
		render(<App />);
		expect(await screen.findByText(/Hello World App!/i)).toBeInTheDocument();
	});
});