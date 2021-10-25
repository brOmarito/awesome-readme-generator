const licenses = require("./licenseInfo");

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let unformatArr = license.badge.split("(");
  unformatArr = unformatArr[unformatArr.length - 1].split(")");
  return unformatArr[0];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseName, readmeStr) {
  if (licenseName && licenseName !== "None") {
    licenses.forEach(license => {
      if (license.name === licenseName) {
        readmeStr += `
## Licenses
This application and repo are protected under [${license.name}](${renderLicenseLink(license)})`
        readmeStr = readmeStr.replace("{{LICENSE_BADGE}}", license.badge);
        return readmeStr;
      };
    });
    return readmeStr;
  }
}

function renderSection(data, sectTitle, readmeStr) {
  if (sectTitle && data && data.length > 0) {
    readmeStr += ("\n## " + formatTitle(sectTitle));
    readmeStr += ("\n" + data);
  }
  return readmeStr;
}

function formatTitle(titleStr) {
  let formatted = ""
  for (let word in titleStr.split(" ")) {
    formatted += word[0].toUpperCase() + word.slice(1);
  }
  return formatted;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let readmeStr = "# {{TITLE}} {{LICENSE_BADGE}}";
  for (const sectTitle in answers) {
    if (sectTitle === "title") readmeStr = readmeStr.replace("{{TITLE}}", sectTitle);
    else if (sectTitle === "license") readmeStr = renderLicenseSection(answers[sectTitle], readmeStr);
    else readmeStr = renderSection(answers[sectTitle], sectTitle, readmeStr);
  }
  return readmeStr;
}

module.exports = generateMarkdown;
