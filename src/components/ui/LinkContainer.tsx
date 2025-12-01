import Link from "next/link";

export default function LinkContainer({ link } : { link : string}){

  return(
    <div className="relative rounded-xl p-1 bg-white dark:bg-black hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500">
        <Link className="bg-white rounded-lg px-4 py-1" href={link}>{link}</Link>
        

</div>
  )
}