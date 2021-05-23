# Detect Touch Events

Detect if the browser supports the Touch Events API.

[Live detection test][liveDetectionTest]

Exports a reference to a singleton object (a micro state machine with an update function) with its state set to if the device supports the Touch Events API, as well as an `update()` function which re-runs the tests and updates the object's state.

Note that `detect-touch-events` is one of the micro state machines used by [`detect-it`][detectItRepo] to determine if a device is `mouseOnly`, `touchOnly`, or `hybrid`.

*For more information on the touch events api, please see [MDN's Touch Events][mdnTouchEvents], or the [W3C Touch Events specification][w3cSpecLatest].*


### `detectTouchEvents` micro state machine
```javascript
const detectTouchEvents = {
  hasSupport: true / false,
  browserSupportsApi: true / false,

  // re-run all the detection tests and update state
  update() {...},
}
```

### Installing `detect-touch-events`
```terminal
$ npm install --save detect-touch-events
```

### Using `detect-touch-events`
```javascript
import detectTouchEvents from 'detect-touch-events';
```
```javascript
// touch events api is present on a device with a touch screen - *most useful*
detectTouchEvents.hasSupport === true;

// browser supports the touch events api, but the device may or may not have a touch screen
detectTouchEvents.browserSupportsApi === true;

// updating the state - most apps won't need to use this at all
detectTouchEvents.update();
```

```javascript
/*
 * note that in the case of a browser that doesn't support touch events,
 * including when using a legacy computer and browser, the default state will be:
 */
const detectTouchEvents = {
  hasSupport: false,
  browserSupportsApi: false,
}
```

Note that `hasSupport` is still just an api presence test and some browsers (notably Firefox) may give a false positive (saying it has support on a device without a touch screen), so it is recommended to use [`detect-it`][detectItRepo] which factors in other tests as well to determine device capabilities.

Note that the `update()` function is run once at the time of import to set the object's initial state, and generally doesn't need to be run again. If it doesn't have access to the `window`, then the state will be `undefined` (`detect-touch-events` will not throw an error), and you will need to call the `update()` function manually at a later time to update its state.


### Part of the [`detect-it`][detectItRepo] family
- [`detect-it`][detectItRepo]
  - [`detect-hover`][detectHoverRepo]
  - [`detect-pointer`][detectPointerRepo]
  - **`detect-touch-events`**
  - [`detect-passive-events`][detectPassiveEventsRepo]


<!-- links -->
[liveDetectionTest]: https://detect-it.rafgraph.dev/#detect-touch-events
[w3cSpecLatest]: https://w3c.github.io/touch-events/
[mdnTouchEvents]: https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
[detectItRepo]: https://github.com/rafgraph/detect-it
[detectHoverRepo]: https://github.com/rafgraph/detect-hover
[detectPointerRepo]: https://github.com/rafgraph/detect-pointer
[detectPassiveEventsRepo]: https://github.com/rafgraph/detect-passive-events
