import fs from 'fs';
import path from 'path';
const outpu_dir = path.resolve('./src/pages/posts');

// ランダムなタグを生成する関数
function generateRandomTags() {
	const allTags = ['astro', 'ブログ', '公開学習', 'webdev', 'チュートリアル', 'フロントエンド', 'デザイン', 'プログラミング', 'テクノロジー'
		, 'JavaScript', 'React', 'Vue', 'Svelte', 'TypeScript', 'CSS', 'HTML', 'Node.js', 'Python', 'Ruby', 'Go', 'Docker', 'AWS', 'Firebase', 'Netlify', 'Vercel',
		"Next.js", "Gatsby", "Nuxt.js"
		,
		"GraphQL", "REST API", "テスト", "データベース", "SQL", "NoSQL", "MongoDB", "PostgreSQL", "MySQL", "Firebase", "DynamoDB", "AWS RDS", "AWS DynamoDB",


	];
	const numTags = Math.floor(Math.random() * 3) + 1; // 1から3個のタグをランダムに選択
	return allTags.sort(() => 0.5 - Math.random()).slice(0, numTags);
}

// ランダムな日付を生成する関数
function generateRandomDate() {
	const start = new Date(2020, 0, 1);
	const end = new Date();
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// ファイル名を生成する関数
function generateFileName(index) {
	return `post-${index + 1}.md`;
}

// Markdownファイルを生成する関数
function generateMarkdownFile(index) {
	const fileName = generateFileName(index);
	const date = generateRandomDate();
	const tags = generateRandomTags();

	const content = `---
title: "ブログ記事 ${index + 1}"
pubDate: ${date.toISOString().split('T')[0]}
description: "これは自動生成されたブログ記事です。"
author: "テスト用ユーザー"
image:
  url: "https://docs.astro.build/assets/full-logo-light.png"
  alt: "Astroのロゴ。"
tags: ${JSON.stringify(tags)}
---

# ブログ記事 ${index + 1}

これは自動生成されたブログ記事の本文です。ここに実際の記事内容が入ります。
`;

	fs.writeFileSync(path.join(outpu_dir, fileName), content);
	console.log(`Generated: ${fileName}`);
}

// メイン処理
function main() {
	const numFiles = 100; // 生成するファイル数

	// content ディレクトリがなければ作成


	for (let i = 0; i < numFiles; i++) {
		generateMarkdownFile(i);
	}
}

main();