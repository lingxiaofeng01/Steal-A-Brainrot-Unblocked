import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.'
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// 游戏统计数据类型
export interface GameStats {
  slug: string;
  play_count: number;
  view_count: number;
  last_played_at: string | null;
  created_at?: string;
  updated_at?: string;
}

// 检查 Supabase 是否可用
export function isSupabaseAvailable(): boolean {
  return !!supabaseUrl && !!supabaseAnonKey;
}
