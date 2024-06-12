import IconCloud from "./magicui/icon-cloud";


const slugs = [
  "tether",
  "bitcoin",
  "ethereum",
  "solana",
  "ton",
  "dogecoin",
  "litecoin",
  "bnbchain",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[34rem] items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
