<script>
	import { variants } from '@catppuccin/palette';
import Projects from './projects.svelte';
	let selected = 'latte';
</script>

<svelte:head>
    <title>Alexander Deters</title>
</svelte:head>

<html lang="en" class={selected ? selected : ''}>
    <body class="latte bg-base">
        <div class="mx-6 md:mx-20 2xl:mx-[30rem] mt-6 md:mt-8 font-proxima text-text">
            <h1 class="text-5xl text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-pink to-mauve"> <b class="font-extrabold">Alexander</b> Deters </h1>
            <p class="mt-4 text-center md:text-left"> <b>Quantum Simulation</b> @ <a target="_blank" href="https://greiner.physics.harvard.edu/" class="font-bold text-mauve">Greiner Lab</a>  &nbsp;&#8226;&nbsp;  Atomic Physics,  Quantum Control, & FPGA Design</p>
            <div class="font-thin mt-4">
            <img class="hidden float-right w-2/5 md:w-1/4 rounded-md shadow ml-4"  alt="Alex">
                <p >Hi, my name is Alex!</p><br>

                <p>I'm a experimental atomic physicist working in <a target="_blank" class="font-bold text-mauve" href="https://greiner.physics.harvard.edu/">Markus Greiner's lab</a> at Harvard. There I work on the Lithium quantum gas microscope experiment for simulating the Fermi-Hubbard model.</p><br>

                <p> I was previously in <a target="_blank" class="font-bold text-mauve" href="https://rsl.yale.edu/"> Robert Schoelkopf's </a> group at Yale where I worked on an FPGA based quantum control system based on the Xilinx RFSoC board and researched techniques for improving linearity in microwave signal generation. Before that I worked in <a target="_blank" class="font-bold text-mauve" href="https://www.yecl.org/">Lin Zhong's</a> group, where I developed and implemented a schema for automatically generating Verilog code and synthesized device firmware for quantum error correction codes across an FPGA network.<br><br>

                I also worked in <a target="_blank" class="font-bold text-mauve" href="https://painterlab.caltech.edu//">Oskar Painter's</a> lab as part of the Caltech SURF fellowship, where I created a Python library automating design, simulation, and post-processing in Sonnet and applied it towards designing an array of qubits with varied SQUID geometries for flux noise spectroscopy. </p><br>

                <p>At Yale I've served as co-president of the Yale Undergraduate Quantum Computing Society (YuQC) and won first place twice in the <a target="_blank" class="font-bold text-mauve" href="https://www.iquise.mit.edu/iQuHACK/2022-01-28"> MIT iQuHACK </a> quantum computing competition (2022 Superconducting Circuit Division, 2023 Neutral Atom Division).</p><br>

                <p>I'm originally from a goat farm in rural Minnesota, and I speak English and Russian. In my free time I enjoy brewing espresso, weightlifting, and reworking my Vim setup for the umpteenth time. Feel free to reach out with any inquiries!</p>
            </div>
        </div>
<div class="mx-6 my-6 md:mt-8 md:mx-20 lg:mx-[30rem] text-text flex justify-center items-center content-center">
            <div class="flex w-1/2 justify-center items-center ">

                <a target="_blank" href="mailto:alex.deters@yale.edu"><svg aria-labelledby="email" class="fill-text h-12 mx-2" viewBox="2 4 20 16"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg></a>
                <a target="_blank" href="https://scholar.google.com/citations?hl=en&user=IXlaWMAAAAAJ"><svg aria-labelledby="email" class="fill-text h-16 mx-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><title>Google Scholar icon</title>> <path d="M10.93 2.045c-.547.366-3.22 2.14-5.938 3.945C2.272 7.794.05 9.286.05 9.304c0 .019.136.11.305.2.167.096 2.85 1.583 5.965 3.31l5.656 3.143.144-.074c.082-.04 2.169-1.232 4.642-2.642l4.493-2.568.027 7.947h2.668V9.319l-3.46-2.32c-4.664-3.124-8.392-5.586-8.484-5.606-.045-.008-.527.287-1.076.652M5.355 16.633l.014 2.005 3.31 1.987 3.31 1.982 3.337-2 3.332-2.005V16.62c0-1.092-.013-1.983-.027-1.983s-1.318.782-2.9 1.741l-3.306 1.996-.431.256-1.32-.791a604.12 604.12 0 0 1-3.286-1.979l-2.005-1.21c-.024-.008-.032.883-.027 1.983" /> </svg></a>
                <a target="_blank" href="https://github.com/alex-deters"><svg aria-labelledby="github" class="fill-text h-14 mx-2" viewBox="0 0 24 23.41"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg></a>
                <a target="_blank" href="https://www.linkedin.com/in/alex-deters/"><svg aria-labelledby="linkedin" class="fill-text h-14 mx-2"  viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
            </div>
        </div>
	</body>
</html>
