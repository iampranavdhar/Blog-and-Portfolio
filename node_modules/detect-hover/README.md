# Detect Hover

JavaScript wrapper for `hover` and `any-hover` media queries.

[Live detection test][liveDetectionTest]

Exports a reference to a singleton object (a micro state machine with an update function) with its state set to the results of the `hover` and `any-hover` media queries, as well as an `update()` function which re-runs the tests and updates the object's state.

Note that `detect-hover` is one of the micro state machines used by [`detect-it`][detectItRepo] to determine if a device is `mouseOnly`, `touchOnly`, or `hybrid`.

*For more information on the `hover` and `any-hover` media queries, please see the [W3C Media Queries Level 4 specification][w3cSpecLatest]. For information on browser compatibility, please see [Can I Use matchMedia][canIUseMatchMedia].*


### `detectHover` micro state machine
```javascript
const detectHover = {
  // mutually exclusive (only one will be true)
  hover: boolean,
  none: boolean,

  // not mutually exclusive
  anyHover: boolean,
  anyNone: boolean,

  // re-run all the detection tests and update state
  update() {...},
}
```

### Installing `detect-hover`
```terminal
$ npm install detect-hover
```

### Using `detect-hover`
```javascript
import detectHover from 'detect-hover';
```
```javascript
// using the state
detectHover.hover === true; // primary pointing system can hover
detectHover.none === true; // primary pointing system can’t hover, or there is no pointing system

/*
 * identical to the hover media feature, but they correspond to the
 * union of capabilities of all the pointing devices available to the user -
 * more than one of their values can be true, if different pointing devices have
 * different characteristics
 */
detectHover.anyHover === true;
detectHover.anyNone === true;


// updating the state - most apps won't need to use this at all
detectHover.update();
```

```javascript
/*
 * note that in the case of a legacy computer and browser, one that
 * doesn't support detect-hover's detection tests, the default state will be:
 */
const detectHover = {
  hover: undefined,
  none: undefined,
  anyHover: undefined,
  anyNone: undefined,
}
```

Note that the `update()` function is run once at the time of import to set the object's initial state, and generally doesn't need to be run again. If it doesn't have access to the `window` or the browser doesn't support the `matchMedia()` function (all modern browser do), then the state will be `undefined` (`detect-hover` will not throw an error). If `detect-hover` doesn't have access to the `window` at the time of import, you will have to call the `update()` function manually at a later time to update its state.

Note that the hover on-demand value was removed from the [July 6th 2016 W3C Media Queries Level 4][w3cSpec7-6-2016] draft specification, but was included in the [previous draft (January 26th 2016)][w3cSpec1-26-2016] of the spec. Any device that registers as having hover on-demand capabilities will show up as hover `none` in `detectHover`'s state. As a side note, hover on-demand is pretty much useless for practical purposes, and Android touch only devices register that they can hover on-demand, which is achieved via a long press - I view this as a feature that is a bug.

### Part of the [`detect-it`][detectItRepo] family
- [`detect-it`][detectItRepo]
  - **`detect-hover`**
  - [`detect-pointer`][detectPointerRepo]
  - [`detect-touch-events`][detectTouchEventsRepo]
  - [`detect-passive-events`][detectPassiveEventsRepo]


<!-- links -->
[liveDetectionTest]: https://detect-it.rafgraph.dev/#detect-hover
[w3cSpecLatest]: https://www.w3.org/TR/mediaqueries-4/#hover
[w3cSpec7-6-2016]: https://www.w3.org/TR/2016/WD-mediaqueries-4-20160706/#hover
[w3cSpec1-26-2016]: https://www.w3.org/TR/2016/WD-mediaqueries-4-20160126/#hover
[canIUseMatchMedia]: https://caniuse.com/#feat=matchmedia
[detectItRepo]: https://github.com/rafgraph/detect-it
[detectPointerRepo]: https://github.com/rafgraph/detect-pointer
[detectTouchEventsRepo]: https://github.com/rafgraph/detect-touch-events
[detectPassiveEventsRepo]: https://github.com/rafgraph/detect-passive-events
