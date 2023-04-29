import axios from 'axios';
import { stopwords } from '../utils/stopwords.tsx';
const scrapeResponse = async (url: any) => {
  try {
    const response = await axios.get(url);

    const postData = response.data.data.children.map((post: any) => {
      return post.data.title;
    });
    return { success: true, postData: postData };
  } catch (err) {
    console.log(err);
    return { success: false, postData: [] };
  }
};

const getTopWords = async (key: any) => {
  let url;
  if (key === 'pop') {
    url = 'https://www.reddit.com/r/popular/top.json';
  }
  if (key === 'news') {
    url = 'https://www.reddit.com/r/news/top.json';
  }
  const response = await scrapeResponse(url);
  const pageTitles = response.postData;
  const combinedTitles: string = pageTitles.join(' ');
  combinedTitles.replace(/[^\p{L}\s]/gu, ''); ///removes non letter characters

  const words: string[] = combinedTitles.split(' ');
  let filteredWords = words.filter((str) => parseInt(str) !== Number(str));

  filteredWords = filteredWords.filter(
    (word) => !stopwords.includes(word.toLocaleLowerCase())
  );

  const wordCounts: { [word: string]: number } = {};
  for (let i = 0; i < filteredWords.length; i++) {
    const word = filteredWords[i];
    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }
  const wordCountArray: { word: string; count: number }[] = [];
  for (const word in wordCounts) {
    wordCountArray.push({ word, count: wordCounts[word] });
  }
  wordCountArray.sort((a, b) => b.count - a.count);
  const top20Words: { word: string; count: number }[] = wordCountArray.slice(
    0,
    10
  );
  console.log({ top20Words });
  return top20Words;
};

export { getTopWords };
