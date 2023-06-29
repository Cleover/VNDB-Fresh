export default function Sidebar() {
  return (
    <div>
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          >
          </path>
        </svg>
      </button>

      <aside
        id="cta-button-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <a href="/" class="flex items-center pl-2.5 mb-5">
            <img
              src="/logo.png"
              class="h-6 mr-3 sm:h-7 rounded"
              alt="Mebious Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap">
              Mebious
            </span>
          </a>
          <button
            data-drawer-target="cta-button-sidebar"
            data-drawer-toggle="cta-button-sidebar"
            aria-controls="cta-button-sidebar"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center lg:hidden"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              >
              </path>
            </svg>
            <span class="sr-only">Close menu</span>
          </button>
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="/search"
                class="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <span class="ml-3">Search</span>
              </a>
            </li>
            <li>
              <a
                href="/random"
                class="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <span class="ml-3">Random VN</span>
              </a>
            </li>
          </ul>
          <div
            id="dropdown-cta"
            class="p-4 mt-6 rounded-lg bg-blue-50"
            role="alert"
          >
            <div class="flex items-center mb-3">
              <span class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                Beta
              </span>
              <button
                type="button"
                class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6"
                data-dismiss-target="#dropdown-cta"
                aria-label="Close"
              >
                <span class="sr-only">Close</span>
                <svg
                  aria-hidden="true"
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  >
                  </path>
                </svg>
              </button>
            </div>
            <p class="mb-3 text-sm text-blue-800">
              This site is still in beta! You can find our discord [Here]
            </p>
            <a
              class="text-sm text-blue-800 underline font-medium hover:text-blue-900"
              href="#"
            >
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
