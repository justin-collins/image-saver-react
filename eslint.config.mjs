import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";
import pluginReactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from "eslint/config";

export default defineConfig([
	{ ignores: ["node_modules", "dist"] },
	{ 
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], 
		plugins: { js, "react-hooks": pluginReactHooks, }, 
		extends: ["js/recommended"], 
		languageOptions: { globals: globals.browser },
		settings: { react: { version: "detect" } },
		rules: {
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn"
		}
	},
	pluginReact.configs.flat.recommended,
	pluginReact.configs.flat["jsx-runtime"],
	tseslint.configs.recommended,
	{
		files: ["**/*.{ts,tsx}"],
		rules: {
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "warn"
		}
	},
	{
		files: ["**/*.test.{js,jsx,ts,tsx}"],
		plugins: { jest: pluginJest },
		languageOptions: {
			globals: { ...globals.jest },
		},
		rules: { ...pluginJest.configs.recommended.rules }
	}
]);
