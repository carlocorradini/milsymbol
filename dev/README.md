# Development resources

Some minor notes and resources so that we (I) don't forget things.

- octagon.svg, base template for creating icons in SVG format.

- char-width.html, a HTML page to generate a JSON with character widhts used in textfields.js

## Create prerelease

- Update `package.json`, set `version` to a prerelease version, e.g. `2.0.0-rc1`
- Update version in ms.js
- Run `npm pack` to create package
- Run `npm publish <package>.tgz --tag next` to publish the package under the `next` tag
- Run `npm install --save package@next` to install prerelease package

## Create release

- Update `package.json`, set `version` to version, e.g. `2.0.0`
- Update version in ms.js
- Run `npm publish` to publish
- Create release on GitHub with tag `v2.0.0`
