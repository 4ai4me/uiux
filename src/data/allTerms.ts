import { TermItem } from '../types';
import { TERMS_CAT_1_TO_5 } from './termsCat1To5';
import { TERMS_CAT_6_TO_10 } from './termsCat6To10';
import { TERMS_CAT_11_TO_15 } from './termsCat11To15';
import { TERMS_CAT_16_TO_18 } from './termsCat16To18';
import { TERMS_CAT_19_TO_21 } from './termsCat19To21';
import { TERMS_CAT_22_TO_24 } from './termsCat22To24';

export const ALL_TERMS: TermItem[] = [
  ...TERMS_CAT_1_TO_5,
  ...TERMS_CAT_6_TO_10,
  ...TERMS_CAT_11_TO_15,
  ...TERMS_CAT_16_TO_18,
  ...TERMS_CAT_19_TO_21,
  ...TERMS_CAT_22_TO_24,
].sort((a, b) => a.num - b.num);

export const TOTAL_TERMS_COUNT = ALL_TERMS.length;
