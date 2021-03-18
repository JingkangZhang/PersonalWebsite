const { Remarkable } = require('./remarkable.js');
const DIR_TO_CONVERT = ".";
const fs = require('fs');

const baseHtml1 = `
<!DOCTYPE html>

<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <title>Jingkang Zhang Writing</title>
  <LINK href="mdstyles.css" rel="stylesheet" type="text/css">
</head>

<body>
`;

const baseHtml2 = `
</body>
</html>
`;

const md = new Remarkable({
    breaks: true,
});
const fileNames = fs.readdirSync(DIR_TO_CONVERT);
fileNames.forEach((v) => {
    const [fileName, extension] = v.split(".");
    if (extension !== "md") {
        return;
    }
    const mdText = fs.readFileSync(v).toString();
    let html = md.render(mdText);
    html = baseHtml1 + html + baseHtml2;
    fs.writeFileSync(fileName + ".html", html);

})