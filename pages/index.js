import React, { useState } from "react";
import CoinState from "components/views/main_page";
import PageContext, { fetcher } from "src/pagecontext";
import { useSWRInfinite } from "swr";

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.coins.length) return null;
  return `https://api.coinstats.app/public/v1/coins?skip=${
    pageIndex * 20
  }&limit=20`;
};

function CoinStateContainer({ coins }) {
  const { data = [], mutate, size, setSize } = useSWRInfinite(getKey, fetcher, {
    initialData: [coins],
  });

  return (
    <>
      <PageContext.Provider
        value={{
          coins: data.flatMap((page) => page.coins),
          size,
          setSize,
          mutate,
        }}
      >
        <CoinState />
      </PageContext.Provider>
    </>
  );
}

export async function getStaticProps() {
  const coins = await fetcher(
    "https://api.coinstats.app/public/v1/coins?skip=0&limit=20"
  );

  return {
    props: {
      coins,
    },
  };
}

export default CoinStateContainer;
