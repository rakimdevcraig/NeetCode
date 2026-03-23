function buyAndSellStock(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    }
    let profit = price - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
}

buyAndSellStock([10, 1, 5, 6, 7, 1]); //6 buy on day 2 sell on day 5

buyAndSellStock([7, 1, 5, 3, 6, 4]); //5 buy on day 2 sell on day 5
