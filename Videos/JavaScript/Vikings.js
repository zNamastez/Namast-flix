document.getElementById('selecao').addEventListener('change', function () {

    /* EXCLUIR OS EPISÓDIOS DA PÁGINA */
    var EP = document.getElementById('episodios');
    EP.innerHTML = '';

    /* PEGA A TEMPORADA SELECIONADA */
    var TEMPORADA = this.value;

    /* Criar a div dos episódios */
    var EPISODIOS = document.createElement('div');
    EPISODIOS.classList.add('eps');
    EP.appendChild(EPISODIOS);

    /* FUNÇÃO PARA ADICIONAR OS EPISÓDIOS */
    function addEpisode(link, episodio) {
        var LinkEpisodio = document.createElement('a');
        LinkEpisodio.href = link;
        LinkEpisodio.target = '_blank';
        LinkEpisodio.textContent = 'Episódio ' + episodio;
        EPISODIOS.appendChild(LinkEpisodio);
    }

    /* TEMPORADAS E EPISODIOS */
    /* TEMPORADA 1 */
    if (TEMPORADA === 'temporada1') {
        addEpisode('https://photos.google.com/share/AF1QipMgJlHaacT0j6gbydVxqkMjx8AW1er7dh25HXJIlIIBfmK2Gp73BjpCDce1RlVokQ/photo/AF1QipOv3_fsftquqeameiOY2NOg-G9tGRfzFrfckPcc?key=Qm9uVjQyWE1DOUtzY3VoYUtFY1UyMWJURVlRT2h3', 1);
        addEpisode('https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipN8dzFn90UOPZ7pT7gwey5JDkr1AJ6rkYhqLCao?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3', 2);
        addEpisode('https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipM4yOndGSMkaScquPfkeHQAufDmObKlCIOtjpie?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3', 3);
        addEpisode('https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipPaJVVy_8HAlTukSHbrJkP8bOyp8EHPNkGIaHrO?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3', 4);
        addEpisode('https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipO88_Eezs4S5G9cN2ZezxDT3oSOQVYSVF32bJ6e?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3', 5);
        addEpisode('https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipNUSVSrK1f6URxFK8pl0Dtv3BjiUswvB6babI_S?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3', 6);
        addEpisode('https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipPOnlFxUftZiMkPvRYEtqhAJrqXSRyzse7ogAOh?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3', 7);
        addEpisode('https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipN_5_ky-ZCwKc8TfvopUwPKMLQMmVb_8_N1l8Zs?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3', 8);
        addEpisode('https://photos.google.com/share/AF1QipNZc72gcOdeyRyD_t7RXtiKV_4kuDw6_jmj676cyUeuHv8kMVi-hPV4gyXC8OknyQ/photo/AF1QipPFn8OWPIy90b_xrrKSBMvqb7K4nfqHQAS_ovCe?key=U1lBaE1EenE2VUNtRmRJaUZKdHhCSlJjRE9ISkJ3', 9);
    }
    /* TEMPORADA 2 */
    else if (TEMPORADA === 'temporada2') {
        addEpisode('https://photos.google.com/share/AF1QipNRq9wPiHcblS4iB83Q-Eol_sLhnc0M7zCOORGQ__jdyHnQJ_xKCx6VzdwtwV4zfw/photo/AF1QipNfO_Ywh4S3ZJPfZiXUSppKLq1Y67ec5VXBUZe_?key=YmVhd3NDeVRVREVsb2tDY3o3dWkxWDlzdUNxWkRB', 1);
        addEpisode('https://photos.google.com/share/AF1QipNRq9wPiHcblS4iB83Q-Eol_sLhnc0M7zCOORGQ__jdyHnQJ_xKCx6VzdwtwV4zfw/photo/AF1QipOOnKyKB43fXx8SJ1DRqM-aYn2zCQ5DccL6-wsm?key=YmVhd3NDeVRVREVsb2tDY3o3dWkxWDlzdUNxWkRB', 2);
        addEpisode('https://photos.google.com/share/AF1QipNRq9wPiHcblS4iB83Q-Eol_sLhnc0M7zCOORGQ__jdyHnQJ_xKCx6VzdwtwV4zfw/photo/AF1QipNGiiOyhixYjUBnaZnaH03fxjSENlIWoqQPMB6x?key=YmVhd3NDeVRVREVsb2tDY3o3dWkxWDlzdUNxWkRB', 3);
        addEpisode('https://photos.google.com/share/AF1QipNRq9wPiHcblS4iB83Q-Eol_sLhnc0M7zCOORGQ__jdyHnQJ_xKCx6VzdwtwV4zfw/photo/AF1QipMSXA_dWbXvNy2zRr6nvan7S5cQrE775fO-2SvV?key=YmVhd3NDeVRVREVsb2tDY3o3dWkxWDlzdUNxWkRB', 4);
        addEpisode('https://photos.google.com/share/AF1QipNRq9wPiHcblS4iB83Q-Eol_sLhnc0M7zCOORGQ__jdyHnQJ_xKCx6VzdwtwV4zfw/photo/AF1QipOqn3bmlPnDcUAO_bHzmXK-Q6gvs9YOALHgPGRz?key=YmVhd3NDeVRVREVsb2tDY3o3dWkxWDlzdUNxWkRB', 5);
        addEpisode('https://photos.google.com/share/AF1QipNRq9wPiHcblS4iB83Q-Eol_sLhnc0M7zCOORGQ__jdyHnQJ_xKCx6VzdwtwV4zfw/photo/AF1QipMMdN9JFKltWRbYjBaTyTssepdHnEzQa9vMWOIX?key=YmVhd3NDeVRVREVsb2tDY3o3dWkxWDlzdUNxWkRB', 6);
        addEpisode('https://photos.google.com/share/AF1QipNRq9wPiHcblS4iB83Q-Eol_sLhnc0M7zCOORGQ__jdyHnQJ_xKCx6VzdwtwV4zfw/photo/AF1QipPsM48WRL8R3TEGSI954uDXR0FUqIzfHM7TVRqB?key=YmVhd3NDeVRVREVsb2tDY3o3dWkxWDlzdUNxWkRB', 7);
        addEpisode('https://photos.google.com/share/AF1QipNRq9wPiHcblS4iB83Q-Eol_sLhnc0M7zCOORGQ__jdyHnQJ_xKCx6VzdwtwV4zfw/photo/AF1QipOBN9FWCHKBUPlvh4uSs_ET50uuelVeOaYHkqOd?key=YmVhd3NDeVRVREVsb2tDY3o3dWkxWDlzdUNxWkRB', 8);
        addEpisode('https://photos.google.com/share/AF1QipNRq9wPiHcblS4iB83Q-Eol_sLhnc0M7zCOORGQ__jdyHnQJ_xKCx6VzdwtwV4zfw/photo/AF1QipPtnyzGLXMFYDevHD-hQivisyD96dAYk1BS5gya?key=YmVhd3NDeVRVREVsb2tDY3o3dWkxWDlzdUNxWkRB', 9);
        addEpisode('https://photos.google.com/share/AF1QipNRq9wPiHcblS4iB83Q-Eol_sLhnc0M7zCOORGQ__jdyHnQJ_xKCx6VzdwtwV4zfw/photo/AF1QipO1Et4xG4ZAVY2bApdVh3JyDEOmHOZjo-KSqHJL?key=YmVhd3NDeVRVREVsb2tDY3o3dWkxWDlzdUNxWkRB', 10);
    }
    /* TEMPORADA 3 */
    else if (TEMPORADA === 'temporada3') {
        addEpisode('https://photos.google.com/share/AF1QipPIJ1LEvm_gaWXabWgZfzTwQcjxX1zggTEMImE9xMUKH9liU6-sx988fHKW9mZmsg/photo/AF1QipPjh2pBMdEBV9iRPWK5qB3Z_247NcqAgjuLyNDo?key=NFpEc0pIZmNpZXhfeG15OUR5ZnE5X1hYUzBLZHBB', 1);
        addEpisode('https://photos.google.com/share/AF1QipPIJ1LEvm_gaWXabWgZfzTwQcjxX1zggTEMImE9xMUKH9liU6-sx988fHKW9mZmsg/photo/AF1QipO7ooBE0NFBCgfxrCq1Eyvxu0HzjyS_kwll8eIu?key=NFpEc0pIZmNpZXhfeG15OUR5ZnE5X1hYUzBLZHBB', 2);
        addEpisode('https://photos.google.com/share/AF1QipPIJ1LEvm_gaWXabWgZfzTwQcjxX1zggTEMImE9xMUKH9liU6-sx988fHKW9mZmsg/photo/AF1QipM_T3xCGEN4qA4Fe_Myd2dbUIZa1BYf-8-YyAA-?key=NFpEc0pIZmNpZXhfeG15OUR5ZnE5X1hYUzBLZHBB', 3);
        addEpisode('https://photos.google.com/share/AF1QipPIJ1LEvm_gaWXabWgZfzTwQcjxX1zggTEMImE9xMUKH9liU6-sx988fHKW9mZmsg/photo/AF1QipNvZezZ_PCJZFX4dHuZWqsLagpN_iTzLHimCS2L?key=NFpEc0pIZmNpZXhfeG15OUR5ZnE5X1hYUzBLZHBB', 4);
        addEpisode('https://photos.google.com/share/AF1QipPIJ1LEvm_gaWXabWgZfzTwQcjxX1zggTEMImE9xMUKH9liU6-sx988fHKW9mZmsg/photo/AF1QipPgN7TvqlifqA0jQQ1XSFjmzAwDcAoXOkX1SOvt?key=NFpEc0pIZmNpZXhfeG15OUR5ZnE5X1hYUzBLZHBB', 5);
        addEpisode('https://photos.google.com/share/AF1QipPIJ1LEvm_gaWXabWgZfzTwQcjxX1zggTEMImE9xMUKH9liU6-sx988fHKW9mZmsg/photo/AF1QipP2bMKyk1afuc0rywocetsJr8rzwPoMUMr0ZilE?key=NFpEc0pIZmNpZXhfeG15OUR5ZnE5X1hYUzBLZHBB', 6);
        addEpisode('https://photos.google.com/share/AF1QipPIJ1LEvm_gaWXabWgZfzTwQcjxX1zggTEMImE9xMUKH9liU6-sx988fHKW9mZmsg/photo/AF1QipN0EP62hpcFEU0pp0vD-OlwyGG2M1v_zV7do2nq?key=NFpEc0pIZmNpZXhfeG15OUR5ZnE5X1hYUzBLZHBB', 7);
        addEpisode('https://photos.google.com/share/AF1QipPIJ1LEvm_gaWXabWgZfzTwQcjxX1zggTEMImE9xMUKH9liU6-sx988fHKW9mZmsg/photo/AF1QipMT7dCQlqfOL8GKhoCjLRPqG04e4GqmcK7u2V4n?key=NFpEc0pIZmNpZXhfeG15OUR5ZnE5X1hYUzBLZHBB', 8);
        addEpisode('https://photos.google.com/share/AF1QipPIJ1LEvm_gaWXabWgZfzTwQcjxX1zggTEMImE9xMUKH9liU6-sx988fHKW9mZmsg/photo/AF1QipMSpu1sTJZt71HETxdK12g1ehQknHsFRJM8eGh-?key=NFpEc0pIZmNpZXhfeG15OUR5ZnE5X1hYUzBLZHBB', 9);
        addEpisode('https://photos.google.com/share/AF1QipPIJ1LEvm_gaWXabWgZfzTwQcjxX1zggTEMImE9xMUKH9liU6-sx988fHKW9mZmsg/photo/AF1QipPYGuhA6vtwyD1p80arr6qk-9ozkuAz1iV-K0j4?key=NFpEc0pIZmNpZXhfeG15OUR5ZnE5X1hYUzBLZHBB', 10);
    }

    /* TEMPORADA 4 */
    else if (TEMPORADA === 'temporada4') {
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP01', 1);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP02', 2);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP03', 3);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP04', 4);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP05', 5);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP06', 6);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP07', 7);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP08', 8);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP09', 9);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP10', 10);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP11', 12);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP12', 13);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP13', 14);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP14', 15);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP15', 16);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP16', 17);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP17', 18);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP18', 19);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP19', 20);
        addEpisode('https://sinalpublico.com/player3/server11hlb.php?vid=VKGST04EP20', 21);



    }

    /* TEMPORADA 5 */
    else if (TEMPORADA === 'temporada5') {
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipPqKpK3xoa3R2BH5mzU8ZUt8nzA5BdGNdqxH7hd?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 1 + ' e ' + 2);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipP7G_8Ha9sJ1uolbQCz4E-wlXIELiG_syF2n-mj?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 3);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipPJPp2eOUB69nIPPqRHnEsGw5aj3qV_9nSTTnux?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 4);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipMZjkvxmE-O46asVIdDBB5gjQJXRGnRyVUq849E?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 5);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipMUsAJnbAUiJTJgVc3HzEzi0t40gv7NjP5doiUK?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 6);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipOysqZqAdJLSNMh2ypEFcuyAAWTi7QXppT130_N?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 7);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipORw1Vm3CUhlTjieh6OU4DP0-1s63tQEugM9NRO?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 8);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipM92Lg0nL1f_ZmKMmftGfDLo3mvj4xptOzjN30-?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 9);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipMSrryAVZFYrmaD8DNDcFQ0RjU5or88ywhuYdZ4?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 10);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipMCNjmaNh6M0WGaTr3jaZA6XuH25tRYDUlkcluV?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 11);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipN5O1NFgy1eR0J-IwsA_qko36Qmgi0p29stpmCx?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 12);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipOtMpbulwEHFwNU1YcI0_Dk2saneNQVhdfluxVl?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 13);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipML6-NjjODIJ-FBeJGTXnMWcR15fGNGtIUhScLu?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 14);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipMEDB5MrrzQxhOmYxu7jKOrfm1a5P-o7jquYXt2?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 15);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipMNzm0k7M3pGu1yVNlzaqbSrRQ6-P2FNuw-ECg0?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 16);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipPVXqKW743xae59DV02mKgvuaYWQdEfVb_Xi_Hv?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 17);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipPINaNrb9WvSyU_LLpAOnBI37EDUS2xyX-21Ans?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 18);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipNjRPFoPVP_fIPt_w-e8nnURrH9EWosV1u91cfi?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 19);
        addEpisode('https://photos.google.com/share/AF1QipPX3DlY2hjwh9b4K2-W16EJPH3xa1ASxo592RvrON-ygqGR96-7UORKG7i9rmltaw/photo/AF1QipN5lBewvflguD5FD6-j9sJysen9ifEYTe9Jy_fk?key=X0xmQkxZR2dvYlAyV2NIT2Y4UHVTNEhkTHlLb0Z3', 20);
    }

    /* TEMPORADA 6 */

    else if (TEMPORADA === 'temporada6') {

        addEpisode('https://drive.google.com/file/d/13ge0PWnG3FQlqdprrT1u25H8jvlG_eJx/view?t=29', 1)
        addEpisode('https://drive.google.com/file/d/1OHZSCd3ZYwwR6pXZcHm2L2iPBsxqRj5H/view?usp=drive_link', 2)
        addEpisode('https://drive.google.com/file/d/1YKgSrzIhLM8DT-52K6lSfUWI6kwPnaSP/view?usp=drive_link', 3)
        addEpisode('https://drive.google.com/file/d/1g0vc2HiwFAtMeo6gS4G2n_HlSI-Gw1rO/view?usp=drive_link', 4)
        addEpisode('https://drive.google.com/file/d/1DIY2wggxCZuBWiQ9NW695EXBduVNgcIP/view?usp=drive_link', 5)
        addEpisode('https://drive.google.com/file/d/1uCbYPgJEg-8YA_IUAta8TcfUXTT4sMma/view?usp=drive_link', 6)
        addEpisode('https://drive.google.com/file/d/1EpbxHFLTKoXAuWi6IDKArbvYORr1Yl21/view?usp=drive_link', 7)
        addEpisode('https://drive.google.com/file/d/1ZQ4Z8iV59i2H3Ozxx8KC8GDK1YCdBwPp/view?usp=drive_link', 8)
        addEpisode('https://drive.google.com/file/d/1S6e-caHQbkzpGiDckOFyS8lHH_9HtOCe/view?usp=drive_link', 9)
        addEpisode('https://drive.google.com/file/d/1pIZ2khODFxlu9gW5h2QTSSf4WNi0BmEr/view?usp=drive_link', 10)
        addEpisode('https://drive.google.com/file/d/1IJWO7vtutkbZX19BWAxkubqnz1ftqrG1/view?usp=drive_link', 11)
        addEpisode('https://drive.google.com/file/d/10tTPHbKjl8q08TLUB6G5sGrViPg5KgHh/view?usp=drive_link', 12)
        addEpisode('https://drive.google.com/file/d/1ZoZbhMEiyHUzerL2RfhYmosYlNoPYfqc/view?usp=drive_link', 13)
        addEpisode('https://drive.google.com/file/d/1JPW6Y828loHKmBphLbXS0kzQcmDwkXiH/view?usp=drive_link', 14)
        addEpisode('https://drive.google.com/file/d/13EbwgyWLxxDIrjPK-mPchoTHI-FruxQw/view?usp=drive_link', 15)
        addEpisode('https://drive.google.com/file/d/134a5ChlRpMuCquIKQQXXz9A36F1qLpiY/view?usp=drive_link', 16)
        addEpisode('https://drive.google.com/file/d/1_2jHIea4Wz8EyyJYRednyKUOOinYnWco/view?usp=drive_link', 17)
        addEpisode('https://drive.google.com/file/d/1vX1CQ_DGSP9O8xp5PXD6VtRCpJ2rTVZs/view?usp=drive_link', 18)
        addEpisode('https://drive.google.com/file/d/1VfArvEHtyEI3ARR69Hjo0s6Lz9fFild_/view?usp=drive_link', 19)
        addEpisode('https://drive.google.com/file/d/1N1q47vyhW_O_AQKKQ-FTA4qoziekl9oG/view?usp=drive_link', 20)
    }
});
