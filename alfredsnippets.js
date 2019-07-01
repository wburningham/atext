"use strict";

const JSZip = require("jszip");
const fs = require("fs");
const uuidv4 = require("uuid/v4");

// Create archive.
const zip = new JSZip();

const delimiterFns = {
  dash: function(s) {
    return s + "-";
  },
  colon: function(s) {
    return s + ":";
  },
  semicolon: function(s) {
    return s + ";";
  },
  period: function(s) {
    return s + ".";
  },
  space: function(s) {
    return s + " ";
  },
  uppercase: function(s) {
    return s[0].toUpperCase() + s.substring(1);
  }
};

fs.readFileSync("corrections.txt", "utf-8")
  .split(/\r?\n/)
  .forEach(function(line) {
    Object.keys(delimiterFns).forEach(function(delimiter) {
      const delimiterFn = delimiterFns[delimiter];

      const parts = line.split(",");

      // Vars.
      const name = parts[0] + "_" + delimiter;
      const snippet = delimiterFn(parts[1]);
      const keyword = delimiterFn(parts[0] + "_" + delimiter);
      const uid = uuidv4();

      // Create the snippet.
      const entry = {
        alfredsnippet: {
          uid: uid,
          keyword: keyword,
          snippet: snippet,
          name: name
        }
      };

      // Add a (uniquely named) file to the zip.
      zip.file(uid + ".json", JSON.stringify(entry));
    });
  });

console.log("before zip");

// Generate.
zip.generateAsync({ type: "nodebuffer" }).then(
  function(buffer) {
    try {
      fs.writeFileSync("corrections.alfredsnippets", buffer);
      // FileSaver.saveAs(content, 'corrections.alfredsnippets');
      console.log("DONE");
    } catch (e) {
      console.log(e);
    }
  },
  function(err) {
    console.log("error with zip", err);
  }
);
