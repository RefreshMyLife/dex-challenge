"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Decentralized Exchange (DEX)</span>
          </h1>

          <div className="flex justify-center items-center space-x-2 flex-col">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>

          <div className="flex items-center flex-col flex-grow pt-10">
            <div className="px-5">
              <h1 className="text-center mb-6">
                <span className="block text-2xl mb-2">Project Showcase</span>
                <span className="block text-4xl font-bold">⚖️ Build a Decentralized Exchange</span>
              </h1>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/hero.png"
                  width="727"
                  height="231"
                  alt="DEX banner"
                  className="rounded-xl border-4 border-primary"
                />
                <div className="max-w-3xl">
                  <p className="text-center text-lg mt-8">
                    This project demonstrates the core functionality of a decentralized exchange with a single token
                    pair (ERC20 BALLOONS ($BAL) and ETH). The app enables wallet connection, balance display, and token
                    swaps using an automated pricing formula.
                  </p>
                  <p className="text-center text-lg">
                    The goal is to showcase how a DEX handles liquidity pools and allows users to trade assets without
                    relying on centralized intermediaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
