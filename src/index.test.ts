import { describe, it, expect } from 'vitest';
import { ambiguousSearch } from './index';

describe('ambiguousSearch', () => {
  // 基本検索のテスト
  it('should find matches with basic search', () => {
    const result = ambiguousSearch('寛永');
    expect(result).toHaveLength(21);
    expect(result[0]).toMatchObject({
      year: 1624,
      nengo: '寛永1'
    });
  });

  // 年号の範囲指定テスト
  it('should respect year range', () => {
    const result = ambiguousSearch('寛永', { range: '1624-1630' });
    expect(result).toHaveLength(7);
    expect(result.every(r => r.year >= 1624 && r.year <= 1630)).toBe(true);
  });

  // 戊と戌の同一視テスト
  it('should handle tsuchinoe_inu flag', () => {
    const normalResult = ambiguousSearch('戊');
    const flagResult = ambiguousSearch('戊', { tsuchinoe_inu_flag: true });
    expect(flagResult.length).toBeGreaterThan(normalResult.length);
  });

  // 己と巳の同一視テスト
  it('should handle tsuchinoto_mi flag', () => {
    const normalResult = ambiguousSearch('己');
    const flagResult = ambiguousSearch('己', { tsuchinoto_mi_flag: true });
    expect(flagResult.length).toBeGreaterThan(normalResult.length);
  });

  // オーバーマッチのテスト
  it('should handle over_match flag', () => {
    const normalResult = ambiguousSearch('寛永');
    const overMatchResult = ambiguousSearch('寛永', { enable_over_match: true });
    expect(overMatchResult.length).toBeGreaterThan(normalResult.length);
  });

  // エッジケースのテスト
  it('should handle empty input', () => {
    const result = ambiguousSearch('');
    expect(result).toHaveLength(0);
  });

  it('should handle non-matching input', () => {
    const result = ambiguousSearch('XXXXX');
    expect(result).toHaveLength(0);
  });

  // 結果オブジェクトの構造テスト
  it('should return correctly structured results', () => {
    const result = ambiguousSearch('寛永一');
    expect(result[0]).toHaveProperty('year');
    expect(result[0]).toHaveProperty('nengo');
    expect(result[0]).toHaveProperty('eto');
    expect(typeof result[0].year).toBe('number');
    expect(typeof result[0].nengo).toBe('string');
  });

  // 複雑な検索条件の組み合わせテスト
  it('should handle combined search options', () => {
    const result = ambiguousSearch('戊', {
      tsuchinoe_inu_flag: true,
      range: '1600-1700',
      enable_over_match: true
    });
    expect(result.length).toBeGreaterThan(0);
    expect(result.every(r => r.year >= 1600 && r.year <= 1700)).toBe(true);
  });
});