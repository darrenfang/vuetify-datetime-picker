<template>
    <v-app dark>
        <v-container>
            <v-layout row justify-center>
                <v-flex xs4>
                    <v-datetime-picker v-model="datetime"></v-datetime-picker>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs4>
                    <v-datetime-picker v-model="datetimeString"></v-datetime-picker>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs4>
                    <v-datetime-picker datetime="2018-01-01 00:00:00" :disabled="true"></v-datetime-picker>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
  import moment from 'moment'

  export default {
    data () {
      return {
        datetime: new Date(),
        datetimeString: moment().format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }
</script>
