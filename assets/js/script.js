var probabilitasClassBertahan = 45/84;
var probabilitasClassMd = 39/84;
var l_bertahan = 39/45;
var p_bertahan = 6/45;
var l_md = 36/39;
var p_md = 3/39;
var masa_studi_2_bertahan = 25/45;
var masa_studi_4_bertahan = 20/45;
var masa_studi_2_md = 21/39;
var masa_studi_4_md = 18/39;
var ipk_1_2_bertahan = 2/45;
var ipk_2_3_bertahan = 14/45;
var ipk_3_4_bertahan = 29/45;
var ipk_1_2_md = 9/39;
var ipk_2_3_md = 17/39;
var ipk_3_4_md = 13/39;

document.getElementById("bertahan").innerText = probabilitasClassBertahan;
document.getElementById("md").innerText = probabilitasClassMd;
document.getElementById("l_bertahan").innerText = l_bertahan;
document.getElementById("p_bertahan").innerText = p_bertahan;
document.getElementById("l_md").innerText = l_md;
document.getElementById("p_md").innerText = p_md;
document.getElementById("masa_studi_2_bertahan").innerText = masa_studi_2_bertahan;
document.getElementById("masa_studi_4_bertahan").innerText = masa_studi_4_bertahan;
document.getElementById("masa_studi_2_md").innerText = masa_studi_2_md;
document.getElementById("masa_studi_4_md").innerText = masa_studi_4_md;
document.getElementById("ipk_1_2_bertahan").innerText = ipk_1_2_bertahan;
document.getElementById("ipk_2_3_bertahan").innerText = ipk_2_3_bertahan;
document.getElementById("ipk_3_4_bertahan").innerText = ipk_3_4_bertahan;
document.getElementById("ipk_1_2_md").innerText = ipk_1_2_md;
document.getElementById("ipk_2_3_md").innerText = ipk_2_3_md;
document.getElementById("ipk_3_4_md").innerText = ipk_3_4_md;

function hitung() {
    var data_jk = document.getElementById("jk");
    var data_ms = document.getElementById("ms");
    var data_ipk = document.getElementById("ipk");

    var jk = data_jk.value;
    var ms = data_ms.value;
    var ipk = data_ipk.value;

    function kondisiOuput() {
        document.getElementById("k_bertahan").innerText = bertahan;
        document.getElementById("k_md").innerText = md;

        if (bertahan > md){
            document.getElementById("hasil").innerText = "Hasil Prediksi Menyatakan Mahasiswa ini Bertahan";
        } else {
            document.getElementById("hasil").innerText = "Hasil Prediksi Menyatakan Mahasiswa ini Mengundurkan Diri";
        }
    }

    if (jk.toUpperCase() == 'L'){
        if (ms == 2) {
            if (ipk < 2) {
                bertahan=l_bertahan*masa_studi_2_bertahan*ipk_1_2_bertahan*probabilitasClassBertahan;
                md=l_md*masa_studi_2_md*ipk_1_2_md*probabilitasClassMd;
                kondisiOuput();
            } else if (ipk < 3) {
                bertahan=l_bertahan*masa_studi_2_bertahan*ipk_2_3_bertahan*probabilitasClassBertahan;
                md=l_md*masa_studi_2_md*ipk_2_3_md*probabilitasClassMd;
                kondisiOuput();
            } else if (ipk <= 4) {
                bertahan=l_bertahan*masa_studi_2_bertahan*ipk_3_4_bertahan*probabilitasClassBertahan;
                md=l_md*masa_studi_2_md*ipk_3_4_md*probabilitasClassMd;
                kondisiOuput();
            }
        } else if (ms == 4) {
            if (ipk < 2) {
                bertahan=l_bertahan*masa_studi_4_bertahan*ipk_1_2_bertahan*probabilitasClassBertahan;
                md=l_md*masa_studi_4_md*ipk_1_2_md*probabilitasClassMd;
                kondisiOuput();
            } else if (ipk < 3) {
                bertahan=l_bertahan*masa_studi_4_bertahan*ipk_2_3_bertahan*probabilitasClassBertahan;
                md=l_md*masa_studi_4_md*ipk_2_3_md*probabilitasClassMd;
                kondisiOuput();
            } else if (ipk <= 4) {
                bertahan=l_bertahan*masa_studi_4_bertahan*ipk_3_4_bertahan*probabilitasClassBertahan
                md=l_md*masa_studi_4_md*ipk_3_4_md*probabilitasClassMd
                kondisiOuput();
            }
        }
    } else if (jk.toUpperCase() == 'P') {
        if (ms == 2) {
            if (ipk < 2) {
                bertahan=p_bertahan*masa_studi_2_bertahan*ipk_1_2_bertahan*probabilitasClassBertahan;
                md=p_md*masa_studi_2_md*ipk_1_2_md*probabilitasClassMd;
                kondisiOuput();
            } else if (ipk < 3) {
                bertahanpl_bertahan*masa_studi_2_bertahan*ipk_2_3_bertahan*probabilitasClassBertahan;
                md=p_md*masa_studi_2_md*ipk_2_3_md*probabilitasClassMd;
                kondisiOuput();
            } else if (ipk <= 4) {
                bertahan=p_bertahan*masa_studi_2_bertahan*ipk_3_4_bertahan*probabilitasClassBertahan;
                md=p_md*masa_studi_2_md*ipk_3_4_md*probabilitasClassMd;
                kondisiOuput();
            }
        } else if (ms == 4) {
            if (ipk < 2) {
                bertahan=p_bertahan*masa_studi_4_bertahan*ipk_1_2_bertahan*probabilitasClassBertahan;
                md=p_md*masa_studi_4_md*ipk_1_2_md*probabilitasClassMd;
                kondisiOuput();
            } else if (ipk < 3) {
                bertahan=p_bertahan*masa_studi_4_bertahan*ipk_2_3_bertahan*probabilitasClassBertahan;
                md=p_md*masa_studi_4_md*ipk_2_3_md*probabilitasClassMd;
                kondisiOuput();
            } else if (ipk <= 4) {
                bertahan=p_bertahan*masa_studi_4_bertahan*ipk_3_4_bertahan*probabilitasClassBertahan
                md=p_md*masa_studi_4_md*ipk_3_4_md*probabilitasClassMd
                kondisiOuput();
            }
        }
    }else {
        document.getElementById("hasil").innerText = "Kesalahan Input!";
    }
}

function tentangSaya(){
    alert('\nNama: Muhammad Alfyando\nNPM: 19081010037\nKelas: Statistik Komputasi Kelas D');
}