# kindle-clippings-html-formatter

> A module to format the clippings from a Kindle device.

This module *only* formats clippings into HTML. The parsing is done in the [kindle-clippings-parser](https://github.com/sole/kindle-clippings-parser) module.

Shared for educational purposes. No support provided.

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

## Installing

```bash
npm install @sole/kindle-clippings-html-formatter
```

## Using

```javascript
var fs = require('fs');
var parse = require('@sole/kindle-clippings-parser').parse;
var format = require('@sole/kindle-clippings-html-formatter');

var fileContents = fs.readFileSync('clippings.txt', 'utf-8');
var parsed = parse(fileContents);
var htmlOutput = format(parsed);

// done!
console.log(htmlOutput);

```

There's a working example in `example/example.js`.

