import React from 'react';
import test from 'ava';
import {render} from 'ink-testing-library';
import App from './source/app.js';

test('app renders without crashing', t => {
	const {lastFrame} = render(<App name="Test User" />);

	// The app should render some content (not be empty)
	t.truthy(lastFrame());
});

test('app displays user name', t => {
	const {lastFrame} = render(<App name="Jane" />);
	const output = lastFrame();

	// Should contain the user's name somewhere in the output
	t.true(output?.includes('Jane'));
});

test('app renders with undefined name', t => {
	const {lastFrame} = render(<App name={undefined} />);

	// Should render without crashing even with undefined name
	t.truthy(lastFrame());
});
