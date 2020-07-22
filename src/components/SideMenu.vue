<template>
  <div>
    <!-- Menu HEADER -->
    <v-list dense>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">RPCOS4Ph2</v-list-item-title>
          <v-list-item-subtitle>RPC Online Software For Phase-2</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <!-- Side Menu -->

    <v-list>
      <v-list-group v-for="item in items" :key="item.title" no-action :value="true">
        <template v-slot:activator>
          <v-list-item-action>
            <v-icon>{{ item.action }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="subItem in item.items" :key="subItem.title" link :to="subItem.href">
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "SideMenu",

  data() {
    return {
      items: [
        {
          action: "mdi-cog",
          title: "Commands",
          items: [
            { title: "Default", href: "defaultcommands" },
            { title: "Commands", href: "commands" },
            { title: "Sequences", href: "sequneces" },
            { title: "Queues", href: "queues" }
          ]
        },

        {
          action: "mdi-all-inclusive",
          title: "Operations",
          items: [{ title: "Run Control", href: "runcontrol" }]
        },

        {
          action: "mdi-share-variant",
          title: "Control pannel",
          items: [
            { title: "System Setup", href: "systemsetup" },
            { title: "Masking", href: "masking" },
            { title: "FEB Control", href: "febcontrol" }
          ]
        },

        {
          action: "mdi-clipboard-pulse",
          title: "Monitoring",
          items: [
            { title: "Summary", href: "summary" },
            { title: "Grafana", href: "grafana" },
            { title: "Logs", href: "logs" },
            { title: "About", href: "about" }
          ]
        }
      ]
    };
  }
};
</script>