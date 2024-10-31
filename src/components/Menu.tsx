import Link from "next/link";


export default function Menu(){
    return(
        <nav>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/produtos'}>Produtos</Link></li>
                <li><Link href={'/cadastro-produtos'}>Cadastro</Link></li>
            </ul>
        </nav>
    )
}