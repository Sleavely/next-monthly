interface NextMonthlyOptions {
  from?: Date | number | string
  now?: Date | number | string
}

declare function nextMonthly(options?: NextMonthlyOptions): Date

export = nextMonthly
