import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function Home() {
  return (
    <div>
      <header id="header">
        <a href="#" class="logo">AquaVibes</a>
      </header>

      <section id="primero">
        <img src="/img/background.png" alt="background" id="background"></img>
        <h2 id="text">
          <span>Everything Starts with</span>
          <br />Water
        </h2>
        <a href="#segundo" id="btn">Explore</a>
      </section>

      <section id="segundo" class="sec">
        <a href="#primero" id="btn">Before</a>
        <h2>Lorem sit proident irure</h2>
        <p>
          Lorem sit proident irure irure reprehenderit pariatur eiusmod laborum
          consectetur ad ipsum deserunt.
        </p>
        <a href="#tercero" id="btn">Next</a>
      </section>
      <section id="tercero" class="sec">
        <a href="#segundo" id="btn">Before</a>
        <h2>Lorem sit proident irure</h2>
        <p>
          Lorem sit proident irure irure reprehenderit pariatur eiusmod laborum
          consectetur ad ipsum deserunt.
        </p>
      </section>
    </div>
  );
}
