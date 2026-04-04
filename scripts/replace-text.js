// scripts/replace-text.js
const fs = require('fs');
const path = require('path');

// 置換したい文字
const replacements = {
  '<br>': '<br />'
};

// 置換を実行する対象フォルダ（docsなど）
const targetDir = path.join(__dirname, '../docs');

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.md') || filePath.endsWith('.mdx')) {
      // ファイルを読み込んで置換
      let content = fs.readFileSync(filePath, 'utf8');
      let changed = false;

      Object.keys(replacements).forEach(key => {
        if (content.includes(key)) {
          const regex = new RegExp(key, 'g');
          content = content.replace(regex, replacements[key]);
          changed = true;
        }
      });

      // 変更があった場合のみ上書き保存
      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${file}`);
      }
    }
  });
}

console.log('Starting text replacement...');
walkDir(targetDir);
console.log('Replacement finished!');