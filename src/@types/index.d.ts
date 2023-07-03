export {};

declare global {
  interface Window {
    AdLoader: {
      adConfigUrl: string;
      playAd: () => void;
    };
  }
  var ENV: Record<string, string>;

  function playAd(): void;
}
