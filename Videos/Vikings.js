// Adiciona um ouvinte de evento de mudança ao dropdown
document.getElementById('selecao').addEventListener('change', function () {
    // Obtém o valor da opção selecionada
    var TEMPORADA = this.value;

    /* TEMPORADA 1 */
    if (TEMPORADA === 'temporada1') {
        const EP = document.getElementById('Ep')
        const EPISODIOS = document.createElement("div")
        EPISODIOS.classList.add('eps')
        EPISODIOS.innerHTML = `
        <a href="https://photos.google.com/share/AF1QipMgJlHaacT0j6gbydVxqkMjx8AW1er7dh25HXJIlIIBfmK2Gp73BjpCDce1RlVokQ/photo/AF1QipOv3_fsftquqeameiOY2NOg-G9tGRfzFrfckPcc?key=Qm9uVjQyWE1DOUtzY3VoYUtFY1UyMWJURVlRT2h3" target='_blank'>
        Episódio 1</a>

        <a href="https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipN8dzFn90UOPZ7pT7gwey5JDkr1AJ6rkYhqLCao?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3" target='_blank'>
        Episódio 2</a>

        <a href="https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipM4yOndGSMkaScquPfkeHQAufDmObKlCIOtjpie?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3" target='_blank'>
        Episódio 3</a>

        <a href="https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipPaJVVy_8HAlTukSHbrJkP8bOyp8EHPNkGIaHrO?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3" target='_blank'>
        Episódio 4</a>

        <a href="https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipO88_Eezs4S5G9cN2ZezxDT3oSOQVYSVF32bJ6e?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3" target='_blank'>
        Episódio 5</a>

        <a href="https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipNUSVSrK1f6URxFK8pl0Dtv3BjiUswvB6babI_S?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3" target='_blank'>
        Episódio 6</a>

        <a href="https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipPOnlFxUftZiMkPvRYEtqhAJrqXSRyzse7ogAOh?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3" target='_blank'>
        Episódio 7</a>

        <a href="https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipN_5_ky-ZCwKc8TfvopUwPKMLQMmVb_8_N1l8Zs?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3" target='_blank'>
        Episódio 8</a>

        <a href="https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipPFn8OWPIy90b_xrrKSBMvqb7K4nfqHQAS_ovCe?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3" target='_blank'>
        Episódio 9</a>`
        EP.appendChild(EPISODIOS);
 
    }
});

