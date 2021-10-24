import test from 'ava';
import path from 'path';
import { fileURLToPath } from 'url';

import SaplingError from '@sapling/sapling/lib/SaplingError.js';

import Pug from '../index.js';


const __dirname = path.dirname(fileURLToPath(import.meta.url));


test.before(t => {
	t.context.pug = new Pug({
		config: {
			production: false
		}
	}, path.join(__dirname, '_data'));
});


test('renders a plain view', async t => {
	const html = await t.context.pug.render('plain.pug');

	t.is(html, '<strong>This is a template.</strong>');
});

test('renders a view with interpolation of data', async t => {
	const html = await t.context.pug.render('interpolation.pug', { template: 'view' });

	t.is(html, '<strong>This is a view.</strong>');
});

test('returns an error for non-existant view', async t => {
	const html = await t.context.pug.render('nonexistant.pug', { template: 'view' });

	t.true(html instanceof SaplingError);
});

test('registers tags', async t => {
	t.plan(3);

	await t.context.pug.registerTags({
		async get(url, role) {
			t.is(url, '/data/posts');
			t.is(role, 'admin');
		}
	});

	const html = await t.context.pug.render('get.pug', { template: 'view' });

	t.is(html, '<strong>Hello</strong><ul></ul>');
});
