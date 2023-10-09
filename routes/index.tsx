import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function Home() {
  return (
    <div>
      <header id="header">
        <a href="#" class="logo">AquaVibes</a>
        <ul>
          <li><p id="text">Everything Starts with Water</p></li>
        </ul>
      </header>

      <section id="primero">
        <img src="/img/background.png" alt="background" id="background"></img>
        <h2 id="text">
          <span>The Importance of</span>
          <br />Water
        </h2>
        <a href="#segundo" id="btn">Explore</a>
        
      </section>

      <section id="segundo" class="sec">
        <a href="#primero" id="btn">Home</a>
        <h2>Water Cycle 1</h2>
        <p>
          1- Evaporation: Water from the oceans, rivers, lakes, and puddles gets heated by the sun and turns into vapor. Imagine the water turning into "invisible clouds" that go up into the sky. <br />
          2- Condensation: The water vapor cools in the sky and turns back into tiny water droplets. This forms clouds, which look like fluffy cotton in the sky. <br />
          3- Precipitation: When the water droplets in the clouds come together and get very heavy, they fall to the Earth as rain, snow, or hail. It's like the clouds are crying.
        </p>
        <a href="#tercero" id="btn">Water Cycle 2</a>
      </section>
      
      <section id="tercero" class="sec">
        <a href="#segundo" id="btn">Water Cycle 1</a>
        <h2>Water Cycle 2</h2>
        <p>
          4- Runoff: The rain or melted snow that falls on the Earth can go two ways: it either soaks into the ground and goes into rivers and lakes, or it forms puddles and streams that flow directly into rivers. <br />
          5- Accumulation: The water that goes into rivers and lakes stays there for a while. Later, it can evaporate again, continue flowing in the river, or eventually reach the ocean.
        </p>
        <a href="#cuarto" id="btn">Climate Change</a>
      </section>
      
      <section id="cuarto" class="sec">
        <a href="#tercero" id="btn">Water Cycle 2</a>
        <h2>Climate Change</h2>
        <p>
          The Earth's weather has changed a little bit over a very long time. But now, it's getting warmer faster than it has in a really, really long time, like more than 10,000 years!
        </p>
        <a href="#quinto" id="btn">Human Influence</a>
      </section>

      <section id="quinto" class="sec">
        <a href="#cuarto" id="btn">Climate Change</a>
        <h2>Human Influence</h2>
        <p>
          Scientists have been studying this for a while, and they're sure that people are making the Earth warmer. They've used all sorts of tools, like looking at really old ice, rocks, and tree rings, as well as super high-tech things like satellites and special machines.
        </p>
        <a href="#sexto" id="btn">Ways of Knowing</a>
      </section>

      <section id="sexto" class="sec">
        <a href="#quinto" id="btn">Human Influence</a>
        <h2>Ways of Knowing</h2>
        <p>
          Scientists use different tools and sources of information to understand how the climate is changing. Some of these are very old, like pieces of ice, rocks, and tree rings. They also use modern technology, like satellites and special machines.
        </p>
        <a href="#septimo" id="btn">Evidence of Warming:</a>
      </section>

      <section id="septimo" class="sec">
        <a href="#quinto" id="btn">Ways of Knowing</a>
        <h2>Evidence of Warming:</h2>
        <p>
          There are many signs that the Earth is getting warmer, from the rise in temperature all around the world to the melting of large ice sheets.
        </p>
      </section>
      
      <footer id="footer">
        <a href="https://fresh.deno.dev" id="deno-btn">
          <img
            id="deno"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
        <p>Developed by <a href="https://rak1u.deno.dev/">Rak1u</a></p>
      </footer>
    </div>
  );
}
