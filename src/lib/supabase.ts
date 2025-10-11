import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tgoyqxcqpwevgztprqgk.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnb3lxeGNxcHdldmd6dHBycWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMjgzMTEsImV4cCI6MjA3NTcwNDMxMX0.k8EYFMzaNGDytf8ZAYRkQlBhkTD1w6UBWSg0pwLW-mc';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
