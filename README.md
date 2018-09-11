# vuetify-datetime-picker
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/darrenfang/vuetify-datetime-picker/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/vuetify-datetime-picker.svg?style=flat)](https://www.npmjs.com/package/vuetify-datetime-picker)
[![CircleCI](https://img.shields.io/circleci/project/github/darrenfang/vuetify-datetime-picker.svg)](https://circleci.com/gh/darrenfang/vuetify-datetime-picker)

DatetimePicker component for Vuetify.js.

## Installation

```shell
npm install --save vuetify-datetime-picker

or

yarn add vuetify-datetime-picker
```

```js
import Vue from 'vue'
import DatetimePicker from 'vuetify-datetime-picker'
import 'vuetify-datetime-picker/src/stylus/main.styl'

Vue.use(DatetimePicker)
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<v-datetime-picker
        label="Select Datetime"
        v-model="datetime">
</v-datetime-picker>
```

## Properties

|        Name        |  Type         |    Default Value    |                         Description                           |
| ------------------ | ------------- | ------------------- | ------------------------------------------------------------- |
| datetime (model)   | Date/String   |                     | Time picker model.                                            |
| label              | string        |                     | Sets input label.                                             |
| width              | Number        | 320                 | The width of the content.                                     |
| format             | string        | YYYY-MM-DD HH:mm:ss | Defines the format of a datetime displayed in field.          |
| timePickerFormat   | string        | 24hr                | Defines the format of a time displayed in picker. Available options are ampm and 24hr. |
| locale             | string        | en-us               | Sets the locale. Accepts a string with a BCP 47 language tag. |
| clearText          | string        | CLEAR               | Sets the handler when the clear button clicked.               |
| okText             | string        | OK                  | Sets the color of the ok button to danger.                    |

## Events

|    Name    |    Arguments           |       Description        |
| -----------| -----------------------| ------------------------ |
| input      | value (Date/String)    | The updated bound model  |
