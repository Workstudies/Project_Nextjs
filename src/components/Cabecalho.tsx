import Image from 'next/image'
import logoPowerHub from '../images/logo.png'
import Link from 'next/link';
 
export default function Cabecalho() {
    return (
        <header style={{backgroundColor: '#C11D20'}}>
            <div className="flex-1 flex justify-center">
                <Image src={logoPowerHub} alt="LogoPowerHub" width={300} height={100} />
            </div>
            <nav className="bg-[#f8f6ef] py-3 flex justify-around text-black font-semibold">
                <Link href="/" className="hover:text-gray-600">Home</Link>
                <Link href="/produtos" className="hover:text-gray-600">Produtos</Link>
                <Link href="/cadastro-produtos" className="hover:text-gray-600">Cadastro</Link>
            </nav>
        </header>
    )
}
 