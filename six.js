const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

let url = 'https://www.linkedin.com/in/nabin-garai/'

function isValid(url) {
    return linkedinRegex.test(url);
}

if (isValid(url)) {
    console.log(`"${url}" is a valid LinkedIn profile URL.`);
} else {
    console.log(`"${url}" is not a valid LinkedIn profile URL.`);
}