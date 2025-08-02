import type { CSSProperties } from 'react';

// ==================== 기본 유틸리티 타입 ====================
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface BreakpointConfig {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

// ==================== 이미지 관련 타입 ====================
export interface ImageProps {
  src: string;
  alt: string;
  lazy?: boolean;
  webp?: boolean;
  responsive?: boolean;
  placeholder?: 'blur' | 'skeleton' | 'none';
  quality?: number;
  priority?: boolean;
  breakpoints?: BreakpointConfig;
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
  className?: string;
  style?: CSSProperties;
}

export interface SrcSetItem {
  src: string;
  width: number;
  density?: number;
}

export interface ImageLoadResult {
  success: boolean;
  loadTime: number;
  originalSize?: number;
  optimizedSize?: number;
  error?: string;
}
