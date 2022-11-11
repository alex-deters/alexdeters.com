<script lang="ts">
    import "../app.css";
    import { page } from '$app/stores';
    let url = '/';
    let menuOpened = false;
    $: url = $page.url.pathname;
</script>
<svelte:head>
    <link rel="stylesheet" href="https://use.typekit.net/leh1vvv.css">
</svelte:head>

<nav class="latte bg-base flex items-center justify-between flex-wrap p-3 md:p-6 border-b-[1px] border-surface0 h-14">
  <div class="block md:hidden ml-auto">
      <button class="flex items-center px-3 py-2 mt-0 border rounded text-text hover:text-rosewater hover:border-rosewater" on:click="{() => menuOpened=!menuOpened}">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-screen block flex-grow md:flex md:items-center md:w-auto md:h-2 text-text md:mx-14 lg:mx-[30rem] font-raleway font-light z-10 bg-base bg-opacity-75">
      <div class="{menuOpened ? '' : 'hidden md:block'} text-lg md:text-[1rem] lg:text-lg md:flex-grow text-right">
        <a href="/" class="block mt-4 md:inline-block md:mt-0 hover:text-flamingo mr-4 {url == '/' || url == '/about'? 'text-red' : ''}" on:click="{() => menuOpened=!menuOpened}">
        About
      </a>
      <a href="/research" class="block mt-4 md:inline-block md:mt-0 hover:text-flamingo mr-4 {url == '/research' ? 'text-red' : ''}" on:click="{() => menuOpened=!menuOpened}">
        Research
      </a>
      <a href="/projects" class="block mt-4 md:inline-block md:mt-0 hover:text-flamingo mr-4 {url == '/projects' ? 'text-red' : ''}" on:click="{() => menuOpened=!menuOpened}">
        Projects
      </a>
      <a href="/education" class="block mt-4 md:inline-block md:mt-0 hover:text-red mr-4 md:mr-0  {url == '/education' ? 'text-red' : ''}">
        Education
      </a>
    </div>
  </div>
</nav>

<slot />

