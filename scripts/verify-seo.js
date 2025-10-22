/**
 * SEO验证脚本
 * 用于检查所有页面的SEO设置是否正确
 * 
 * 使用方法：
 * 1. 启动开发服务器：npm run dev
 * 2. 在浏览器控制台运行此脚本
 */

// 页面配置
const pages = [
  // 首页
  { url: '/', expectedTitlePattern: /Steal a Brainrot Unblocked.*Play Free Online Games.*2025/ },
  
  // 分类页
  { url: '/all', expectedTitlePattern: /New Games.*2025.*Steal a Brainrot/ },
  { url: '/hot', expectedTitlePattern: /Hot Games.*Popular.*Steal a Brainrot/ },
  { url: '/puzzle', expectedTitlePattern: /Puzzle Games.*Steal a Brainrot/ },
  { url: '/3d', expectedTitlePattern: /3D Games.*Steal a Brainrot/ },
  { url: '/action', expectedTitlePattern: /Action Games.*Steal a Brainrot/ },
  
  // 标签页
  { url: '/tag/brainrot', expectedTitlePattern: /Brainrot Games.*Play Free.*Steal a Brainrot/ },
  { url: '/tag/clicker', expectedTitlePattern: /Clicker Games.*Steal a Brainrot/ },
  { url: '/tag/casual', expectedTitlePattern: /Casual Games.*Steal a Brainrot/ },
  { url: '/tag/meme', expectedTitlePattern: /Meme Games.*Steal a Brainrot/ },
  
  // 游戏详情页
  { url: '/brainrot-clicker', expectedTitlePattern: /Brainrot Clicker.*Play Free Online Unblocked.*Steal a Brainrot/ },
  { url: '/perfect-orbit', expectedTitlePattern: /Perfect Orbit.*Play Free Online Unblocked.*Steal a Brainrot/ },
  { url: '/plants-vs-brainrots', expectedTitlePattern: /Plants vs Brainrots.*Play Free Online Unblocked.*Steal a Brainrot/ },
];

// 验证函数
async function verifySEO() {
  console.log('🔍 开始验证SEO设置...\n');
  
  const results = {
    passed: [],
    failed: [],
    total: pages.length
  };
  
  for (const page of pages) {
    try {
      // 获取页面
      const response = await fetch(page.url);
      const html = await response.text();
      
      // 提取title
      const titleMatch = html.match(/<title>(.*?)<\/title>/);
      const title = titleMatch ? titleMatch[1] : '';
      
      // 验证title
      const isValid = page.expectedTitlePattern.test(title);
      
      if (isValid) {
        results.passed.push({
          url: page.url,
          title: title,
          status: '✅ PASS'
        });
        console.log(`✅ ${page.url}`);
        console.log(`   Title: ${title}\n`);
      } else {
        results.failed.push({
          url: page.url,
          title: title,
          expected: page.expectedTitlePattern.toString(),
          status: '❌ FAIL'
        });
        console.log(`❌ ${page.url}`);
        console.log(`   Title: ${title}`);
        console.log(`   Expected: ${page.expectedTitlePattern}\n`);
      }
    } catch (error) {
      results.failed.push({
        url: page.url,
        error: error.message,
        status: '❌ ERROR'
      });
      console.log(`❌ ${page.url}`);
      console.log(`   Error: ${error.message}\n`);
    }
  }
  
  // 打印总结
  console.log('\n' + '='.repeat(60));
  console.log('📊 验证结果总结');
  console.log('='.repeat(60));
  console.log(`总页面数: ${results.total}`);
  console.log(`✅ 通过: ${results.passed.length}`);
  console.log(`❌ 失败: ${results.failed.length}`);
  console.log(`成功率: ${((results.passed.length / results.total) * 100).toFixed(2)}%`);
  
  if (results.failed.length > 0) {
    console.log('\n❌ 失败的页面：');
    results.failed.forEach(item => {
      console.log(`  - ${item.url}`);
      if (item.title) {
        console.log(`    实际: ${item.title}`);
        console.log(`    期望: ${item.expected}`);
      }
      if (item.error) {
        console.log(`    错误: ${item.error}`);
      }
    });
  }
  
  return results;
}

// 验证meta标签
function verifyMetaTags() {
  console.log('\n🔍 验证当前页面的Meta标签...\n');
  
  const checks = [
    { name: 'Title', selector: 'title', attribute: 'textContent' },
    { name: 'Description', selector: 'meta[name="description"]', attribute: 'content' },
    { name: 'Keywords', selector: 'meta[name="keywords"]', attribute: 'content' },
    { name: 'Canonical', selector: 'link[rel="canonical"]', attribute: 'href' },
    { name: 'OG:Title', selector: 'meta[property="og:title"]', attribute: 'content' },
    { name: 'OG:Description', selector: 'meta[property="og:description"]', attribute: 'content' },
    { name: 'OG:Image', selector: 'meta[property="og:image"]', attribute: 'content' },
    { name: 'Twitter:Card', selector: 'meta[name="twitter:card"]', attribute: 'content' },
  ];
  
  checks.forEach(check => {
    const element = document.querySelector(check.selector);
    if (element) {
      const value = element[check.attribute];
      console.log(`✅ ${check.name}:`);
      console.log(`   ${value}\n`);
    } else {
      console.log(`❌ ${check.name}: 未找到\n`);
    }
  });
}

// 验证H标签结构
function verifyHeadingStructure() {
  console.log('\n🔍 验证H标签结构...\n');
  
  const h1s = document.querySelectorAll('h1');
  const h2s = document.querySelectorAll('h2');
  const h3s = document.querySelectorAll('h3');
  const h4s = document.querySelectorAll('h4');
  
  console.log(`H1标签数量: ${h1s.length} ${h1s.length === 1 ? '✅' : '❌ (应该只有1个)'}`);
  h1s.forEach((h1, index) => {
    console.log(`  ${index + 1}. ${h1.textContent.trim()}`);
  });
  
  console.log(`\nH2标签数量: ${h2s.length}`);
  h2s.forEach((h2, index) => {
    console.log(`  ${index + 1}. ${h2.textContent.trim()}`);
  });
  
  console.log(`\nH3标签数量: ${h3s.length}`);
  if (h3s.length > 0 && h3s.length <= 5) {
    h3s.forEach((h3, index) => {
      console.log(`  ${index + 1}. ${h3.textContent.trim()}`);
    });
  } else if (h3s.length > 5) {
    console.log(`  (共${h3s.length}个，仅显示前5个)`);
    for (let i = 0; i < 5; i++) {
      console.log(`  ${i + 1}. ${h3s[i].textContent.trim()}`);
    }
  }
  
  console.log(`\nH4标签数量: ${h4s.length}`);
}

// 验证图片alt属性
function verifyImageAlt() {
  console.log('\n🔍 验证图片Alt属性...\n');
  
  const images = document.querySelectorAll('img');
  let withAlt = 0;
  let withoutAlt = 0;
  const missingAlt = [];
  
  images.forEach((img, index) => {
    if (img.alt && img.alt.trim() !== '') {
      withAlt++;
    } else {
      withoutAlt++;
      missingAlt.push({
        index: index + 1,
        src: img.src,
      });
    }
  });
  
  console.log(`总图片数: ${images.length}`);
  console.log(`✅ 有Alt属性: ${withAlt}`);
  console.log(`❌ 无Alt属性: ${withoutAlt}`);
  console.log(`完成率: ${((withAlt / images.length) * 100).toFixed(2)}%`);
  
  if (missingAlt.length > 0) {
    console.log('\n❌ 缺少Alt属性的图片：');
    missingAlt.forEach(item => {
      console.log(`  ${item.index}. ${item.src}`);
    });
  }
}

// 导出函数供浏览器控制台使用
if (typeof window !== 'undefined') {
  window.verifySEO = verifySEO;
  window.verifyMetaTags = verifyMetaTags;
  window.verifyHeadingStructure = verifyHeadingStructure;
  window.verifyImageAlt = verifyImageAlt;
  
  console.log('✅ SEO验证工具已加载！');
  console.log('\n可用命令：');
  console.log('  verifySEO()              - 验证所有页面的SEO');
  console.log('  verifyMetaTags()         - 验证当前页面的Meta标签');
  console.log('  verifyHeadingStructure() - 验证当前页面的H标签结构');
  console.log('  verifyImageAlt()         - 验证当前页面的图片Alt属性');
}

// Node.js环境下导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    verifySEO,
    verifyMetaTags,
    verifyHeadingStructure,
    verifyImageAlt,
  };
}

