import { expect, test, describe } from 'bun:test';
import { composeStateStoreName } from '@kotkoroid/platform-sdk/src';

describe('composeStateStoreName', () => {
  describe('should return state store name in lowercase when', () => {
    test('it is called with project name in lowercase', () => {
      const result = composeStateStoreName({
        projectName: 'ixtal',
      });

      expect(result).toBe('ixtal-state-store');
    });

    test('it is called with project name in uppercase', () => {
      const result = composeStateStoreName({
        projectName: 'IXTAL',
      });

      expect(result).toBe('ixtal-state-store');
    });

    test('it is called with a multi word project name in uppercase', () => {
      const result = composeStateStoreName({
        projectName: 'SHADOW ISLES',
      });

      expect(result).toBe('shadow-isles-state-store');
    });

    test('it is called with project name in kebab case', () => {
      const result = composeStateStoreName({
        projectName: 'shadow-isles',
      });

      expect(result).toBe('shadow-isles-state-store');
    });

    test('it is called with project name in snake case', () => {
      const result = composeStateStoreName({
        projectName: 'shadow_isles',
      });

      expect(result).toBe('shadow-isles-state-store');
    });

    test('it is called with project name in pascal case', () => {
      const result = composeStateStoreName({
        projectName: 'ShadowIsles',
      });

      expect(result).toBe('shadow-isles-state-store');
    });

    test('it is called with project name in camel case', () => {
      const result = composeStateStoreName({
        projectName: 'shadowIsles',
      });

      expect(result).toBe('shadow-isles-state-store');
    });
  });
});
