const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year

// alert (document.lastModified)
let lastModified = new Date(document.lastModified)
document.getElementById("lastModified").textContent = ` Last Modified: ${lastModified.toLocaleDateString()} `
