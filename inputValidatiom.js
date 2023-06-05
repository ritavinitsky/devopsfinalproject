function validName(fullName) {
    // Check if the full name is not empty
    if (fullName.trim() === "") {
      return false;
    }
    
    // Check if the full name contains only letters, spaces, and hyphens
    if (!/^[A-Za-z\s-]+$/.test(fullName)) {
      return false;
    }
    
    // Check if the full name has at least two parts separated by a space
    var nameParts = fullName.split(" ");
    if (nameParts.length < 2) {
      return false;
    }
    
    // Check if each part of the name starts with an uppercase letter
    for (var i = 0; i < nameParts.length; i++) {
      var namePart = nameParts[i];
      if (!/^[A-Z]/.test(namePart)) {
        return false;
      }
    }
    
    // All validation checks passed
    return true;
  }

function validGrade(grade1,grade2,grade3) {
    if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100)
    {return false;}
    return true;
}

module.exports = { validName, validGrade};