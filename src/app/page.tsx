import superHeroesImage from '../images/superHeroesImage.png';
 
export default function Home() {
  const produtos = [
    { nome: 'Boné Naruto Akatsuki', preco: 'R$ 35,99', desconto: '-5% OFF' },
    { nome: 'Camiseta Itachi Anime Naruto', preco: 'R$ 44,99', desconto: '-50% OFF' },
    { nome: 'Chaveiros Marvel', preco: 'R$ 51,80', desconto: '-22% OFF' },
    { nome: 'Revista - O Conflito Do Século Marvel Comics', preco: 'R$ 20,00', desconto: '-10% OFF' },
    { nome: 'Funko Pop! DC Comics Superman', preco: 'R$ 150,00', desconto: '-15% OFF' },
  ];
 
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
 
 
      <section className="py-8">
        <h2 className="text-2xl font-bold text-center">Marcas</h2>
        <div className="flex justify-center space-x-8 py-4">
          <div className="bg-red-600 text-white p-6 text-center rounded">
            <h3 className="font-bold">Desenhos de animes</h3>
            <p>Explore mundos mágicos dos animes mais populares.</p>
          </div>
 
          <div className="bg-red-600 text-white p-6 text-center rounded">
            <h3 className="font-bold">Marvel Studios</h3>
            <p>Libere o herói em você com a linha completa de produtos Marvel.</p>
          </div>
 
          <div className="bg-red-600 text-white p-6 text-center rounded">
            <h3 className="font-bold">DC Comics</h3>
            <p>Entre no universo dos super-heróis mais icônicos da DC Comics.</p>
          </div>
        </div>
      </section>
 
      <section className="py-8">
        <h2 className="text-2xl font-bold text-center">Produtos em Destaque</h2>
        <div className="flex justify-center space-x-4 py-4">
          {produtos.map((produto, index) => (
            <div
              key={index}
              className="text-center p-4 border rounded shadow-lg"
            >
              <h3 className="font-bold">{produto.nome}</h3>
              <p className="text-red-500">{produto.desconto}</p>
              <p>{produto.preco}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}