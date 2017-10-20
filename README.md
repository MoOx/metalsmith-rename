# metalsmith-rename [![Travis Build Status](https://travis-ci.org/MoOx/metalsmith-rename.svg)](https://travis-ci.org/MoOx/metalsmith-rename)

> Metalsmith plugin to rename entries

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/6RNUx3a3Vj2k5iApeppsc9L9/MoOx/metalsmith-rename'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/6RNUx3a3Vj2k5iApeppsc9L9/MoOx/metalsmith-rename.svg' />
</a>

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
