
export default async function Home() {
const respota = await fetch("https://back-end-ifms-blond.vercel.app/campi",{next:{ revalidate:1}});
const campus = await respota.json();

  return (
    <main>
      <h1>Home</h1>
      {
      campis.map((campus)=>
       <div>
        <p>{campus.nome_campus}</p>
       </div>
      )
      }
    </main>
  )
}
