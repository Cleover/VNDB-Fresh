import { Head } from "$fresh/runtime.ts";
import Sidebar from "../components/Sidebar.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mebious</title>
        <link rel="stylesheet" href="/main.css"></link>
        <link
          crossorigin="use-credentials"
          rel="manifest"
          href="/manifest.webmanifest"
        />
      </Head>
      <Sidebar />
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-3xl font-bold">Mebious</h1>
        <a href="/search/">Search</a>
        <a href="/random/">random</a>

        <script type="module">
          import
          "https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate/dist/pwa-update.js";
          const el = document.createElement("pwa-update");
          document.body.appendChild(el);
        </script>
      </div>
    </>
  );
}
