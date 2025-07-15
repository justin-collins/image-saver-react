import { Routes, Route, Outlet, Navigate } from "react-router";
import { routes } from "./routes";
import { MediaPage } from "@iv/pages";

export const Router = () => {
	return (
		<Routes>
			<Route element={<Outlet />}>
				<Route index element={<Navigate to={routes.media} replace />} />
				<Route path={routes.media} element={<MediaPage />} />
			</Route>
		</Routes>
	);
};