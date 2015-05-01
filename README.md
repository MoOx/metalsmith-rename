# metalsmith-rename [![Travis Build Status](https://travis-ci.org/MoOx/metalsmith-rename.svg)](https://travis-ci.org/MoOx/metalsmith-rename)

> Metalsmith plugin to rename entries

## Installation

```console
$ npm install metalsmith-rename
```

## Usage

```js
import Metalsmith from "metalsmith"
import rename from "metalsmith-rename"

new Metalsmith("./")
  .use(
    rename([
      [/\.md$/, ".html"]
    ])
  )
  .build(err => {if (err) {throw err}})
```

### Options

This plugin takes an array.
Each item must be an array of [pattern, replacement]

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
