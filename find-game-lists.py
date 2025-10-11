#!/usr/bin/env python3
"""
查找所有游戏页面中的游戏列表位置
"""

import os
import re

pages_dir = "src/pages"
pages_to_check = [
    "ItalianBrainrotBabyClickerPage.tsx",
    "ItalianBrainrotClicker2Page.tsx",
    "MemoryBrainrotPage.tsx",
    "ObbyMySingingBrainrotPage.tsx",
    "PlantsVsBrainrotsPage.tsx",
    "StealBrainrotNewAnimalsPage.tsx",
    "StealBrainrotOnlinePage.tsx",
    "StealTheItalianBrainrotPage.tsx",
]

print("=" * 80)
print("查找游戏列表位置")
print("=" * 80)
print()

for page_name in pages_to_check:
    page_path = os.path.join(pages_dir, page_name)
    
    if not os.path.exists(page_path):
        print(f"❌ {page_name} - 文件不存在")
        continue
    
    with open(page_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # 查找游戏列表开始位置
    start_line = None
    end_line = None
    
    for i, line in enumerate(lines, 1):
        # 查找 grid 开始
        if 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3' in line:
            start_line = i
        
        # 查找 ].map((game, i) =>
        if start_line and '].map((game, i) =>' in line:
            # 继续查找结束的 </div>
            for j in range(i, min(i + 30, len(lines) + 1)):
                if '</div>' in lines[j-1] and 'grid' not in lines[j-1]:
                    end_line = j
                    break
            break
    
    if start_line and end_line:
        print(f"✅ {page_name}")
        print(f"   游戏列表: 第 {start_line} 行 - 第 {end_line} 行")
        print(f"   共 {end_line - start_line + 1} 行")
    else:
        print(f"⚠️  {page_name} - 未找到游戏列表模式")
    
    print()

print("=" * 80)
print("完成！")
print("=" * 80)

