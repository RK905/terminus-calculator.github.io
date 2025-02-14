// lib/posts.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      id: fileName.replace(/\.md$/, ''),
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // 使用 gray-matter 解析 markdown 文件的元数据
  const matterResult = matter(fileContents);

  // 使用 remark 将 markdown 转换为 HTML 字符串
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // 返回结合了 frontmatter 数据和处理后的内容
  return {
    id,
    title: matterResult.data.title,
    image: matterResult.data.image,
    readTime: matterResult.data.readTime,
    date: matterResult.data.date,
    description: matterResult.data.description || '',  // 添加可选的描述
    contentHtml,  // 处理后的 HTML 内容
  };
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // 返回包含 frontmatter 数据的对象
    return {
      id,
      title: matterResult.data.title,
      image: matterResult.data.image,
      readTime: matterResult.data.readTime,
      date: matterResult.data.date,
      description: matterResult.data.description || '',
    };
  });

  // 按日期排序
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}