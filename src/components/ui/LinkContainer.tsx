import Link from "next/link";

export default function LinkContainer({ link } : { link : string}){

  return(
    <div className="p-1 px-4 rounded-2xl dark:border-white border-2 hover:opacity-80 cursor-pointer">
        <Link href={link}>{link}</Link>
    </div>
  )
}