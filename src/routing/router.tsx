import { Routes, Route, Outlet, Navigate } from "react-router";
import { routes } from "@iv/routing";
import { MediaPage, MediaDetailPage, TrashPage } from "@iv/pages";

export const Router = () => {
	return (
		<Routes>
			<Route element={<Outlet />}>
				<Route index element={<Navigate to={routes.media} replace />} />
				<Route path={`${routes.media}/*`} element={<Outlet />}>
					<Route index element={<MediaPage />} />
					<Route path=":mediaId" element={<MediaDetailPage />} />
				</Route>
				<Route path={routes.trash} element={<TrashPage />} />
			</Route>
		</Routes>
	);
};