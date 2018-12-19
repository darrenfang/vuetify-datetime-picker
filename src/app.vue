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
            <v-layout row justify-center>
                <v-flex xs4>
                    <span class="subheading">Custom Buttons</span>
                    <v-datetime-picker v-model="datetime">
                        <template slot="actions"
                                  slot-scope="{ parent }"
                        >
                            <v-btn color="error lighten-1" flat @click.native="parent.clearHandler">Cancel</v-btn>
                            <v-btn color="success darken-1" flat @click="parent.okHandler">Done</v-btn>
                        </template>
                    </v-datetime-picker>
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
