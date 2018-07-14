<template>
    <v-app dark>
        <v-container>
            <v-layout row justify-center>
                <v-flex xs4>
                    <v-datetime-picker v-model="datetime"></v-datetime-picker>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
  export default {
    data () {
      return {
        datetime: null
      }
    }
  }
</script>
