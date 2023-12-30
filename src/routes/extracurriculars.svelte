<script>
	import { variants } from '@catppuccin/palette';
	let selected = 'latte';
</script>

<svelte:head>
	<title>Extracurriculars | Alexander Deters</title>
</svelte:head>

<html lang="en" class={selected ? selected : ''}>
    <body class="latte bg-base">
        <div class="mx-6 md:mx-20 2xl:mx-[30rem] my-6 md:mt-8 font-proxima text-text">
            <h1 class="h-14 text-5xl text-center md:text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink to-mauve">Extracurriculars</h1>
            <hr class="h-[0.1rem] border-0 bg-surface2 my-4">
            <div class="font-thin">
                <h2 class="text-2xl font-bold">Yale Undergradute Quantum Computing | <a target="_blank" class="text-mauve" href="https://yaleqc.com/">YuQC</a></h2>
                <p class="mt-4"> Co-president of YuQC from 22-23, a club dedicated to foster interest and accessibility to all aspects of quantum information sciences among the Yale student body and beyond. Doubled active membership from previous year, as well as hosted multiple invited speakers and hackathons. Also led a quantum error correction reading group in 2021.<br><br>

                YuQC also collaborates with the Yale chapters of Women in Physics and the Society of Physics Students to host events, and provides resources open to anybody interested in learning, regardless of school affiliation.</p><br>

            <hr class="h-[0.1rem] border-0 bg-surface2 my-4">
            <h2 class="text-2xl font-bold">Cloud QC System Benchmarking | <a target="_blank" class="text-mauve" href="https://github.com/AFriendlyTrashcan/2022_qutech_challenge">QDB</a></h2>
            <p class="mt-4"> <b class="font-bold">First place</b> in the <a target="_blank" class="text-mauve" href="https://www.iquise.mit.edu/iQuHACK/2022-01-28">MIT 2022 iQuHACK</a> superconducting circuit divison. My team developed a tool for measuring gate fidelities on cloud quantum computers, and calculating first order fidelities of various circuits. In error detection circuits, our fidelity predictions matched within 10-20%. QDB was furthermore able to diagnose an instability in QuTech's spin qubit system, something no other team in the competition did.
                </p>
            <hr class="h-[0.1rem] border-0 bg-surface2 my-4">
            <h2 class="text-2xl font-bold">Maximally Independent Sets on Cold Atom Arrays </h2>
            <p class="mt-4"> <b class="font-bold">First place</b> in the <a target="_blank" class="text-mauve" href="https://www.iquise.mit.edu/iQuHACK/2023-01-27">MIT 2023 iQuHACK</a> Rydberg atom division. Our problem was to construct a graph with the largest maximally independent set on a Rydberg atom computer. Our modular solution allowed scaling to arbitrarily large hardware. Wrote a blog post for <a target="_blank" class="text-mauve" href="https://aws.amazon.com/blogs/quantum-computing/how-we-learned-to-program-with-atoms-in-24-hours-flat/">Amazon Web Services</a> about our solution and <b class="font-bold">gave a talk at QuEra Computing’s headquarters</b>.

                </p>
            </div>
        </div>
	</body>
</html>
