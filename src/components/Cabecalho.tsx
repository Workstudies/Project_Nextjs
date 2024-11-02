import Image from 'next/image'
import logoPowerHub from '../images/logo.png'
import Link from 'next/link';
 
export default function Cabecalho() {
    return (
        <header style={{backgroundColor: '#C11D20'}}>
            <Image src={logoPowerHub} alt='LogoPowerHub' width={300} height={100} />
            <nav className="flex space-x-4" style={{backgroundColor: 'white', padding: '15px 0'}}>
                <Link href="/" className="text-black hover:text-gray-600">Home</Link>
                <Link href="/produtos" className="text-black hover:text-gray-600">Produtos</Link>
                <Link href="/cadastro-produtos" className="text-black hover:text-gray-600">Cadastro</Link>
            </nav>
        </header>
    )
}
 