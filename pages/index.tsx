import { useWallet } from "use-wallet2";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const wallet = useWallet();
  const connectWallet = () => {
    setIsConnected(!isConnected);
  };
  return (
    <div className="container mx-auto relative">
      <div className="container mx-auto p-4 flex flex-wrap items-center justify-between xl:gap-5 gap-2">
        <a
          href="https://toon.finance"
          className="flex items-center gap-3 w-auto xl:w-96"
        >
          <Image
            src={"/assets/images/logo.png"}
            alt="logo"
            width={300}
            height={20}
            className="xl:h-12 h-8"
          />
        </a>
        <div className="flex flex-center justify-end w-auto xl:w-96">
          <button
            onClick={connectWallet}
            type="button"
            className="text-[white] font-bold text-black-800 dark:text-black-600 bg-blue-700 hover:bg-blue-400 p-2  mx-2 rounded-xl"
          >
            Connect Wallet
          </button>
          <a
            href="https://t.me/ToonSwapFinance"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold p-2 rounded-xl flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400"
          >
            <Image
              src={"/assets/images/telegram.svg"}
              alt="telegram"
              width={20}
              height={20}
              className="h-5 text-white mx-2"
            />
            <span className="lg:block hidden">Presale Support</span>
          </a>
        </div>
      </div>
      <div className="h-[18px]"></div>
      <div className="container mx-auto py-6 px-4">
        <form className="w-[512px] grid gap-y-2 bg-[#000000] rounded-2xl py-4 px-6 shadow-2xl mx-auto text-white">
          <h2 className="mb-1 text-center font-extrabold text-4xl">
            {" "}
            Join $TFT Presale{" "}
          </h2>
          <div className="text-center font-bold mb-1">
            {" "}
            Toon Finance Presale Stage 2{" "}
          </div>
          <div className="text-center font-bold mb-1"></div>
          <p className="mb-3 text-center font-xl text-2x1"></p>
          <div className="relative grid grid-cols-[minmax(min-content,100px),minmax(auto,1fr)] gap-x-4">
            <button className="flex flex-wrap items-center gap-x-2">
              <p className="flex flex-wrap items-center gap-x-2">
                <Image
                  src={"/assets/images/eth.png"}
                  alt="Ethereum logo"
                  width="40"
                  height="40"
                  className="object-scale-down bg-white rounded-full w-7 h-7 p-1"
                  loading="lazy"
                />
                ETH
              </p>
            </button>
            <input
              type="text"
              placeholder="0.0"
              className="outline-none bg-transparent text-2xl leading-1 py-4"
              readonly=""
              data-v-ed93e402=""
            />
            <span></span>
            <div className="justify-end items-end w-full flex gap-1 mb-2">
              <button
                type="button"
                className="font-bold text-black-800 dark:text-black-600 bg-blue-700 hover:bg-blue-400 px-2"
              ></button>
            </div>
          </div>
          <div className="flex w-full items-center">
            <span className="flex-auto bg-orange-200 h-px"></span>
          </div>
          <div className="relative grid grid-cols-[minmax(max-content,100px),minmax(auto,1fr)] gap-4">
            <div className="flex flex-wrap items-center gap-x-2">
              <Image
                src={"/assets/images/Token.png"}
                alt="TFT logo"
                width="40"
                height="40"
                className="bg-white rounded-full w-7 h-7"
                loading="lazy"
              />
              TFT
            </div>
            <input
              type="text"
              placeholder="0.0"
              className="outline-none bg-transparent text-2xl leading-1 py-4 w-full"
              readonly=""
            />
          </div>
          <button
            onClick={connectWallet}
            className="rounded-full text-black-800 dark:text-black-600 bg-blue-700 hover:bg-blue-400 w-full p-4 font-bold rounded-4xl"
          >
            Connect Wallet
          </button>
        </form>
        <div className="grid gap-y-4 w-lg max-w-full py-10 px-6 mx-auto">
          <button className="text-black hover:underline font-bold">
            Import TFT Token to Metamask
          </button>
        </div>
      </div>
      {isConnected ? (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="crypto-modal"
                onClick={() => setIsConnected(false)}
              >
                <Image
                  src={"/assets/images/cross.svg"}
                  width={30}
                  height={30}
                  alt=""
                />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="py-4 px-6 rounded-t border-b dark:border-gray-600">
                <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                  Connect wallet
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Connect with one of our available wallet providers or create a
                  new one.
                </p>
                <ul className="my-4 space-y-3">
                  <li>
                    <span
                      className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      onClick={() => wallet.connect("injected")}
                    >
                      <Image
                        src={"/assets/images/metamask.svg"}
                        width={40}
                        height={40}
                        alt=""
                      />

                      <span className="flex-1 ml-3 whitespace-nowrap text-lg pl-2">
                        MetaMask
                      </span>
                      <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-sm font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                        Popular
                      </span>
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => wallet.connect("walletlink")}
                      className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      <Image
                        src={"/assets/images/coinbase.svg"}
                        width={40}
                        height={40}
                        alt=""
                      />
                      <span className="flex-1 ml-3 whitespace-nowrap text-lg pl-2">
                        Coinbase Wallet
                      </span>
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => wallet.connect("walletconnect")}
                      className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    >
                      <Image
                        src={"/assets/images/wallet-connect.svg"}
                        width={40}
                        height={40}
                        alt=""
                      />
                      <span className="flex-1 ml-3 whitespace-nowrap text-lg pl-2">
                        WalletConnect
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
