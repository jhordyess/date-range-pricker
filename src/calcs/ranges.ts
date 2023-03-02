import { DateTime } from "luxon";

type TRange = { ini: DateTime; end: DateTime };

export const last7Days = (curr = DateTime.local()): TRange => ({
  ini: curr.startOf("day").minus({ days: 7 }),
  end: curr,
});

export const last14Days = (curr = DateTime.local()): TRange => ({
  ini: curr.startOf("day").minus({ days: 14 }),
  end: curr,
});

export const last30Days = (curr = DateTime.local()): TRange => ({
  ini: curr.startOf("day").minus({ days: 30 }),
  end: curr,
});

export const last3Months = (curr = DateTime.local()): TRange => ({
  ini: curr.startOf("day").minus({ months: 3 }),
  end: curr,
});

export const last12Months = (curr = DateTime.local()): TRange => ({
  ini: curr.startOf("day").minus({ months: 12 }),
  end: curr,
});

export const month2date = (curr = DateTime.local()): TRange => ({
  ini: curr.startOf("day").startOf("month"),
  end: curr,
});

export const quarter2date = (curr = DateTime.local()): TRange => ({
  ini: curr.startOf("day").startOf("quarter"),
  end: curr,
});
