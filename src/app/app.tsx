import { Router } from '@iv/routing/router';
import styles from './app.module.scss';
import { Header } from '@iv/components';

export const App = () => {
	return (
		<div className={styles.background}>
			<Header />
			<Router />
		</div>
	);
};