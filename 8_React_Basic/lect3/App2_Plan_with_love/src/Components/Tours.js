import Card from "./Card";

function Tours({tours, removeTour}) //resiving data array from app.js
{
    return(
        <div className="container">

          {/* headiung  */}
            <div>
                <h2 className="title">Plane With Love</h2>
            </div>


            {/*return onr card for all array element*/}

            <div className="cards">
            {
                tours.map((tour)=>{
                    return <Card {...tour} removeTour={removeTour}></Card> // ..tour means cloning object  //then both all abject and removetour function send to card
                })
            }

            </div>


        </div>
    )
}

export default Tours;