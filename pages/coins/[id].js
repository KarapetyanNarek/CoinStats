import React, { useEffect, useState } from "react";
import CoinContext from "context/coinContext";
import CoinPage from "components/views/coin";

function Coin({ coin, chart }) {
  return (
    <CoinContext.Provider
      value={{
        coin,
        chart,
      }}
    >
      <CoinPage />
    </CoinContext.Provider>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://api.coinstats.app/public/v1/coins");
  const coins = await res.json();
  const paths = coins.coins.map((coin) => ({
    params: { id: coin.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.coinstats.app/public/v1/coins/${params.id}`
  );
  const resChart = await fetch(
    `https://api.coinstats.app/public/v1/charts?period=1m&coinId=${params.id}`
  );

  const coin = await res.json();
  const chart = await resChart.json();
  return { props: { coin: coin.coin, chart: chart.chart } };
}

export default Coin;
