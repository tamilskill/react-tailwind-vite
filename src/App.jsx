import { useState } from 'react';
import ReactSvG from './assets/react.svg';

function App() {
  return (
    <div class="dark">
      <div class="rounded-lg bg-white px-6 py-8 shadow-xl ring ring-gray-900/5 dark:bg-gray-800">
        <div>
          <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
            <svg class="h-6 w-6 stroke-white"></svg>
          </span>
        </div>
        <h3 class="mt-5 text-base font-medium tracking-tight text-gray-900 dark:text-white">
          Writes upside-down
        </h3>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
      <button class="bg-sky-700 px-4 py-2 text-white hover:bg-black focus:bg-red-300 sm:px-8 sm:py-3">
        Submit
      </button>
    </div>
  );
}

export default App;
