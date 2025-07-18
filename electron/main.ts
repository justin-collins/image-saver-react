import { app, BrowserWindow } from 'electron';
import path from "node:path";
import { DatabaseManager } from "./database/database-manager";
import { routeApiRequests } from './database/api/api-router';

const icon = './src/assets/icon.png';

function createWindow() {
	const window = new BrowserWindow({
		x: 100,
		y: 100,
		width: 2000,
		height: 1000,
		icon: icon,
		autoHideMenuBar: true,
		webPreferences: {
			preload: path.join(__dirname, "preload.js")
		},
	});

	window.webContents.on("did-finish-load", () => {
		window.focus();
	});

	if (process.env.VITE_DEV_SERVER_URL) {
		window.loadURL(process.env.VITE_DEV_SERVER_URL)
	} else {
		window.loadFile("dist/index.html");
	}

	window.webContents.openDevTools();
}

app.whenReady().then(() => {
	createWindow();
	
	DatabaseManager.initialize();
	DatabaseManager.quickStart();

	routeApiRequests();

	app.on("activate", () => {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
	if (process.platform !== "darwin") {
		DatabaseManager.destroy();
		app.quit();
	}
});