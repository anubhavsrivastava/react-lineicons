# react-lineicons

[![build status](https://api.travis-ci.org/anubhavsrivastava/react-lineicons.svg?branch=master)](https://travis-ci.org/anubhavsrivastava/react-lineicons/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GitHub issues](https://img.shields.io/github/issues/anubhavsrivastava/react-lineicons.svg?style=flat-square)](https://github.com/anubhavsrivastava/react-lineicons/issues)
[![HitCount](http://hits.dwyl.io/anubhavsrivastava/react-lineicons.svg)](http://hits.dwyl.io/anubhavsrivastava/react-lineicons)

[![NPM](https://nodei.co/npm/react-lineicons.png?downloads=true&stars=true)](https://www.npmjs.com/package/react-lineicons)

Simple react component for using [lineicons](https://v2.lineicons.com/) in React application.

Check icons [here](https://lineicons.com/icons/)

## Installation

react-lineicons is available as an [npm package](https://www.npmjs.com/package/react-lineicons).

```sh
npm install react-lineicons
```

or

```sh
yarn add react-lineicons
```

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import LineIcon from "react-lineicons";

function App() {
  return <LineIcon name="spinner" />;
}
```

## Options

| Property | Type   | Values                                                                                 | Description                                                                                            |
| :------- | :----- | :------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| name     | String | e.g. alarm                                                                             | the name of the icon, see [lineicons](https://v2.lineicons.com/icons/) for list of all available icons |
| tag      | String | e.g. 'li'                                                                              | by default, Icon tag is `i`, which can be changed to any valid HTML element                            |
| size     | String | 'lg', 'md', 'sm', 'xs'                                                                 | the size of the icon                                                                                   |
| style    | Object |                                                                                        | custom style object                                                                                    |
| effect   | String | 'spin', 'tada', 'flashing', 'burst', 'fade-left', 'fade-right', 'fade-up', 'fade-down' | Additional effect on icon                                                                              |

Any other prop would directly be applied as on the root element (useful for a11y).

---

## Using the Pro version of LineIcons

This module only works with free version of lineicons. To use the Pro version, please use the download section from your lineicons dashboard.

---

## Contribution

Suggestions and PRs are welcome!

Please create issue or open PR request for contribution.

---

## License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

refer `LICENSE` file in this repository.
