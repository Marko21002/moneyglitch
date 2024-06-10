import TextReveal from "./magicui/text-reveal";


export default function Space(){
    return(
      <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg border bg-neutral-700 dark:bg-black">
      <TextReveal text="What can we offer as a trading tool?" />
      <TextReveal text="What can we offer as a trading tool?" />
      <TextReveal text="What can we offer as a trading tool?" />
    </div>
    )
}