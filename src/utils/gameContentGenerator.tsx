import React from 'react';
import { GameContentConfig } from '../config/gameContentConfig';

// 颜色配置 - 为每个段落分配不同的渐变色
const sectionColors = [
  { from: 'from-amber-50', to: 'to-orange-50', border: 'border-amber-600' },
  { from: 'from-blue-50', to: 'to-cyan-50', border: 'border-blue-500' },
  { from: 'from-green-50', to: 'to-emerald-50', border: 'border-green-500' },
  { from: 'from-orange-50', to: 'to-amber-50', border: 'border-orange-500' },
  { from: 'from-red-50', to: 'to-rose-50', border: 'border-red-500' },
  { from: 'from-indigo-50', to: 'to-purple-50', border: 'border-indigo-500' },
  { from: 'from-pink-50', to: 'to-rose-50', border: 'border-pink-500' },
];

interface GenerateContentProps {
  config: GameContentConfig;
}

export function generateGameAboutContent({ config }: GenerateContentProps) {
  const sections = [
    config.sections.overview,
    config.sections.features,
    config.sections.gameplay,
    config.sections.modes,
    config.sections.progression,
    config.sections.community,
    config.sections.whyPlay,
  ];

  return (
    <div className="space-y-6">
      {sections.map((section, index) => {
        const colors = sectionColors[index % sectionColors.length];
        const content = section.content.split(config.title).join(
          `<strong>${config.title}</strong>`
        );

        return (
          <div
            key={index}
            className={`bg-gradient-to-r ${colors.from} ${colors.to} rounded-lg p-6 border-l-4 ${colors.border}`}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {section.emoji} {section.heading}
            </h3>
            <p
              className="text-lg leading-relaxed text-gray-700"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        );
      })}
    </div>
  );
}

// 生成关键词密度优化的内容
export function optimizeContentWithKeywords(
  content: string,
  title: string,
  keywords: string[]
): string {
  let optimized = content;

  // 确保游戏名称被加粗
  optimized = optimized.replace(
    new RegExp(title, 'g'),
    `<strong>${title}</strong>`
  );

  // 为关键词添加加粗
  keywords.forEach((keyword) => {
    if (keyword !== title) {
      optimized = optimized.replace(
        new RegExp(`\\b${keyword}\\b`, 'gi'),
        `<strong>${keyword}</strong>`
      );
    }
  });

  return optimized;
}

// 计算内容字数
export function countWords(text: string): number {
  return text.split(/\s+/).filter((word) => word.length > 0).length;
}

// 验证内容是否满足SEO要求
export function validateSEOContent(
  config: GameContentConfig,
  minWords: number = 1500
): { valid: boolean; wordCount: number; issues: string[] } {
  const sections = [
    config.sections.overview,
    config.sections.features,
    config.sections.gameplay,
    config.sections.modes,
    config.sections.progression,
    config.sections.community,
    config.sections.whyPlay,
  ];

  const fullContent = sections.map((s) => s.content).join(' ');
  const wordCount = countWords(fullContent);
  const issues: string[] = [];

  if (wordCount < minWords) {
    issues.push(`内容字数不足: ${wordCount}/${minWords}`);
  }

  // 检查游戏名称出现次数
  const titleCount = (fullContent.match(new RegExp(config.title, 'g')) || [])
    .length;
  if (titleCount < 30) {
    issues.push(`游戏名称出现次数不足: ${titleCount}/30`);
  }

  return {
    valid: issues.length === 0,
    wordCount,
    issues,
  };
}

