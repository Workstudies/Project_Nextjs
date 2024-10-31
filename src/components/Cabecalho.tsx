import Image from 'next/image'
import logoPowerHub from './../images/image 22.png'

export default function Cabecalho(){
    return(
        <main>
            <header>
                <Image src={logoPowerHub} alt='LogoPowerHub'/>
            </header>
            
        </main>
    )
}