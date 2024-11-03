"use client";
import { useState } from 'react';
import superHeroesImage from '../images/superHeroesImage.png';
import dcImage from '../images/dcImage.png';
import marvelImage from '../images/marvel.png';
import anime from '../images/anime.png';
import bone from '../images/bone.png';
import camiseta from '../images/camiseta.png';
import chaveiro from '../images/chaveiro.png';
import revista from '../images/revista.png';
import funko from '../images/funko.png';
import Image from 'next/image';
 
export default function Home() {
  const produtos = [
    { nome: 'Boné Naruto Akatsuki', preco: 'R$ 35,99', desconto: '-5% OFF', imagem: bone },
    { nome: 'Camiseta Itachi Anime Naruto', preco: 'R$ 44,99', desconto: '-50% OFF', imagem: camiseta },
    { nome: 'Chaveiros Marvel', preco: 'R$ 51,80', desconto: '-22% OFF', imagem: chaveiro },
    { nome: 'Revista - O Conflito Do Século Marvel Comics', preco: 'R$ 20,00', desconto: '-10% OFF', imagem: revista },
    { nome: 'Funko Pop! DC Comics Superman', preco: 'R$ 150,00', desconto: '-15% OFF', imagem: funko },
  ];
 
  const [atual, setAtual] = useState(0);
 
  const prev = () => setAtual(atual === 0 ? produtos.length - 1 : atual - 1);
  const next = () => setAtual(atual === produtos.length - 1 ? 0 : atual + 1);
 
  return (
    <main className="bg-gray-100">
      <section
        style={{
          backgroundImage: `url(${superHeroesImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '900px',
          width: '100%'
        }}
      >
      </section>
 
      <section className="py-8 grow">
        <h2 className="text-2xl font-bold text-center">Marcas</h2>
        <div className="flex justify-center space-x-8 py-4">
          <div className="bg-red-600 text-white p-6 text-center rounded flex flex-col items-center">
            <h3 className="font-bold mb-2">Desenhos de animes</h3>
            <Image src={anime} alt="Anime" width={150} height={100} className="mb-2" />
            <p>Explore mundos mágicos dos animes mais populares.</p>
          </div>
 
          <div className="bg-red-600 text-white p-6 text-center rounded flex flex-col items-center">
            <h3 className="font-bold mb-2">Marvel Studios</h3>
            <Image src={marvelImage} alt="Marvel" width={300} height={100} className="mb-2" />
            <p>Libere o herói em você com a linha completa de produtos Marvel.</p>
          </div>
 
          <div className="bg-red-600 text-white p-6 text-center rounded flex flex-col items-center">
            <h3 className="font-bold mb-2">DC Comics</h3>
            <Image src={dcImage} alt="DC Comics" width={130} height={100} className="mb-2" />
            <p>Entre no universo dos super-heróis mais icônicos da DC Comics.</p>
          </div>
        </div>
      </section>
 
      <section className="py-8">
        <h2 className="text-2xl font-bold text-center">Produtos em Destaque</h2>
        <div className="flex justify-center py-4">
          <div className="text-center p-4 border rounded shadow-lg flex flex-col items-center">
            <Image src={produtos[atual].imagem} alt={produtos[atual].nome} width={150} height={150} className="mb-2" />
            <h3 className="font-bold">{produtos[atual].nome}</h3>
            <p className="text-red-500">{produtos[atual].desconto}</p>
            <p>{produtos[atual].preco}</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={prev} className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700">
            &lt;
          </button>
          <button onClick={next} className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700">
            &gt;
          </button>
        </div>
      </section>
    </main>
  );
}