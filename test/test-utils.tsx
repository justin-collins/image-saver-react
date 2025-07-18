import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { MantineProvider } from '@mantine/core';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<MantineProvider>
			<BrowserRouter>
				{children}
			</BrowserRouter>
		</MantineProvider>
	);
};

const customRender = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
