import { Router } from '@iv/routing/router';
import { Header } from '@iv/components';
import { MediaContextProvider } from '@iv/context/media-context';
import styles from './app.module.css';

export const App = () => {
	return (
		<MediaContextProvider>
			<div className={styles.background}>
				<Header />
				<Router />
			</div>
		</MediaContextProvider>
	);
};