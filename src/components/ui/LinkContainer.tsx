
import Link from "next/link";


export default function LinkContainer({ link } : { link : string}){
  
  return(
    <div className="">
        <Link className="button-hover" href={link}>{link}</Link>
    </div>
  )
}