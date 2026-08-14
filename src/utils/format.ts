export const pad = (value: number) => String(value).padStart(2, "0");

export function formatArabicNumber(value: number) {
  return new Intl.NumberFormat("ar-EG").format(value);
}
