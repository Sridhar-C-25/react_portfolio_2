declare module '@splinetool/runtime' {
	export type SplineEvent = {
		target: {
			name: string;
			id: string;
		};
	};

	export type SplineEventName =
		| 'mouseDown'
		| 'mouseUp'
		| 'mouseHover'
		| 'keyDown'
		| 'keyUp'
		| 'start'
		| 'lookAt'
		| 'follow'
		| 'scroll'
		| 'collision'
		| 'rendered';

	export type SPEObject = {
		name: string;
		uuid: string;
		visible: boolean;
		intensity: number;
		position: { x: number; y: number; z: number };
		rotation: { x: number; y: number; z: number };
		scale: { x: number; y: number; z: number };
		/**
		 * Triggers a Spline event.
		 * Starts from firt state to last state.
		 * @param {string} eventName String that matches Spline event's name
		 * @param {string}	uuid String to match to the object's uuid
		 */
		emitEvent: (eventName: SplineEventName) => void;
		/**
		 * Triggers a Spline event in reverse order.
		 * Starts from last state to first state.
		 * @param {string} eventName String that matches Spline event's name
		 */
		emitEventReverse: (eventName: SplineEventName) => void;
	};

	export class Application {
		_controls: any;
		renderOnDemand: boolean;

		canvas: HTMLCanvasElement;
		constructor(
			canvas: HTMLCanvasElement,
			{
				renderOnDemand,
			}?: {
				/**
				 * @deprecated use options.renderMode instead
				 */
				renderOnDemand?: boolean;

				/**
				 * Can either be:
				 * - `auto` runtime tries to only render when necessary (default).
				 * - `manual` only renders when spline.requestRender() is called.
				 * - `continuous` continuously render, once per frame.
				 */
				renderMode?: 'auto' | 'manual' | 'continuous';
			}
		);
		/**
		 * Loads an exported Spline scene
		 * @param path the url pointing toward a .splinecode file
		 * @param variables a key:value object describing initial values of the variables in the file
		 */
		load(
			path: string,
			variables?: Record<string, string | number | boolean>
		): Promise<void>;
		/**
		 * Initializes the application starting from a binary encoded .splinecode file
		 * @param array the binary ArrayBuffer of the .splinecode
		 */
		start(
			array: ArrayBuffer,
			{
				interactive = true,
				variables,
			}?: {
				interactive?: boolean;
				variables?: Record<string, string | number | boolean>;
			}
		): void;
		/**
		 *  Searches through scene's children and returns the object with that uuid
		 * @param uuid	String to match to the object's uuid
		 * @returns SPEObject
		 */
		findObjectById(uuid: string): SPEObject | undefined;
		/**
		 * Searches through scene's children and returns the first object with that name
		 * @param  {string}	name
		 * @returns {Object} SPEObject
		 */
		findObjectByName(name: string): SPEObject | undefined;
		/**
		 * A flat list of all scene objects
		 * @returns {Array.<SPEObject>}
		 */
		getAllObjects(): SPEObject[];
		/**
		 * Returns an array of Spline events
		 * @returns {Array.<Object>}
		 */
		getSplineEvents(): {
			[key: string]: {
				[key: string]: CustomEvent<any>;
			};
		};
		/**
		 * Triggers a Spline event associated to an object with provided name or uuid.
		 * Starts from first state to last state.
		 * @param {string} eventName String that matches Spline event's name
		 * @param {string} nameOrUuid The name or uuid of the object
		 */
		emitEvent(eventName: SplineEventName, nameOrUuid: string): void;
		/**
		 * Triggers a Spline event associated to an object with provided name or uuid in reverse order.
		 * Starts from last state to first state.
		 * @param {string} eventName String that matches Spline event's name
		 * @param {string}	nameOrUuid The name or uuid of the object
		 */
		emitEventReverse(eventName: SplineEventName, nameOrUuid: string): void;
		/**
		 * Add an event listener for Spline events
		 * @param {string} eventName String that matches Spline event's name
		 * @param {function} cb	A callback function with Spline event as parameter
		 */
		addEventListener(
			eventName: SplineEventName,
			cb: (e: SplineEvent) => void
		): void;
		/**
		 * Removes the event listener for a Spline event with the same name and callback
		 * @param {string} eventName String that matches Spline event's name
		 * @param {function} cb	A callback function with Spline event as parameter
		 */
		removeEventListener(
			eventName: SplineEventName,
			cb: (e: SplineEvent) => void
		): void;
		/**
		 * Deactivates runtime
		 */
		dispose(): void;

		setZoom(zoomValue: number): void;

		/**
		 * Manually sets the scene/canvas background color with a css color value.
		 * @param color css color style
		 */
		setBackgroundColor(color: string): void;

		/**
		 * Change the event type to global when passing true and local when passing false
		 * @param global
		 */
		setGlobalEvents(global: boolean): void;

		/**
		 * Manually sets the canvas size to a specific value.
		 * When this is called, the canvas will no longer be
		 * automatically resized on window resize for full-screen mode.
		 * @param {number} width
		 * @param {number} height
		 */
		setSize(width: number, height: number): void;

		get data(): any;
		get eventManager(): any;
		get controls(): any;

		/**
		 * Returns true if spline.stop() was previously called
		 */
		get isStopped(): boolean;

		/**
		 * Stop/Pause all rendering controls and events
		 */
		stop(): void;

		/**
		 * Play/Resume rendering, controls and events
		 */
		play(): void;

		/**
		 * To be used concurrently with spline.renderMode = 'manual
		 * When called this function will flag the render to dirty which means that
		 * the scene will be rendered on next animation frame. Calling this more than once per frame will not trigger multiple render.
		 */
		requestRender(): void;

		/**
		 * Change value for multiple variables
		 * @param variables a key:value object describing values by name of the variables to update
		 */
		setVariables(variables: Record<string, number | boolean | string>): void;

		/**
		 * Change value for a specific variable
		 * @param name name of the variable to update
		 * @param value new value for this variable
		 */
		setVariable(name: string, value: number | boolean | string): void;

		/**
		 * Returns a record mapping variable names to their respective current values.
		 */
		getVariables(): Record<string, number | boolean | string>;

		/**
		 * Get current value for a specific variable from its name
		 * @param name name of the variable
		 */
		getVariable(name: string): number | boolean | string;

		/**
		 * Overrides the location of the wasm file for the UI library.
		 * @param url
		 */
		setUIWasmUrl(url: string): void;
	}
}
