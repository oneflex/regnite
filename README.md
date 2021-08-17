<p align="center"><img src="https://user-images.githubusercontent.com/42813496/129691548-7f2b8d40-b92a-4f15-9cf1-e7ba48712a20.PNG" alt="logo" width="414px"></p>

# Regnite - React Native + Firebase boilerplate

## The famous Ignite boilerplate with extra batteries included

[Ignite boilerplate ](https://github.com/infinitered/ignite) by Infinite Red is well known in the React Native community. It is a reliable battle-tested boilerplate to kickstart your React Native app.

Here at oneflex, we extended the Ignite boilerplate to include firebase authentication and better support for Expo.

## Tech Stack

Regnite uses the Ignite tech stack with some additions and modifications:

- Expo
- TypeScript
- Firebase
- React Navigation 5
- Redux [(Why Redux?)](https://github.com/oneflex/regnite#why-redux)
- Redux Thunk and Redux Persist
- Emotion for reactive theming
- React Native Debugger
- Storybook [(Usage)](https://github.com/oneflex/regnite#storybook-usage)
- i18n

## Quick Start

Clone the boilerplate:

```bash
git clone https://github.com/oneflex/regnite.git my-app
cd my-app && npm i
```

Create a Firebase project [(How?)](https://firebase.google.com/docs/web/setup), add a web app, and copy your Firebase config to a `.env.development` file in the top level of your project:

```.env
FIREBASE_API_KEY=[...]
FIREBASE_AUTH_DOMAIN=[...]
FIREBASE_DATABASE_URL=[...]
FIREBASE_PROJECT_ID=[...]
FIREBASE_STORAGE_BUCKET=[...]
FIREBASE_MESSENAGING_SENDER_ID=[...]
FIREBASE_APP_ID=[...]
```

If you want to use [Google](https://docs.expo.dev/versions/latest/sdk/google/) and [Facebook](https://docs.expo.dev/versions/latest/sdk/facebook/) authentication, include the respective auth keys from these platforms in the `.env.development` file:

```.env
FACEBOOK_APP_ID=[...]
GOOGLE_IOS_CLIENT_ID=[...]
GOOGLE_ANDROID_CLIENT_ID=[...]
```

Note that Facebook login doesn't work in the Expo Go app yet.

## Generators

We use [Ignite Generators](https://github.com/infinitered/ignite#generators) to quickly create screens, components etc.

You can create your own, or use our ready made generators for:

- components
- screens
- navigator
- redux actions and reducers

Using a generator:

```
npm run g component TodoItem
npm run g screen Home
npm run g action auth
```

## Storybook Usage

To register a component in storybook, simply require it in the `storybook-registry.ts` file:

```ts
require("../app/components/heading/heading.story");
```

Expo doesn't yet allow adding options to the developer menu, so in order to launch storybook you need to change the `SHOW_STORYBOOK` variable in `App.js` to true:

```js
// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
const SHOW_STORYBOOK = true;
```

## Why Redux?

You may have noticed we use Redux instead of MST (Ignite choice of state management). Redux was a requirement for the project that kickstarted this boilerplate, so we replaced MST with Redux.

We plan on publishing an alternative Regnite boilerplate with [Zustand](https://github.com/pmndrs/zustand) instead of Redux in the future. Any contributions will be highly appreciated!
