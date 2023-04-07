<script>
	import { variants } from '@catppuccin/palette';
	let selected = 'latte';
</script>

<svelte:head>
	<title>Projects | Alexander Deters</title>
</svelte:head>

<html lang="en" class={selected ? selected : ''}>
    <body class="latte bg-base">
        <div class="mx-6 md:mx-20 2xl:mx-[30rem] my-6 md:mt-8 font-proxima text-text">
            <h1 class="h-14 text-5xl text-center md:text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink to-mauve">Projects</h1>
            <hr class="h-[0.1rem] border-0 bg-surface2 my-4">
            <div class="font-thin">
                <h2 class="text-2xl font-bold">Yale Undergradute Quantum Computing | <a target="_blank" class="text-mauve" href="https://yaleqc.com/">YuQC</a></h2>
                <p class="mt-4"> Co-president of YuQC from 22-23, a club dedicated to foster interest and accessibility to all aspects of quantum information sciences among the Yale student body and beyond. Doubled active membership from previous year, as well as hosted multiple invited speakers and hackathons. Further led a quantum error correction reading group in 2021 and a superconducting circuits study group in 2022.<br><br>

                YuQC also collaborates with the Yale chapters of Women in Physics and the Society of Physics Students to host events, and provides resources open to anybody interested in learning, regardless of school affiliation.</p><br>

            <hr class="h-[0.1rem] border-0 bg-surface2 my-4">
            <h2 class="text-2xl font-bold">Cloud QC System Benchmarking | <a target="_blank" class="text-mauve" href="https://github.com/AFriendlyTrashcan/2022_qutech_challenge">QDB</a></h2>
            <p class="mt-4"> As part of the 20 hour <a target="_blank" class="text-mauve" href="https://www.iquise.mit.edu/iQuHACK/2023-01-27">MIT 2021 iQuHACK</a> together with my team developed a tool for measuring gate fidelities on cloud quantum computers, and calculating first order fidelities of various circuits. In error detection circuits, our fidelity predictions matched within 10-20%.

                QDB was furthermore able to diagnose an instability in Qutech's spin qubit system, something no other team in the competition did. My team won <b class="font-bold">first place</b> in the superconducting circuit division of iQuHACK for this project.
                </p>
            </div>
        </div>
	</body>
</html>
