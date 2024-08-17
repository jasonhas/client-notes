export default function Clients() {

    const clients = [
        {
          id: 1,
          name: 'UPS'
        },
        {
          id: 2,
          name: 'Sammons'
        },
        {
          id: 3,
          name: 'American Airlines'
        }
      ]

    return (
        <div>

            <section>
            <h2 className="font-semibold text-xl">Client List</h2>
                <ul>
                {clients.map((client) => {
                    return (<li><a href={`/clients/${client.id}`}>{client.name}</a></li>)
                }
                    
                )}
                </ul>
            </section>
        </div>
        

        
    )
}