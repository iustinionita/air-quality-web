## Air quality app

The easiest way to check the **air quality** in your area.

This app will give informations about polluting gases such as `NO2`, `PM10`, `O3`, `PM2.5`, or, if you're not that interested in technical data, simply check the rating at the bottom of the page. The air quality will be rated from `Very Poor` to `Good`.

### Where am I getting the data from?

This app will consume an `API` built using `NodeJS` and `ExpressJS` to get the data from OpenWeatherMap.org. 

The [API Repository can be found here](https://github.com/iustinionita/air-quality-api "API Repository can be found here")!

*I could've fetched the data directly from OpenWeatherMap API, but I was willing to learn how to build a simple API.*

### How to use?

1. Input the area you're looking for into the search field and click on the `Search` button.
2. If there are any results, the technical data should be show at the top of the page and the air quality rate at the bottom of the page.
3. Sometimes a location can be found in two or more different countries, so to avoid getting the wrong location data, you can use the country initials.

*Example*: **Bristol** can be found in the **United Kingdom** and **United States**. If I'm looking for the data corresponding to Bristol US, I can search for `Bristol, US`.


