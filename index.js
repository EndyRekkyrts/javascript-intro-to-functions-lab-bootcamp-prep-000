function shout(string) {
  return string.toUpperCase();
  }
  
function whisper(string) {
  return string.toLowerCase();
  }
  
function logShout(string) {
  console.log(string.toUpperCase());
  }
  
function logWhisper(string) {
  console.log(string.toLowerCase());
  }

function sayHiToGrandma(string) {
  var lowerCase = "hello";
  var upperCase = "HELLO";
  
  if (string === lowerCase) {
  return "I can\'t hear you!";
  }
  elseif (string === upperCase) {
  return "YES INDEED!";
  }
  elseif (string === "I love you, Grandma.") {
  return "I love you, too.";
  }
  }
