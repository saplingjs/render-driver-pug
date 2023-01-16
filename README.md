# Pug driver for Sapling

<a href="https://github.com/saplingjs/render-driver-pug/actions"><img src="https://img.shields.io/github/actions/workflow/status/saplingjs/render-driver-pug/test.yml?branch=master" alt="GitHub Workflow Status"></a>
<a href="https://app.codecov.io/gh/saplingjs/render-driver-pug"><img src="https://img.shields.io/codecov/c/gh/saplingjs/render-driver-pug?token=E3NRW4IJW9" alt="Codecov"></a>
<a href="https://www.npmjs.com/package/@sapling/render-driver-pug"><img src="https://img.shields.io/npm/v/@sapling/render-driver-pug.svg?sanitize=true" alt="Version"></a>
<a href="https://github.com/saplingjs/render-driver-pug/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@sapling/render-driver-pug.svg?sanitize=true" alt="License"></a>

This package allows using the [Pug](https://pugjs.org/) templating engine with [Sapling](https://github.com/saplingjs/sapling/).


## Installation

### Via the CLI (recommended)

This package can be installed via the [Sapling CLI](https://saplingjs.com/docs/#/cli) via the project creation questionnaire;

    sapling create

Or added to an existing project by re-running the questionnaire;

    sapling edit


### Manually

Alternatively, if you prefer to install it manually, you can install it via npm;

    npm install --save @sapling/render-driver-pug

Then, modify your `config.json` to select the Pug driver;

    {
        "render": {
            "driver": "Pug"
        }
    }


## Usage

Once installed, all views in `views/` will be run through the Pug templating engine.  Refer to [their documentation](https://pugjs.org/) for instructions on how to use it.


## Questions & Issues

Bug reports, feature requests and support queries can be filed as [issues on GitHub](https://github.com/saplingjs/render-driver-pug/issues).  Please use the templates provided and fill in all the requested details.


## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/saplingjs/render-driver-pug/releases).


## License

[MIT](https://opensource.org/licenses/MIT)
