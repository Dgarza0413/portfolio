var mongoose = require("mongoose");

// **Schema**
//==========

// Notes:
// Define basic data structure
var skillsSchema = new mongoose.Schema({
    skillName: String,
    skillNotes: String,
    skillIcon:{ type: String,
    get: v => `${root}${v}`
  }
    
});

module.exports = mongoose.model("Skills", skillsSchema);