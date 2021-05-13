# Module Project: Async Redux - React Redux App

This project allows you to practice the concepts and techniques learned in this module and apply them in a concrete project. This module explored asyncronous action creators in Redux. In your project you will demonstrate proficiency of these subjects and principles by building an app from scratch that consumes and API of your choosing, and displays data fetched from that API.

## Introduction

This is the chance to let your skills shine! You have learned _sooo_ much the last month, and now you get to put all of your hard-earned skills to work. Choose an open api ([this list](https://github.com/public-apis/public-apis) has a lot of great ones - look for ones with `Auth: no` and `HTTPS: yes` - or just do a google search for `open apis`). Protip - don't take too long choosing an API. Pick one that looks interesting, and get building.

Once you have chosen an API to consume, build an app that makes sense for the data you will be retrieving.

## Vercel
@ https://nora-exe-redux-test.vercel.app/

![Preview](app\public\seacrits-1.png)

# Notes

## Links
* GP 🎥 https://youtu.be/KHDQHSsdnrw
* MP 🎥 _______________________________

## Key Concepts
*  [Finite State Machine](https://www.youtube.com/watch?v=I0HBrcE_HOI) - A mathematical model used to map the states and transitions between states in a given system.
*  [middleware](https://redux.js.org/understanding/history-and-design/middleware) - Code that can be injected into a larger applications process.

## Key Terminology
*  [redux middleware](https://designingforscale.com/understanding-redux-middleware-and-writing-custom-ones/) - Code that can be injected into specifically into the redux flow.
*  [redux-thunk](https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60) - A redux middleware package that allows for functional action creators and mulitple calls to dispatch
*  [Alan Turing](https://www.youtube.com/watch?v=dNRDvLACg5Q) - English Mathematician, computer scientist and cryptanalyst that is credited with creating the mathamatical basis of computer science.

# Review
## Finite State & Redux
A machine can have a finite number of states, but it can only operate in one state at a given time. For example:
* initial state (store).
* current state (store).
* inputs or actions (action creators) that trigger transitions (reducers) to the next state.

Another example is a door. The states and actions would be:

| current state	| action (input)| new state |
|:--------------|:-------------:|----------:|
| locked closed | `unlock` | unlocked closed |
| unlocked closed | `lock` | locked closed |
| unlocked closed | `open` | unlocked open |
| locked open | `close` | locked closed |
| unlocked open | `lock` | locked open |
| locked open	| `unlock`	| unlocked open |

## Middleware
**Middleware** intercepts a process, runs a function at the intercept point, then (usually) continues the process. Sometimes middleware stops the process entirely. Middleware intercepts every action **before** it flows through to the Reducers.

Middleware can:
* stop actions.
* forward an action untouched.
* dispatch a different action.
* dispatch multiple actions.

Add the dependency with `npm install redux-logger`. Get started with
```javascript
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const store = createStore(
  reducer,
  applyMiddleware(logger)
);
```

## 'Thunk,' async action creators, and external API
Redux Thunk is a separate node package called `redux-thunk`. Redux thunk can make the action-reducer flow asynchronous and make API calls from action creators.
* Note: a `thunk` is a special name for a function that's returned by another function.

When an action creator is called `redux-thunk` intercepts and acts on returned data. If the thing returned is an action, it forwards the action through to the reducer. If the thing returned is a function, AKA a thunk (a function returned from a function), then it invokes the thunk and passes the `dispatch` function as an argument to it. So we can run an async function, like an API call, and inside `.then()` we can dispatch an action.

```javascript
const logInUser = creds => dispatch => {
  return axios.post('/login', creds).then(res => {
    const loggedInAction = { type: USER_LOGGED_IN, payload: res.data.user }
    dispatch(loggedInAction);
  });
}
```
For setup, add `redux-thunk` as a dependency, `import thunk from 'redux-thunk';` in the main `index.js` page, and pass it into middleware with
```javascript
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
```
