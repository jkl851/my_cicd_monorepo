/// <reference types="vitest"/>
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Vitest에서 제공하는 전역 API 사용
    setupFiles: ['./src/tests/setup.ts'], // setup 파일 추가
    environment: 'jsdom', // 테스트 환경을 jsdom으로 설정
  },
});
