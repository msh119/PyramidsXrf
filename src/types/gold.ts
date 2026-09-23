export interface GoldItem {
  id: string;
  label: string;
  weight: number | '';
  fineness: number | '';
}

export interface CalculationResults {
  grossWeight: number;
  fineGold24: number;
  netFineGold24: number;
  actualMixPurity: number;
  mixPurity: number;
  purityDeduction: number;
  expectedKarat: number;
  actualExpectedKarat: number;
  alloyWeight: number;
  itemsCount: number;
}

export interface TargetKaratOption {
  id: string;
  name: string;
  karat: number;
  fineness: number; // in parts per thousand (e.g. 875)
  ratio: number; // fineness / 1000
}

export const COMMON_KARATS: TargetKaratOption[] = [
  { id: '21k', name: 'عيار 21 (875)', karat: 21, fineness: 875, ratio: 0.875 },
  { id: '18k', name: 'عيار 18 (750)', karat: 18, fineness: 750, ratio: 0.750 },
  { id: '22k', name: 'عيار 22 (916.6)', karat: 22, fineness: 916.667, ratio: 0.916667 },
  { id: '24k', name: 'عيار 24 (999.9)', karat: 24, fineness: 999.9, ratio: 0.9999 },
];
