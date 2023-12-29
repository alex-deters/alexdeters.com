<script>
	import { variants } from '@catppuccin/palette';
	let selected = 'latte';
</script>

<svelte:head>
	<title>Research | Alexander Deters</title>
</svelte:head>

<html lang="en" class={selected ? selected : ''}>
    <body class="latte bg-base">
        <div class="mx-6 md:mx-20 2xl:mx-[30rem] my-6 md:mt-8 font-proxima text-text">
            <h1 class="h-14 text-5xl text-center md:text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink to-mauve">Research</h1>
            <hr class="h-[0.1rem] border-0 bg-surface2 my-4">
            <div class="font-thin">
                <h2 class="text-2xl font-bold">RFSoC Based Quantum Control</h2>
                <h3 class="text-l font-semibold mt-1 hidden md:block">Prof. Rob Schoelkopf, <em>Yale University</em> (September 2021 - Present)</h3>
                <h3 class="text-l font-semibold mt-1 md:hidden">Prof. Rob Schoelkopf, <em>Yale University</em> <br>(September 2021 - Present)</h3>
                <p class="mt-4"> Currently assisting in the development of a new RFSoC based control system for use in RSL and <a target="_blank" class="text-mauve" href="https://qulab.eng.yale.edu/">Michel Devoret's Group</a>. As part of this I have wrote and debugged <b class="font-bold">VHDL</b> code for benchmarking communication protocols on a distributed control system. I have additionally worked on Linux system programming and investigated its interactions with low-level <b class="font-bold">FPGA</b> design. This project is a collaboration with <a target="_blank" class="text-mauve" href="https://quantumcircuits.com/">Quantum Circuits Inc</a>.<br><br>

                    Recently, I have also been working a calibration setup for the relative phase stability between DAC output channels.
                </p>
            <hr class="h-[0.1rem] border-0 bg-surface2 my-4">
                <h2 class="text-2xl font-bold">Microwave Signal Generation Nonlinearities</h2>
                <h3 class="text-l font-semibold mt-1 hidden md:block">Prof. Rob Schoelkopf, <em>Yale University</em> (October 2021 - Present)</h3>
                <h3 class="text-l font-semibold mt-1 md:hidden">Prof. Rob Schoelkopf, <em>Yale University</em> <br>(October 2021 - Present)</h3>
                <p class="mt-4">Personally investigating various techniques and limitations in modeling nonlinearities for microwave <b class="font-bold">digital to analog converters</b>. Further researched techniques in digital predistortion applied to signal generation, with preliminary results showing a <b class="font-bold">15 - 20dB improvement</b> in spurious free dynamic range.<br><br>


                    Gave a talk on this work at the <b class="font-bold">2023 APS March Meeting</b> titled "Characterization and Suppression of Nonlinearities in a Quantum Control System Employing Direct Digital Synthesis" <a target="_blank" class="text-mauve" href="https://meetings.aps.org/Meeting/MAR23/Session/K70.3">[K70.00003]</a>.
                </p>
            <hr class="h-[0.1rem] border-0 bg-surface2 my-4">
                <h2 class="text-2xl font-bold">Flux-Noise Spectroscopy 
                & Sonnet Automation</h2>
                <h3 class="text-l font-semibold mt-1 hidden md:block">Prof. Oskar Painter, <em>Caltech</em> (June 2023 - August 2023)</h3>
                <h3 class="text-l font-semibold mt-1 md:hidden">Prof. Oskar Painter, <em>Caltech</em> <br>(June 2023 - August 2023)</h3>
                <p class="mt-4">Produced architecture for measuring magnetic noise using an array of flux-tuneable qubits with varied superconducting quantum interference device (SQUID) geometries. Developed <b class="font-bold">Python</b> library to automate design, simulation, and post-processign in <b class="font-bold">Sonnet</b>. Implemented a procedural generator using my library for metamaterial Purcell filters which sped up key stages of the optimization process by more than 10x. <br><br>


                    Currently preparing to release my library as open source software.
                </p>
            <hr class="h-[0.1rem] border-0 bg-surface2 my-4">
                <h2 class="text-2xl font-bold">Real Time Surface Code Decoding</h2>
                <h3 class="text-l font-semibold mt-1 hidden md:block">Prof. Lin Zhong, <em>Yale University</em> (May 2021 - Present)</h3>
                <h3 class="text-l font-semibold mt-1 md:hidden">Prof. Lin Zhong, <em>Yale University</em> <br>(May 2021 - Present)</h3>
                <p class="mt-4"> Created algorithm to apply graph theory principles in automatically computing optimal arrangement of FPGAs for lowering latency in a distributed surface code decoding algorithm. Developed <b class="font-bold">Python</b> software to automatically generate synthesizable <b class="font-bold">Verilog</b> hardware design files to this end.<br><br>


                    <b class="font-bold">Co-authored</b> paper published as part of IEEE Quantum Week 2023 titled "Scalable Quantum Error Correction for Surface Codes using FPGA" <a target="_blank" class="text-mauve" href="https://doi.org/10.1109/QCE57702.2023.00106"> [DOI Link] </a> as well as a 2023 APS March Meeting talk on the same topic <a target="_blank" class="text-mauve" href="https://meetings.aps.org/Meeting/MAR23/Session/K71.11">[K71.00011]</a> and a poster at the IEEE 31st Annual International Symposium on Field-Programmable Custom Computing Machines <a target="_blank" class="text-mauve" href="https://doi.org/10.1109/FCCM57271.2023.00045">[DOI Link]</a>.
                </p>
            </div>
        </div>
	</body>
</html>
