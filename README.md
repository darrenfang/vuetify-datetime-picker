# vuetify-datetime-picker
DatetimePicker component for Vue.js.

## Installation

```shell
npm install --save vuetify-datetime-picker
```

### Browser

Include the script file, then install the component with `Vue.use(VuetifyDatetimePicker);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vuetify-datetime-picker/dist/vuetify-datetime-picker.min.js"></script>
<script type="text/javascript">
  Vue.use(VuetifyDatetimePicker);
</script>
```

### Module

```js
import DatetimePicker from 'vuetify-datetime-picker';
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<v-datetime-picker
        label="Select Datetime"
        :datetime="datetime"
        v-model="datetime">
</v-datetime-picker>
```
