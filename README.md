# react-use-form-state
#### (but with built-in helpers)

# Why?
Because `react-use-form-state` is an *incredibly* elegant form handling hook library for React, but lacks a few quality of life adjustments I'd like to see.

This library is a drop in replacement for `react-use-form-state`, so all docs for that library apply here... however we've added the following to the formState:

| key                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isValid: boolean`                                                | `true` by default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `hasChanges: boolean`                                             | `false` by default |
| `hasErrors: boolean`                                              | `false` by default |
| `numberOfErrors: number`                                          | `0` by default... simply the number of keys erported in the form.errors object |
| `changes: object or undefined`                                     | `undefined` by default, but returns an object with *only* the changed fields.  Useful for sending PATCH objects via REST, for example.

# Installation
```
yarn add react-use-form-state-extended
```

# API
Please see [react-use-form-state](https://www.npmjs.com/package/react-use-form-state) for the full documentation.  All credit goes to @wsmd for his amazing work!
