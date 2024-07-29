function shortcut(str1, str2) {
  // Check if either of the strings is empty
  if (str1 === "" || str2 === "") {
    return ""; // Return an empty string if any input string is empty
  }

  // Return the first letter of each string concatenated
  return str1[0] + str2[0];
}

// Test cases
console.log(shortcut("Amnesty", "International")); // 'AI'
console.log(shortcut("Hello", "world"));           // 'Hw'
console.log(shortcut("", "International"));        // ''
console.log(shortcut("Amnesty", ""));