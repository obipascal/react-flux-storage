# React Flux Storage

A simple react JS/Native state management library for anyone looking to use a state management library on his project to effectively manage global state. [here](https://reactjs.org/blog/2014/05/06/flux.html)

## How To Install the Library

## `npm install @bilmapay/react-flux-storage`

### Or

`yarn add @bilmapay/react-flux-storage`

Now this library is base on:

1. Actions
2. Constants
3. Stores and
4. Middleware (Think of this as action handles that takes the action handle it and return new state)

To get started with react flus lib first lets organize our project structure. As you can see from the image below the config folder (which can be renamed to anything say's flus but for this tutorial i will be using config)
contains 4-folders namely:

1. Actions
2. Constants
3. Middlewares
4. Stores

![image](https://user-images.githubusercontent.com/30573300/170140874-c4e05321-e5de-4ee7-8dd4-13eb09ad39eb.png "Project Structure")

Now let's break things down for clearity

## Actions

The action folder basically contains a javascript object that returns a key-value parse of:

1. Action Key -> which serve as the constant value
2. Action handlers -> which are function return by middleware (As said earlier there're like handles that accept the current app state and action dispatched to be handle)
   For example:

**_src/flus/actions/app.actions.js_**

```js
import Middleware from "./../Middlewares"

/**
 * Application actions
 */
export const appActions = {
	/* handle drawer addition */
	"app/stores/create-dynamic-store": Middleware.app.createDynamicStore,
	"app/events/emit-dynamic-event": Middleware.app.emitDynamicEvent,
	"app/update-name": Middleware.app.updateAppName
}
```

## Constants

Constants are just basically strings exported to while thier values are used as the action key.

```js
export const UPDATE_APPNAME = "app/update-name"

export const DS_STORE = "app/stores/create-dynamic-store"
export const DE_EVENT = "app/events/emit-dynamic-event"
```

## Middlewares

Middlewares are the the core feature component is this library as their handle state logic for the application alot can really be done in the middlewares. They basically computes
the state and return a new object of fresh data which updateds the entire app depending on the components that subscribe for the update by using the `js useFlusStore()` hook
The middlewares are javascript objects where the name of the middleware is the key while the value is a function

for example:
**_src/flus/middlewares/app.middleware.js_**

```js
/* update application name */
export const appMiddlewares = {
	/** App middleware group */
	app: {
		updateAppName(state, payload) {
			state.app.name = payload?.appname

			return { ...state }
		}
	}
}
```

## Stores

Stores are normal javascript objects that contains key-value parse for example:

```js
export const AppStore = {
	app: {
		name: "flus State Manager",
		version: "1.0.0",
		auth: "Obi Pascal Banjuare"
	}
}
```

Finally let's but things together and build a functional application with react-flus library and see how to register actions and stores then use the flus hooks to
subscribe to update for a particular react component.

## Step 1 - App.js

```js
import { appActions } from "./../config/actions/app.actions"
import { AppStores } from "./../config/stores"
import FlusAppServiceProvider from "./../flus/FlusAppServiceProvider"
import React from "react"
import Hello from "./Hello"

export default function App() {
	return (
		<FlusAppServiceProvider stores={AppStores} actions={appActions}>
			<Hello />
		</FlusAppServiceProvider>
	)
}
```

## step 2 - Hello.js

```js
import { FLUSDYNAMIC_STORE, useFlusDispatcher, useFlusStores } from "./../flus"
import React from "react"
import { UPDATE_APPNAME } from "./../config/constants/app.const"

const listItems = [
	{
		id: 1,
		name: "First Name",
		value: "Obi"
	},
	{
		id: 2,
		name: "Last Name",
		value: "Pascal"
	},
	{
		id: 3,
		name: "Age",
		value: 22
	},

	{
		id: 4,
		name: "Email",
		value: "pascalobi83@gmail.com"
	},
	{
		id: 5,
		name: "Contact",
		value: "09125256272"
	}
]

export default function Hello() {
	const { app, myDynamicList } = useFlusStores()
	const dispatcher = useFlusDispatcher()

	const changeAppName = () => {
		dispatcher({ type: UPDATE_APPNAME, payload: { appname: "Flus SM Name Updated" } })
	}

	const createDynamicList = () => {
		dispatcher({ type: FLUSDYNAMIC_STORE, payload: { store: "myDynamicList", data: listItems } })
	}

	return (
		<div>
			Hello! my name is: {app?.name}, I'm {app?.version} years old
			<br />
			<br />
			<button classsName="btn btn-lg btn-primary" onClick={changeAppName} type="button">
				Change App name to: "Flus SM Name Updated"
			</button>
			<br />
			<br />
			<br />
			{typeof myDynamicList !== "undefined" && Array.isArray(myDynamicList) && (
				<>
					<ul>
						{myDynamicList?.map(item => (
							<li key={item?.id}>
								<strong>{item?.name}</strong>: {item?.value}
							</li>
						))}
					</ul>
				</>
			)}
			<br />
			<br />
			<button classsName="btn btn-lg btn-primary" onClick={createDynamicList} type="button">
				Create a Dynamic List
			</button>
		</div>
	)
}
```

## Step 3 - Actully they're no more steps that's it you are good to go with your app.

If you want to try out the library and see how it works before using it in your project or implement it in your newly created project
feel free to clone the repo and try it out.

## Thanks for reading

For contribution to this repo well you know what to do

## Licence

**_MIT_** -> Feel free to be a part of the lib build process.
