Things-calendar
========

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]

<p align="center">
  <img src="https://raw.githubusercontent.com/JensDebergh/things-calendar/master/screenshot.jpg" alt="things-calendar" />
</p>

## Installation

    npm install things-calendar
## Usage

```javascript
import ThingsCalendar from 'things-calendar';

<ThingsCalendar
  ref={calendar => this.calendar = calendar}
  show={true}
  onSelect={(date) => console.log(date)}
/>
```

### Configuration

Things-calendar leaves the heavy lifting up to [pikaday](https://github.com/dbushell/Pikaday) and supports every feature pikaday has to offer:

* `field` bind the datepicker to a form field
* `trigger` use a different element to trigger opening the datepicker, see [trigger example][] (default to `field`)
* `bound` automatically show/hide the datepicker on `field` focus (default `true` if `field` is set)
* `ariaLabel` data-attribute on the input field with an aria assistance tekst (only applied when `bound` is set)
* `position` preferred position of the datepicker relative to the form field, e.g.: `top right`, `bottom right` **Note:** automatic adjustment may occur to avoid datepicker from being displayed outside the viewport, see [positions example][] (default to 'bottom left')
* `reposition` can be set to false to not reposition datepicker within the viewport, forcing it to take the configured `position` (default: true)
* `container` DOM node to render calendar into, see [container example][] (default: undefined)
* `format` the default output format for `.toString()` and `field` value (requires [Moment.js][moment] for custom formatting)
* `formatStrict` the default flag for moment's strict date parsing (requires [Moment.js][moment] for custom formatting)
* `toString(date, format)` function which will be used for custom formatting. This function will take precedence over `moment`.
* `parse(dateString, format)` function which will be used for parsing input string and getting a date object from it. This function will take precedence over `moment`.
* `defaultDate` the initial date to view when first opened
* `setDefaultDate` make the `defaultDate` the initial selected value
* `firstDay` first day of the week (0: Sunday, 1: Monday, etc)
* `minDate` the minimum/earliest date that can be selected (this should be a native Date object - e.g. `new Date()` or `moment().toDate()`)
* `maxDate` the maximum/latest date that can be selected (this should be a native Date object - e.g. `new Date()` or `moment().toDate()`)
* `disableWeekends` disallow selection of Saturdays or Sundays
* `disableDayFn` callback function that gets passed a Date object for each day in view. Should return true to disable selection of that day.
* `yearRange` number of years either side (e.g. `10`) or array of upper/lower range (e.g. `[1900,2015]`)
* `showWeekNumber` show the ISO week number at the head of the row (default `false`)
* `pickWholeWeek` select a whole week instead of a day (default `false`)
* `isRTL` reverse the calendar for right-to-left languages
* `i18n` language defaults for month and weekday names (see internationalization below)
* `yearSuffix` additional text to append to the year in the title
* `showMonthAfterYear` render the month after year in the title (default `false`)
* `showDaysInNextAndPreviousMonths` render days of the calendar grid that fall in the next or previous months (default: false)
* `enableSelectionDaysInNextAndPreviousMonths` allows user to select date that is in the next or previous months (default: false)
* `numberOfMonths` number of visible calendars
* `mainCalendar` when `numberOfMonths` is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`). Only used for the first display or when a selected date is not already visible
* `events` array of dates that you would like to differentiate from regular days (e.g. `['Sat Jun 28 2017', 'Sun Jun 29 2017', 'Tue Jul 01 2017',]`)
* `theme` define a classname that can be used as a hook for styling different themes, see [theme example][] (default `null`)
* `blurFieldOnSelect` defines if the field is blurred when a date is selected (default `true`)
* `onSelect` callback function for when a date is selected
* `onOpen` callback function for when the picker becomes visible
* `onClose` callback function for when the picker is hidden
* `onDraw` callback function for when the picker draws a new month
* `keyboardInput` enable keyboard input support (default `true`)

### Configurations at runtime

```javascript
import ThingsCalendar from 'things-calendar';

<ThingsCalendar
  ref={calendar => this.calendar = calendar}
  show={true}
  onSelect={this.onSelect}
/>


// Reset datepicker onSelect
onSelect(date) {
  this.calendar.calendarPicker.goToToday();
  this.calendar.calendarPicker.setDate(null);
}
```

For a full list of methods for the calendarPicker check out pikaday's official [documentation](https://github.com/dbushell/Pikaday)

[npm-image]: https://img.shields.io/npm/v/things-calendar.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/things-calendar
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: LICENSE.md