import MDXComponents from '@theme-original/MDXComponents';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default {
  // 元々あるMDXコンポーネント（h1, a, imgなど）を継承
  ...MDXComponents,
  
  // ここに登録した名前が、全MDXで import なしに使えるようになる
  Twitter: TwitterTweetEmbed,
};