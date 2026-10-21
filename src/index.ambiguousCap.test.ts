import { describe, it, expect, vi } from 'vitest';

// =============================================================
// SR-NOV26-A1-1（Low）: ambiguousSearch の入力長の上限と重複除去
//
// 照合は candidate.ambiguos.includes(char) の全文字 AND（index.ts の chars.every）であり、
// 結果は入力の「字の集合」だけに依存する。したがって照合前の重複除去は挙動を変えない。
// ただし「候補列挙を行ったか」は観測可能な差なので、JSONPath の呼び出し回数で
// 上限ガードが候補列挙より前で効いていることを判定する（時間は測らない）。
// =============================================================
const spy = vi.hoisted(() => ({ calls: 0 }));

vi.mock('jsonpath-plus', async importOriginal => {
  const actual = await importOriginal<typeof import('jsonpath-plus')>();
  return {
    ...actual,
    JSONPath: (...args: Parameters<typeof actual.JSONPath>) => {
      spy.calls += 1;
      return actual.JSONPath(...args);
    },
  };
});

// mock の登録後に読み込む
import { ambiguousSearch } from './index';

/** すべて異なる文字からなる文字列を作る（重複除去後も長さが変わらない）。 */
const distinctChars = (n: number): string =>
  Array.from({ length: n }, (_, i) => String.fromCodePoint(0x4e00 + i)).join('');

describe('ambiguousSearch 入力長の上限（SR-NOV26-A1-1）', () => {
  // ---- (a) 同じ字の繰り返しは 1 字のときと同じ結果 ----
  describe('重複除去の等価性（a）', () => {
    it('同じ字の繰り返しは 1 字のときと同じ結果を返す', () => {
      expect(ambiguousSearch('寛'.repeat(200))).toEqual(ambiguousSearch('寛'));
      expect(ambiguousSearch('戊'.repeat(200))).toEqual(ambiguousSearch('戊'));
    });

    it('繰り返しを含む複数字の入力も重複なしの入力と同じ結果を返す', () => {
      expect(ambiguousSearch('寛永寛永寛永')).toEqual(ambiguousSearch('寛永'));
      expect(ambiguousSearch('寛永戊').slice()).toEqual(ambiguousSearch('寛永戊'.repeat(5)).slice());
    });

    it('重複除去後の字数で上限を判定する（同じ字の繰り返しは上限に数えない）', () => {
      spy.calls = 0;
      const result = ambiguousSearch('寛'.repeat(200));
      expect(spy.calls).toBeGreaterThan(0);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  // ---- (b) 重複除去後 65 字以上の長大入力は空を返す ----
  describe('上限超過は空の結果を返す（b）', () => {
    it('重複除去後 65 字の入力は空の結果を返す', () => {
      expect(ambiguousSearch(distinctChars(65))).toEqual([]);
    });

    it('重複除去後 1000 字の入力は空の結果を返す', () => {
      expect(ambiguousSearch(distinctChars(1000))).toEqual([]);
    });

    it('照合し得る文字を含んでいても上限超過なら空の結果を返す', () => {
      expect(ambiguousSearch('寛' + distinctChars(64))).toEqual([]);
    });

    it('上限超過では例外を投げない', () => {
      expect(() => ambiguousSearch(distinctChars(65))).not.toThrow();
    });

    it('重複除去後 65 字以上の入力では候補列挙を行わない', () => {
      spy.calls = 0;
      ambiguousSearch(distinctChars(65));
      expect(spy.calls).toBe(0);
    });

    it('重複除去後 64 字の入力は上限内なので候補列挙を行う', () => {
      spy.calls = 0;
      ambiguousSearch(distinctChars(64));
      expect(spy.calls).toBe(1);
    });
  });

  // ---- (c) 既存の検索結果が変わらない ----
  describe('既存の検索結果の非退行（c）', () => {
    it('寛永の検索結果が変わらない', () => {
      expect(ambiguousSearch('寛永')).toHaveLength(21);
      expect(ambiguousSearch('寛永')[0]).toMatchObject({ year: 1624, nengo: '寛永1' });
    });

    it('戊（tsuchinoe_inu_flag）の結果が通常より広いまま', () => {
      expect(ambiguousSearch('戊', { tsuchinoe_inu_flag: true }).length).toBeGreaterThan(
        ambiguousSearch('戊').length,
      );
    });

    it('range 指定の検索結果が変わらない', () => {
      expect(ambiguousSearch('寛永', { range: '1624-1630' })).toHaveLength(7);
    });

    it('空入力・空白のみの入力は空の結果を返し、候補列挙を行わない', () => {
      spy.calls = 0;
      expect(ambiguousSearch('')).toEqual([]);
      expect(ambiguousSearch('   ')).toEqual([]);
      expect(spy.calls).toBe(0);
    });
  });
});
