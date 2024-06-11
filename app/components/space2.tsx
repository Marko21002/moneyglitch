import { VelocityScroll } from "./magicui/scroll-based-velocity";


export function Space2() {
  return (
    <VelocityScroll
      text="Trade Learn Earn"
      default_velocity={2}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
