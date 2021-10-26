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
function renderLicenseSection(licenseName, readmeObj) {
  if (licenseName && licenseName !== "None") {
    licenses.forEach(license => {
      if (license.name === licenseName) {
        readmeObj.mainSection += `
## <a href="license">Licenses</a>
This application and repo are protected under [${license.name}](${renderLicenseLink(license)})`
        readmeObj.title = readmeObj.title.replace("{{LICENSE_BADGE}}", license.badge);
        readmeObj.tableOfContents.push(readmeObj.currSection.toString() + `. [License Information](#license)`);
        readmeObj.currSection += 1;
        return readmeObj;
      };
    });
    return readmeObj;
  }
}

function renderSection(data, sectTitle, readMeObj) {
  if (sectTitle && data && data.length > 0) {
    readMeObj.mainSection += (`\n## <a href="${sectTitle}">` + formatTitle(sectTitle) + "</a>");
    readMeObj.mainSection += ("\n" + data);
    readMeObj.tableOfContents.push(readMeObj.currSection.toString() + ". [" + formatTitle(sectTitle) + `](#${sectTitle})`);
    readMeObj.currSection += 1;
  }
  return readMeObj;
}

function formatTitle(titleStr) {
  let formatted = []
  titleStr.split("-").forEach((word) => {
    formatted.push(word[0].toUpperCase() + word.slice(1));
  });
  return formatted.join(" ");
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let readmeTitle = "# {{TITLE}} {{LICENSE_BADGE}}";
  let readMeObj = {
    title: "",
    tableOfContents: [],
    mainSection: "",
    currSection: 1,
  };
  for (const sectTitle in answers) {
    if (sectTitle === "title") readMeObj.title = readmeTitle.replace("{{TITLE}}", answers[sectTitle]);
    else if (sectTitle === "license") readMeObj = renderLicenseSection(answers[sectTitle], readMeObj);
    else readMeObj = renderSection(answers[sectTitle], sectTitle, readMeObj);
  }
  const readmeStr = readMeObj.title + "\n" + readMeObj.tableOfContents.join("\n") + "\n" + readMeObj.mainSection
  return readmeStr;
}

module.exports = generateMarkdown;
