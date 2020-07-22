<template>
  <v-container>
    <v-card>
      <v-card-title>
        Logs
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-reload</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>

        <template v-for="item in items">
          <v-hover :key="item.title" v-slot:default="{ hover }">
            <v-sheet tile :class="hover ? item.status : null" >
              <b><span v-text="item.headline" :class="item.status"></span></b>
              <span>- {{ item.action }}</span>
              <br>
              <span v-text="item.subtitle"></span>
              <v-divider />
            </v-sheet>
          </v-hover>
        </template>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'RunControl',

    data: () => ({
      items: [
        {
          action: "15 min",
          headline: "Brunch this weekend?",
          status: "error--text",
          subtitle:
            "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?I'll be in your neighborhood doing errands this weekend. Do you want to hang out?I'll be in your neighborhood doing errands this weekend. Do you want to hang out?I'll be in your neighborhood doing errands this weekend. Do you want to hang out?I'll be in your neighborhood doing errands this weekend. Do you want to hang out?I'll be in your neighborhood doing errands this weekend. Do you want to hang out?I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          action: "2 hr",
          headline: "Summer BBQ",
          status: "primary--text",
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          status: "warning--text",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          status: "error--text",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          status: "primary--text",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          status: "error--text",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          status: "error--text",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          status: "info--text",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          status: "error--text",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          status: "error--text",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          status: "info--text",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          status: "error--text",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          status: "error--text",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          status: "info--text",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          status: "error--text",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          status: "error--text",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          status: "info--text",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          status: "error--text",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          status: "error--text",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          status: "info--text",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          status: "error--text",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          status: "error--text",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          status: "info--text",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          status: "error--text",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          status: "error--text",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          status: "info--text",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          status: "error--text",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          status: "error--text",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          status: "info--text",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ]
    }),
  }
</script>
