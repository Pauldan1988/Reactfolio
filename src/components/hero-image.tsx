import Image from "next/image";

export default function HeroImage() {
    return (
        <div>
          <Image src="/Profile_Picture.jpg" alt="Profile Picture" height={500} width={500}></Image>  
        </div>
    )
} 