import React from "react";

function HistorySection() {
  return (
    <section id="history" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#F7C873] mb-6">History of Braybank</h2>
        <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-4">
          <p>
            The Braybank site originally hosted a house which was built in 1901/1902, known as <b>Braymead</b>. It was owned by a stockbroker until 1922, when the site was sold to a local syndicate and was transformed into the Braymead Court Hotel.
          </p>
          <p>
            Sadly, the hotel venture struggled to prosper and in 1928, became known as <b>Hotel de Paris</b>, deriving its name from its new owners (Messrs Poulson and Stocco) who were running the Cafe de Paris in the West End of London at the same time.
          </p>
          <p>
            Each weekend many top-ranking bands and cabaret stars from the Cafe de Paris would entertain around 300 visitors and guests along with a regular booking from the Guards annual passing out parade from Camberly with up to 500 guests. It was famous in its day and provided entertainment as well as employment to some of the villagers. It is rumoured that royalty often frequented Hotel de Paris and some scandals originated at the Hotel de Paris!
          </p>
          <p>
            In 1939, the hotel suffered as a result of the Second World War and was taken over by a London shipping and insurance company for the duration of the war. After the war, while there was a gradual return of the hotel activities, the venture was not sustainable and the hotel was sold and demolished.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HistorySection;
