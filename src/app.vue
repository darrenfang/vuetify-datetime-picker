<template>
  <v-app dark>
    <v-container>
      <div class="mb-5">
        Get Source Code:
        <a href="https://github.com/darrenfang/vuetify-datetime-picker/blob/master/src/app.vue" target="_blank">
          https://github.com/darrenfang/vuetify-datetime-picker/blob/master/src/app.vue
        </a>
      </div>

      <v-row align="center">
        <v-expansion-panels multiple>
          <v-expansion-panel>
            <v-expansion-panel-header>Null Value</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker v-model="nullDatetime"></v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="nullDatetime"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Init with Date</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker v-model="datetime"></v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="datetime"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Init with Date without Time</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker v-model="dateWithoutTime" without-time></v-datetime-picker>
              </v-flex>
              <div>Date value: <span v-text="dateWithoutTime"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Init with Date without Clear Button</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker v-model="datetime" clear-text=""></v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="datetime"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Init with Date without Cancel Button</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker v-model="datetime" cancelText=""></v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="datetime"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Init with Date (persistent)</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker v-model="datetime" persistent></v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="datetime"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Init with String</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker v-model="datetimeString"></v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="datetimeString"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Init with String without Time</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker v-model="dateStringWithoutTime" without-time></v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="dateStringWithoutTime"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Loading</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker loading></v-datetime-picker>
              </v-flex>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Custom Loading</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker loading>
                  <template slot="progress">
                    <v-progress-linear color="red" indeterminate absolute height="7"></v-progress-linear>
                  </template>
                </v-datetime-picker>
              </v-flex>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Disabled</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker v-model="datetime" disabled></v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="datetime"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Custom Actions</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker v-model="datetime">
                  <template slot="actions" slot-scope="{ parent }">
                    <v-btn color="error lighten-1" @click.native="parent.clearHandler">Cancel</v-btn>
                    <v-btn color="success darken-1" @click="parent.okHandler">Done</v-btn>
                  </template>
                </v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="datetime"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Custom Icons</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker v-model="datetime">
                  <template slot="dateIcon">
                    <v-icon>fas fa-calendar</v-icon>
                  </template>
                  <template slot="timeIcon">
                    <v-icon>fas fa-clock</v-icon>
                  </template>
                </v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="datetime"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Custom Format</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker v-model="formattedDatetime" date-format="MM/dd/yyyy"></v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="formattedDatetime"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Use Seconds</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-alert type="warning"> You should set <code>time-format</code>. </v-alert>
              <v-flex xs4>
                <v-datetime-picker
                  v-model="datetime"
                  :time-picker-props="timeProps"
                  time-format="HH:mm:ss"
                ></v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="datetime"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Custom Properties</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-alert type="warning"> You should set <code>time-format</code>. </v-alert>
              <v-flex xs4>
                <v-datetime-picker
                  v-model="datetime"
                  :text-field-props="textFieldProps"
                  :date-picker-props="dateProps"
                  :time-picker-props="timeProps"
                  time-format="HH:mm:ss"
                ></v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="datetime"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Custom Format: ISO</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker v-model="datetimeStringISO" use-iso ></v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="datetimeStringISO"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Custom Property and Format: German date and time format, ISO</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-flex xs4>
                <v-datetime-picker
                  v-model="datetimeStringISO"
                  use-iso
                  label="Tag und Zeit"
                  date-format="dd.MM.yyyy"
                  time-format="HH:mm"
                  ok-text="Speichern"
                  clear-text="Löschen"
                  cancel-text="Abbrechen"
                  :date-picker-props="datePropsDe"
                  :time-picker-props="timePropsDe"
                ></v-datetime-picker>
              </v-flex>
              <div>Datetime value: <span v-text="datetimeStringISO"></span></div>
            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-expansion-panels>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  data() {
    return {
      nullDatetime: null,
      datetime: new Date(),
      dateWithoutTime: new Date(),
      datetimeString: '2019-01-01 12:00',
      datetimeStringISO: '2019-01-01T11:00:00.000Z',
      dateStringWithoutTime: '2019-01-01',
      formattedDatetime: '09/01/2019 12:00',
      textFieldProps: {
        appendIcon: 'event'
      },
      dateProps: {
        headerColor: 'red'
      },
      timeProps: {
        useSeconds: true,
        ampmInTitle: true
      },
      datePropsDe: {
        locale: 'de-de',
        firstDayOfWeek: 1
      },
      timePropsDe: {
        locale: 'de-de',
        format: '24hr'
      }
    }
  }
}
</script>
