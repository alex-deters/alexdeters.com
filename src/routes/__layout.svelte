<script lang="ts">
    import "../app.css";
    import { page } from '$app/stores';
    let url = '/';
    let menuOpened = false;
    $: url = $page.url.pathname;
</script>
<svelte:head>
    <link rel="stylesheet" href="https://use.typekit.net/leh1vvv.css">
<meta name="description" content="Alex Deters is a quantum experimentalist with field-programmable gate array (FPGA) experience and is researching superconducting circuits.">
</svelte:head>

<nav class="latte bg-base flex items-center justify-between flex-wrap p-3 md:p-6 border-b-[1px] border-surface0 h-18 md:h-14">
  <div class="block md:hidden ml-auto">
      <button class="flex items-center px-4 py-3 mt-0 border rounded text-text hover:text-rosewater hover:border-rosewater" on:click="{() => menuOpened=!menuOpened}">
      <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-screen block flex-grow md:flex md:items-center md:w-auto md:h-2 text-text md:mx-14 2xl:mx-[30rem] font-raleway font-light z-10 bg-base bg-opacity-75">
      <div class="{menuOpened ? '' : 'hidden md:block'} text-xl md:text-[1rem] md:text-lg md:flex-grow text-right">
        <a href="/" class="block mt-4 md:inline-block md:mt-0 hover:text-flamingo mr-4 {url == '/' || url == '/about'? 'text-red' : ''}" on:click="{() => menuOpened=!menuOpened}">
        About
      </a>
      <a href="/research" class="block mt-4 md:inline-block md:mt-0 hover:text-flamingo mr-4 {url == '/research' ? 'text-red' : ''}" on:click="{() => menuOpened=!menuOpened}">
        Research
      </a>
      <a href="/projects" class="block mt-4 md:inline-block md:mt-0 hover:text-flamingo mr-4 {url == '/projects' ? 'text-red' : ''}" on:click="{() => menuOpened=!menuOpened}">
        Projects
      </a>
      <a href="/education" class="block mt-4 md:inline-block md:mt-0 hover:text-flamingo mr-4  {url == '/education' ? 'text-red' : ''}" on:click="{() => menuOpened=!menuOpened}">
        Education
      </a>
      <a target="_blank" href="https://drive.google.com/file/d/1YAYpniNUjb1M_g5XKG0EWxWRJ55zYoQC/view?usp=sharing" class="block mt-4 md:inline-block md:mt-0 hover:text-red mr-4 md:mr-0" on:click="{() => menuOpened=!menuOpened}">
        CV
      </a>
    </div>
  </div>
</nav>

<slot />

