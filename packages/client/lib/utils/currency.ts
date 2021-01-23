import accounting from 'accounting'

export let formatCurrency = (value: number | string) =>
  accounting.formatMoney(value, '₦', 0, ',', '.')

export let formatPercentage = (percentage: number) => `${percentage}%`
