import { Router } from '@iv/routing/router';
import { Header } from '@iv/components';
import styles from './app.module.css';

export const App = () => {
	return (
		<div className={styles.background}>
			<Header />
			<Router />
		</div>
	);
};