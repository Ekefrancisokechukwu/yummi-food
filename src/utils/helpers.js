import { useState } from "react";

export const formatedPrice = (number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  // if (type === "colors") {
  //   unique = unique.flat();
  // }

  return ["all", ...new Set(unique)];
};