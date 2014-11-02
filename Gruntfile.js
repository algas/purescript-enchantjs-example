module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({

    libFiles: [
      "src/**/*.purs",
      "bower_components/purescript-*/src/**/*.purs"
    ],

    psc: {
      options: {
        main: "Main",
        modules: ["Main"]
      },
      all: {
        src: ["<%=libFiles%>"],
        dest: "js/index.js"
      }
    },

    watch: {
      files: ["<%=libFiles%>"],
      tasks: ["psc:all"]
    },

    dotPsci: ["<%=libFiles%>"]

  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-purescript");

  grunt.registerTask("main", ["psc:all"]);
  // grunt.registerTask("default", ["main", "dotPsci"]);
  grunt.registerTask("default", ["watch"]);
};
