<template>
    <v-dialog
            v-model="display"
            persistent
            lazy
            full-width
            :width="width">
        <v-text-field
                slot="activator"
                :label="label"
                :value="formattedDatetime"
                readonly>
        </v-text-field>

        <v-card>
            <v-card-text style="padding: 0;">
                <v-tabs fixed-tabs v-model="activeTab">
                    <v-tab key="calendar">
                        <v-icon>event</v-icon>
                    </v-tab>
                    <v-tab key="timer" :disabled="!dateSelected">
                        <v-icon>access_time</v-icon>
                    </v-tab>
                    <v-tab-item key="calendar">
                        <v-date-picker
                                full-width
                                v-model="datePart"
                                scrollable
                                :locale="locale"
                                actions>
                        </v-date-picker>
                    </v-tab-item>
                    <v-tab-item key="timer">
                        <v-time-picker
                                ref="timer"
                                full-width
                                class="v-time-picker-custom"
                                v-model="timePart"
                                scrollable
                                :format="timePickerFormat"
                                actions>
                        </v-time-picker>
                    </v-tab-item>
                </v-tabs>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="grey lighten-1" flat @click.native="clearHandler">{{clearText}}</v-btn>
                <v-btn color="green darken-1" flat @click="okHandler">{{okText}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
  import moment from 'moment'

  const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD'
  const DEFAULT_TIME_FORMAT = 'HH:mm'
  const DEFAULT_TIME = '00:00'

  export default {
    name: 'v-datetime-picker',
    model: {
      prop: 'datetime',
      event: 'input'
    },
    props: {
      datetime: {
        type: [Date, String],
        default: null
      },
      label: {
        type: String,
        default: ''
      },
      width: {
        type: Number,
        default: 320
      },
      format: {
        type: String,
        default: 'YYYY-MM-DD HH:mm:ss'
      },
      timePickerFormat: {
        type: String,
        default: '24hr'
      },
      locale: {
        type: String,
        default: 'en-us'
      },
      clearText: {
        type: String,
        default: 'CLEAR'
      },
      okText: {
        type: String,
        default: 'OK'
      }
    },
    data () {
      return {
        display: false,
        dateSelected: false,
        timeSelected: false,
        activeTab: 0,
        selectedDatetime: null
      }
    },
    created () {
      if (this.datetime instanceof Date) {
        this.selectedDatetime = this.datetime
      } else if (this.datetime instanceof String) {
        this.selectedDatetime = moment(this.datetimeString, this.format)
      }
    },
    computed: {
      datePart: {
        get () {
          let val = this.selectedDatetime ? moment(this.selectedDatetime).format(DEFAULT_DATE_FORMAT) : ''
          return val
        },
        set (val) {
          this.dateSelected = true
          this.activeTab = 1

          let date = moment(val, DEFAULT_DATE_FORMAT)
          let hour = this.selectedDatetime ? moment(this.selectedDatetime).hour() : 0
          let minute = this.selectedDatetime ? moment(this.selectedDatetime).minute() : 0
          let input = moment().year(date.year()).month(date.month()).date(date.date()).hour(hour).minute(minute).second(0)
          this.selectedDatetime = input.toDate()
        }
      },
      timePart: {
        get () {
          let val = this.selectedDatetime ? moment(this.selectedDatetime).format(DEFAULT_TIME_FORMAT) : DEFAULT_TIME
          return val
        },
        set (val) {
          if (this.$refs.timer.selectingHour) {
            return
          }
          this.timeSelected = true

          let time = moment(val, DEFAULT_TIME_FORMAT)
          let input = moment(this.selectedDatetime).hour(time.hour()).minute(time.minute()).second(0)
          this.selectedDatetime = input.toDate()
        }
      },
      formattedDatetime () {
        return this.datetime ? moment(this.datetime).format(this.format) : ''
      }
    },
    methods: {
      okHandler () {
        this.display = false
        this.activeTab = 0
        this.$refs.timer.selectingHour = true

        this.$emit('input', this.selectedDatetime)
      },
      clearHandler () {
        this.display = false
        this.activeTab = 0
        this.$refs.timer.selectingHour = true

        this.$emit('input', null)
      }
    }
  }
</script>
