import api from './api/character.json'

const App = () => {
  console.log(api)

  return (
    <>
      <main className="mx-3 my-3">
        <article className='w-full grid grid-cols-3 gap-5'>
          {api.charater.map((character) => {
            return (
              <section className='aspect-[9/12] w-full overflow-hidden rounded flex items-center justify-center hover:cursor-pointer hover:scale-[104%] ease-in-out duration-300'>
                <img src={character.img} alt={character.name} />
              </section>
            )
          })}
        </article>
      </main>
    </>
  )
}

export default App