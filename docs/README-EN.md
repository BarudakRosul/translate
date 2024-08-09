<div align="center">
  <img src="../image/logo.svg" alt="Translate Logo" width="95"/>
  <h1>Translate</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/translate/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Report Bug</a> · <a href="https://github.com/BarudakRosul/translate/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Request Feature</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/translate/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/translate/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/translate"><img src="https://img.shields.io/node/v/%40barudakrosul%2Ftranslate" alt="Node Engines"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/translate"><img src="https://img.shields.io/npm/v/@barudakrosul/translate" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/translate" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/translate"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Ftranslate" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/translate/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/translate?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/translate/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/translate?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/translate/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/translate" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
6. [License](#license)
7. [Acknowledge](#acknowledge)
8. [Donate](#donate)
9. [Changelog](#changelog)

## Introduction

Translate is a JavaScript extension that converts each character in a string to another character based on a provided translation table. It is made as similar as possible to `translate()` in Python.

## Features

Translate offers the following features:

- Replaces each character in a string based on a given translation table.
- Easy to use with Unicode support.
- Can be integrated into TypeScript code.

## Installation

To install Translate locally, follow these installation steps:

```shell
npm install @barudakrosul/translate
```

## Usage

To start using Translate, import the module first:

**1\. CommonJS**
```javascript
require("@barudakrosul/translate");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import "@barudakrosul/translate";
```

**3\. TypeScript**
```typescript
import "@barudakrosul/translate";
```

Example of usage:

```javascript
let table = {
  65: 66, // A -> B
  66: 67, // B -> C
  67: 68  // C -> D
};

let text = "ABC";
console.log(text.translate(table));

// Result:
// BCD
```

For example, if what is being translated is an emoji:

```javascript
const table = {
  0x1F600: 0x1F601,  // 😀 -> 😁
  0x1F602: 0x1F923   // 😂 -> 🤣
};

console.log("😀 😂".translate(table));

// Result:
// 😁 🤣
```

## Contribution

Contributions to Translate are greatly appreciated! Whether reporting bugs, suggesting new features, or contributing to code improvements.

## License

Translate is licensed under the Apache-2.0 License - see the [LICENSE](/LICENSE) file for details.

## Acknowledge

Translate appreciates the support and contributions of the following individuals and open source projects:

- [@FajarKim](https://github.com/FajarKim) - Lead developer and creator of the application.
- Open source community - For valuable contributions to the tools and libraries used in this project.

## Donate

We really appreciate your support to continue developing this project. If you find this project useful, you can support us with a donation:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Every donation, no matter the amount, means a lot to us. Thank you for your support! ❤️

## Changelog

Keep up with the latest changes and updates of Translate by referring to [Changelog](https://github.com/BarudakRosul/translate/releases).

Thank you for choosing Translate! We aim to provide an easy solution to replace any character in a string based on the translation table provided.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)
