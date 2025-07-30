import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { App } from "./app/app";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<MantineProvider>
			<Notifications autoClose={3000} />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MantineProvider>
	</React.StrictMode>
);