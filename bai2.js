function xepLoai(diemToan, diemTA, diemVan) {
    let result = (diemToan + diemTA + diemVan)/3;
    let xepHang = "";
    if (result<5){
        xepHang = "Khong dat";
    } else if (result<8) {
        xepHang = "Dat";
    } else {
        xepHang = "Tot";
    }
    return xepHang;
}


console.log(xepLoai(0,5,2));