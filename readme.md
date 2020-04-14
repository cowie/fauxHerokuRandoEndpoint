# Quick SF Cache API Example Component _(fauxSFDCCache)_

[![Salesforce API v48.0](https://img.shields.io/badge/Salesforce%20API-v48.0-blue.svg)]()
[![Lightning Experience Required](https://img.shields.io/badge/Lightning%20Experience-Required-informational.svg)]()
[![User License Platform](https://img.shields.io/badge/User%20License-Platform-032e61.svg)]()
[![Apex Test Coverage 0](https://img.shields.io/badge/Apex%20Test%20Coverage-0-red.svg)]()

>Using a Heroku endpoint to simulate a remote system, and illustrating how pre-caching data in Platform Cache can drastically improve throughput for a LWC in Salesforce. This is the Heroku side.

Hoping this helps figure out initial usecases for a criminally underused tool, Platform Cache. Any custom views or algorithms reliant on data costly to gather, either by joins, integrations, or processing, especially if the results are somewhat static, can be massively improved by leveraging Cache. Also it's free to play around with, so like play with it y'all.

## Background

Platform Cache, that thing you never knew you never knew about. This is a simple endpoint API to play around with, that sends you back as many objects as you request with 3 random values, one Integer, one Float, one DateTime, along with a row incrementer.

## Install

1. Clone the repository down to ya
2. Push to Heroku
3. hit /getFauxProductData?maxQuantity=x where x is the number of records you want returned in the JSON array.


## Extra Sections
### Security / Limitations
Lots of Cache tips here in the main thrust of docs
https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_org_examples.htm

## Maintainers
[Cowie](https://github.com/cowie)

## Contributing
<!--Give instructions on how to contribute to this repository. Where do I ask questions? Do you accept PRs? What are the requirements to contribute? Don't be a jerk. Use issues if you can.-->

Always looking for more usecases from anyone. Build ya code and add it in a pull req.
Oh if y'all want to do my test code for me too, it's cool. Just sayin'.

## License
[MIT](LICENSE) © CDG