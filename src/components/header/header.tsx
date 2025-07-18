import { NavLink, NavLinkRenderProps } from "react-router";
import styles from "./header.module.css";

export const Header = () => {
	const generateNavLinkClasses = ({isActive}: NavLinkRenderProps): string => {
		if (isActive) return `${styles.navLink} ${styles.active}`;
		return `${styles.navLink}`;
	};

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<NavLink to="/media" className={generateNavLinkClasses}>Media</NavLink>
				<NavLink to="/albums" className={generateNavLinkClasses}>Albums</NavLink>
				<NavLink to="/tags" className={generateNavLinkClasses}>Tags</NavLink>
				<NavLink to="/trash" className={generateNavLinkClasses}>Trash</NavLink>
				<NavLink to="/settings" className={generateNavLinkClasses}>Settings</NavLink>
				<NavLink to="/importexport" className={generateNavLinkClasses}>Import/Export</NavLink>
			</nav>
		</header>
	);
};