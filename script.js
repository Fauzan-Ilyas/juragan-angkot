var penumpang = [];
var kapasitasMaksimal = 10;

var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length >= kapasitasMaksimal) {
        alert("Angkot sudah penuh! Maksimal hanya " + kapasitasMaksimal + " penumpang.");
        return penumpang;
    }
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                alert(namaPenumpang + " sudah ada di dalam angkot");
                return penumpang;
            } else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        alert("Angkot masih kosong");
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                alert(namaPenumpang + " tidak ada di dalam angkot");
                return penumpang;
            }
        }
    }
};

// Event Listener untuk Tombol
document.getElementById("btnTambah").addEventListener("click", function () {
    var nama = document.getElementById("namaPenumpang").value;
    penumpang = tambahPenumpang(nama, penumpang);
    updateList();
});

document.getElementById("btnHapus").addEventListener("click", function () {
    var nama = document.getElementById("namaPenumpang").value;
    penumpang = hapusPenumpang(nama, penumpang);
    updateList();
});

// Fungsi untuk Mengupdate Daftar Penumpang dan Menampilkan Jumlah Penumpang
function updateList() {
    var list = document.getElementById("penumpangList");
    list.innerHTML = "";
    penumpang.forEach(function (item, index) {
        var li = document.createElement("li");
        li.textContent = item ? `${index + 1}. ${item}` : `${index + 1}. [Kosong]`;
        list.appendChild(li);
    });

    // Update jumlah penumpang
    document.getElementById("jumlahPenumpang").textContent = "Jumlah Penumpang Saat Ini: " + penumpang.filter(item => item !== undefined).length;

    // Menampilkan pesan kapasitas penuh jika sudah maksimal
    if (penumpang.filter(item => item !== undefined).length >= kapasitasMaksimal) {
        document.getElementById("jumlahPenumpang").textContent = "Angkot Penuh!";  
    }
}