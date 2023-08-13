const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

const turndownService = new TurndownService();

const HOMEPAGE_URL = 'https://adaa.it';

const outputDir = path.join(__dirname, '../content/fromAdaaWP');

let i = 0;

async function getPageContent(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error getting page content: ', error);
    return null;
  }
}

function convertHTMLToMarkdown(htmlContent) {
  const $ = cheerio.load(htmlContent);

  $('script').remove();
  $('style').remove();
  $('footer').remove();
  $('#content #secondary').remove();
  try {
    const markdownContent = turndownService.turndown($('#content').html());
    return markdownContent;
  } catch (e) {
    console.error('Impossible to convert to Markdown: ', e)
  }

}

function saveMarkdownToFile(fileName, markdownContent) {
  let filePath = path.join(outputDir, `${fileName}.md`);
  if (fs.existsSync(filePath)) {
    filePath = path.join(outputDir, `${fileName}${i++}.md`);
  }
  try {
    fs.writeFileSync(filePath, markdownContent);
    console.log(`Markdown file saved: ${filePath}`);
  } catch (e) {
    console.error('Impossible to save file: ', e);
  }
}

async function getInternalLinksFromWebpage(pageUrl) {
  try {
    const response = await axios.get(pageUrl);
    const htmlData = response.data;
    const $ = cheerio.load(htmlData);

    const internalLinks = [];
    $("a[href^='https://www.adaa']").each((index, element) => {
      const link = $(element).attr('href');
      internalLinks.push(link);
    });

    return internalLinks;
  } catch (error) {
    console.error('Error getting links from page: ', error);
    return [];
  }
}

async function main() {
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true });
  }

  fs.mkdirSync(outputDir);

  const internalLinks = await getInternalLinksFromWebpage(HOMEPAGE_URL);

  for (const link of internalLinks) {
    const pageUrl = new URL(link, HOMEPAGE_URL);
    const pageContent = await getPageContent(pageUrl.href);

    if (pageContent) {
      const markdownContent = convertHTMLToMarkdown(pageContent);
      const fileName = pageUrl.pathname.slice(1, -1).replace(/\//g, '-') + pageUrl.hash.substring(1);

      saveMarkdownToFile(fileName, markdownContent);
    }
  }
}

main();
