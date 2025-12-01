import Link from "next/link";

export default function Page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-[32rem]">
        <h1 className="[font-size:_clamp(2rem,5vw+0.5rem,5rem)]">{`clamp()`}</h1>
        <p>{`The clamp() CSS function clamps a middle value within a range of values between a defined minimum bound and a maximum bound. The function takes three parameters: a minimum value, a preferred value, and a maximum allowed value.`}</p>
      </div>
      <div className="w-[32rem]">
        <h1 className="[font-size:_clamp(1rem,2vw+0.1rem,3rem)]">Parameters</h1>
        <p className="[font-size:_clamp(0.8rem,2vw,1rem)]">
          The clamp(min, val, max) function accepts three comma-separated
          expressions as its parameters.
        </p>
        <h2 className="[font-size:_clamp(0.8rem,2vw,1rem)]">min</h2>
        <p>
          {`The minimum value is the smallest (most negative) value. This is the
          lower bound in the range of allowed values. If the preferred value is
          less than this value, the minimum value will be used.`}
        </p>
        <h2 className="[font-size:_clamp(0.8rem,2vw,1rem)]">val</h2>
        <p>
          The preferred value is the expression whose value will be used as long
          as the result is between the minimum and maximum values.
        </p>
        <h2 className="[font-size:_clamp(0.8rem,2vw,1rem)]">max</h2>
        <p>
          {`The maximum value is the largest (most positive) expression value to
          which the value of the property will be assigned if the preferred
          value is greater than this upper bound.`}
        </p>
      </div>
      <div className="p-4">
        <Link id="link_example" className="px-2 py-1 bg-sky-500 hover:bg-sky-600 rounded-xl" href="clamp/examples">Example</Link>
      </div>
    </div>
  );
}
