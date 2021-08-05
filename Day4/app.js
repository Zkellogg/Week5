const storyDiv = document.getElementById("storyDiv");
const storyUL = document.getElementById("storyUL");

const articleArray = []


async function getArticlesID(articleIdDownload) {
  const article_ID_URL = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;

  let response = await fetch(article_ID_URL);
  let result = await response.json();
  articleIdDownload(result);
}

async function getArticleObject(result) {
  const article_URL = `https://hacker-news.firebaseio.com/v0/item/${result}.json?print=pretty`;

  let response = await fetch(article_URL);
  let articleResult = await response.json();
    articleArray.push(articleResult)
    displayArticles(articleResult)
  //console.log(articleResult.title);
}

getArticlesID(function (result) {
 

  for (let i = 0; i < result.length; i++) {
    getArticleObject(result[i]);
    
  }
  
});

function displayArticles(result) {

        const articleFormat = `
        <ul>
        <li>${result.title}</li>
        <li><a href="${result.url}">${result.url}</a></li>
        
        <li>${result.by}</li>
        <li>${result.time}</li>
        </ul>
        `
    storyDiv.insertAdjacentHTML("beforeend",articleFormat) 
    console.log(result.title);
    
}



