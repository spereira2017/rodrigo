import axios from "axios";

export const revalidate = 60

export async function generateStaticParams() {
    return [{ name: 'charmander' }, { name: 'ditto' }]
  }

async function Page({ params }: { params: { name: string } }) {
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`);

  return <div>My Post: {`${pokemon.data.name} - Numero ${pokemon.data.order}`} </div>;
}

export default Page;
