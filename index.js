/**
 * Pug driver for Sapling
 */


/* Dependencies */
import path from 'node:path';
import pug from 'pug';
import Interface from '@sapling/sapling/drivers/render/Interface.js';

import _ from 'underscore';

import SaplingError from '@sapling/sapling/lib/SaplingError.js';


export default class Pug extends Interface {
	/**
	 * Initialise Pug
	 */
	constructor(App, viewsPath) {
		super();

		this.app = App;
		this.viewsPath = viewsPath;
		this.tags = {};

		this.engine = pug;
	}


	/**
	 * Render a template file
	 *
	 * @param {string} template Path of the template file being rendered, relative to views/
	 * @param {object} data Object of data to pass to the template
	 */
	async render(template, data) {
		let rendered;

		try {
			rendered = this.engine.compileFile(path.join(this.viewsPath, template));
		} catch (error) {
			return new SaplingError(error);
		}

		return rendered(_.extend(data, this.tags));
	}


	/**
	 * Register custom tags with the template engine
	 *
	 * @param {object} tags Object of functions
	 */
	async registerTags(tags) {
		this.tags = tags;
	}
}
