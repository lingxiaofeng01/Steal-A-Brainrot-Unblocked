export interface Database {
  public: {
    Tables: {
      games: {
        Row: {
          id: string;
          slug: string;
          title: string;
          subtitle: string | null;
          cover: string;
          play_url: string | null;
          description: string;
          rating: number;
          play_count: number;
          duration: string | null;
          released_at: string | null;
          is_featured: boolean;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['games']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['games']['Insert']>;
      };
      game_ratings: {
        Row: {
          id: string;
          game_slug: string;
          user_fingerprint: string;
          rating: number;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['game_ratings']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['game_ratings']['Insert']>;
      };
      game_comments: {
        Row: {
          id: string;
          game_slug: string;
          user_name: string;
          user_email: string;
          comment_text: string;
          rating?: number;
          status: string;
          agreed_terms: boolean;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['game_comments']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['game_comments']['Insert']>;
      };
      categories: {
        Row: {
          id: string;
          slug: string;
          name: string;
          description: string | null;
          icon: string | null;
          created_at: string;
        };
      };
      tags: {
        Row: {
          id: string;
          slug: string;
          name: string;
          created_at: string;
        };
      };
      platforms: {
        Row: {
          id: string;
          slug: string;
          name: string;
          created_at: string;
        };
      };
      game_seo: {
        Row: {
          game_id: string;
          meta_title: string | null;
          meta_description: string | null;
          keywords: string[] | null;
          og_image: string | null;
        };
      };
    };
  };
}

export interface Game {
  id: string;
  slug: string;
  title: string;
  subtitle?: string | null;
  cover: string;
  playUrl?: string | null;
  description: string;
  rating: number;
  playCount: number;
  duration?: string | null;
  releasedAt?: string | null;
  isFeatured: boolean;
  isActive: boolean;
  categories?: Array<{ slug: string; name: string; icon?: string | null }>;
  tags?: Array<{ slug: string; name: string }>;
  platforms?: Array<{ slug: string; name: string }>;
  seo?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
    keywords?: string[] | null;
    ogImage?: string | null;
  };
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  icon?: string | null;
}

export interface Tag {
  id: string;
  slug: string;
  name: string;
}

export interface Platform {
  id: string;
  slug: string;
  name: string;
}
