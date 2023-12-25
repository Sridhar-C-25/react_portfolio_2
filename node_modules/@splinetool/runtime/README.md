# Spline Runtime

**runtime** allows you to run Spline scenes in javascript.

## Install

```bash
yarn add @splinetool/runtime
```

or

```bash
npm install @splinetool/runtime
```

## Usage

To use runtime, first you have to go to the Spline editor, click on the **Export** button, select "**Code**" and then "**Vanilla JS**".

You can copy the URL there and pass it to the `.load()` function:

```js
import { Application } from '@splinetool/runtime';

// make sure you have a canvas in the body
const canvas = document.getElementById('canvas3d');

// start the application and load the scene
const spline = new Application(canvas);
spline.load('https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode');
```

You should be able to see the scene you exported in your canvas.

> :warning: Only **.splinecode** files should be loaded through this API. `.spline` files are meant to be used in the editor.

### Read and modify Spline objects

You can query any Spline object via `findObjectByName` or `findObjectById`.

_(You can get the ID of the object in the `Develop` pane of the right sidebar)._

```js
import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);
spline
	.load('https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode')
	.then(() => {
		const obj = spline.findObjectByName('Cube');
		// or
		// const obj = spline.findObjectById('7AF5EBC0-09BB-4720-B045-F478F8053AA4');

		console.log(obj); // Spline Object => { name: 'Cube', id: '7AF5EBC0-09BB-4720-B045-F478F8053AA4', position: {}, ... }

		// move the object in 3D space
		obj.position.x += 10;
	});
```

### Listen to events

You can listen to any Spline Event you set in the Events panel of the editor by attaching a listener to the Spline instance.

```js
import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);
spline
	.load('https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode')
	.then(() => {
		spline.addEventListener('mouseDown', (e) => {
			if (e.target.name === 'Cube') {
				console.log('I have been clicked!');
			}
		});
	});
```

You can find a list of all of the Spline Event listeners in the [API](#api) section.

### Trigger Spline events from outside

You can trigger any animation Event you set in the Events panel in the Spline Editor.

You can use the `emitEvent` function, passing the [event type](#spline-events) and the name or ID of your object.

_(You can get the ID of the object in the `Develop` pane of the right sidebar)._

```js
import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);
spline
	.load('https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode')
	.then(() => {
		spline.emitEvent('mouseHover', 'Cube');
	});
```

Or you can query the spline object first, and then trigger the event:

```js
import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);
spline
	.load('https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode')
	.then(() => {
		const obj = spline.findObjectByName('Cube');
		objectToAnimate.emitEvent('mouseHover');
	});
```

You can find a list of all of the Spline Events you can pass to the `emitEvent` function in the [Spline Events](#spline-events) section.

### Preloading your scene

You might want to start the loading of `.splinecode` file before your code is loaded. It's possible using a [HTML preload Link tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload). Doing so will only save a little time by ensuring the spline file loading starts before your scripts are done loading. Since internally the `.splinecode` file will be loaded through a `fetch` call, you can do it like this :

```HTML
<html>
<head>
	<!--
		add a preload link tag
		with the scene your want to preload
		at the end of your <head>
		It needs to use the fetch preload type
	-->
	<link rel="preload" href="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" as="fetch"
</head>
```

```js
/*
	When loading the Application, use the third
	param of the load function to make sure the browser
	will use the preloaded file and not make another request
*/
spline.load(
	'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode',
	undefined,
	{
		credentials: 'include',
		mode: 'no-cors',
	}
);
```

### Updating scene variables

If you setup variables in your Spline scene from the editor, you can change them from code either while loading the scene, of after it's loaded.
Note that if in Spline editor you have multiple variables with the same name, only the first one will be updated, so make sure to give unique names to the variables you want to update.
Also note that the values you pass to your variables will be casted into their original type (number, boolean or string).

```js
const spline = new Application(canvas);

// Create an object describing the variables you want to update during load
const myVariables = { myName: 'John', mySize: 350 };

// And pass them as second parameter for the load function
spline.load('.../scene.splinecode', myVariables);

// Later you can update your variables again
spline.setVariables({ myName: 'Paul', mySize: 100 });

// Or change only one variable
spline.setVariable('myName', 'Ringo');
```

## API

### Spline Application Methods

You can call all these different methods on the Spline `Application` instance.

| Name                  | Type                                                                 | Description                                                                                                                         |
| --------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `addEventListener`    | `(eventName: SplineEventName, cb: (e: SplineEvent) => void) => void` | Add an event listener for Spline events                                                                                             |
| `removeEventListener` | `(eventName: SplineEventName, cb: (e: SplineEvent) => void) => void` | Remove an event listener for Spline events                                                                                          |
| `emitEvent`           | `(eventName: SplineEventName, nameOrUuid: string) => void`           | Triggers a Spline event associated to an object with provided name or uuid in reverse order. Starts from first state to last state. |
| `emitEventReverse`    | `(eventName: SplineEventName, nameOrUuid: string) => void`           | Triggers a Spline event associated to an object with provided name or uuid in reverse order. Starts from last state to first state. |
| `findObjectById`      | `(uuid: string) => SPEObject`                                        | Searches through scene's children and returns the object with that uuid.                                                            |
| `findObjectByName`    | `(name: string) => SPEObject`                                        | Searches through scene's children and returns the first object with that name.                                                      |
| `setZoom`             | `(zoom: number) => void`                                             | Sets the initial zoom of the scene.                                                                                                 |
| `setSize`             | `(width: number, height: number) => void`                            | Sets the size of the application and canvas. When called, Spline will stop automatic size updates.                                  |
| `setVariables`        | `(variables: Record<string, string \| number \| boolean>) => void`   | Updates values for passed variables by name.                                                                                        |
| `setVariable`         | `(name: string, value: string \| number \| boolean) => void`         | Updates value for passed variable by name.                                                                                          |
| `getVariables`        | `() => Record<string, string \| number \| boolean>`                  | Returns a record mapping variable names to their respective current values.                                                         |
| `getVariable`         | `(name: string, value: string \| number \| boolean) => void`         | Get current value for a specific variable from its name                                                                             |
| `stop`                | `() => void`                                                         | Stop/Pause all rendering controls and events.                                                                                       |
| `play`                | `() => void`                                                         | Play/Resume rendering, controls and events.                                                                                         |
| `setBackgroundColor`  | `(color:string) => void`                                             | Manually sets the scene/canvas background color with a css color value.                                                             |
| `getAllObjects`       | `() => SPEObject[]`                                                  | Returns a flat list of all the objects present in the scene.                                                                        |
| `getSplineEvents`     | `() => Object[]`                                                     | Returns an array listing all the Spline events used in the scene.                                                                   |

### Spline Events

These are all the Spline event types that you can pass to the `addEventListener`, `emitEvent` and `emitEventReverse` function.

| Name         | Description                                   |
| ------------ | --------------------------------------------- |
| `mouseDown`  | Refers to the Spline `Mouse Down` event type  |
| `mouseHover` | Refers to the Spline `Mouse Hover` event type |
| `mouseUp`    | Refers to the Spline `Mouse Up` event type    |
| `keyDown`    | Refers to the Spline `Key Down` event type    |
| `keyUp`      | Refers to the Spline `Key Up` event type      |
| `start`      | Refers to the Spline `Start` event type       |
| `lookAt`     | Refers to the Spline `Look At` event type     |
| `follow`     | Refers to the Spline `Mouse Up` event type    |
| `scroll`     | Refers to the Spline `Scroll` event type      |
