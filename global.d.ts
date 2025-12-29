/// <reference types="react" />
/// <reference types="@react-three/fiber" />

import { ThreeElements } from '@react-three/fiber';

// Extend JSX namespace globally to support Three.js elements in React components.
// This allows using Three.js primitives like <mesh>, <sphereGeometry>, etc.
// in JSX without TypeScript errors.
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

export {};
