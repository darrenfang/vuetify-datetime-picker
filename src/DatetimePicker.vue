<template>
    <v-menu
            lazy
            :close-on-content-click="false"
            v-model="menu"
            transition="v-scale-transition"
            offset-y
            :nudge-left="40">
        <v-text-field
                slot="activator"
                :label="label"
                v-model="actualDatetime"
                readonly></v-text-field>

        <v-tabs fixed-tabs v-model="active">
            <v-tab key="calendar">
                <v-icon>event</v-icon>
            </v-tab>
            <v-tab key="timer">
                <v-icon>access_time</v-icon>
            </v-tab>
            <v-tab-item key="calendar">
                <v-date-picker
                        v-model="dateModel"
                        no-title
                        scrollable
                        actions
                        @input="checkHours">
                </v-date-picker>
            </v-tab-item>
            <v-tab-item key="timer">
                <v-time-picker
                        ref="timer"
                        v-model="timeModel"
                        no-title
                        scrollable
                        format="24hr"
                        actions
                        @input="checkMinutes">
                </v-time-picker>
            </v-tab-item>
        </v-tabs>
    </v-menu>
</template>

<script>
  export default {
    name: 'v-datetime-picker',
    props: {
      datetime: {
        type: String,
        required: true
      },
      label: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        dateModel: '',
        timeModel: '',
        menu: false,
        active: '0'
      }
    },
    computed: {
      actualDatetime: {
        get () {
          if (this.dateModel && this.timeModel) {
            return this.dateModel + ' ' + this.timeModel + ':00'
          }
          if (this.dateModel) {
            return this.dateModel + ' ' + '00:00:00'
          }
          return ''
        },
        set (value) {
          if (value) {
            this.dateModel = value.split(' ')[0]
            this.timeModel = value.split(' ')[1]
          } else {
            this.dateModel = null
            this.timeModel = null
          }
        }
      }
    },
    methods: {
      checkMinutes (val) {
        if (this.$refs.timer.selectingHour === false) {
          this.timeModel = val
          this.menu = false
          this.$emit('input', this.actualDatetime)
          this.showHours()
        }
      },
      checkHours (val) {
        this.dateModel = val
        this.showMinutes()
        this.$emit('input', this.actualDatetime)
      },
      showMinutes () {
        this.active = '1'
      },
      showHours () {
        this.active = '0'
      }
    },
    created () {
      this.actualDatetime = this.datetime
    }
  }
</script>