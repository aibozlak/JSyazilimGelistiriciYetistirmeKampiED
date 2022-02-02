/* 
    1 : Girdiğimiz sayılardan (varsa) asal olan(lar)ı veren fonksiyon ödevi :
*/

function asalMi(x){
    let y = Number(x);

    if (Number.isInteger(y)){
        if (y == 2){
            return true;
        } else if(y > 2){
            let bolenler = [];
            // bolenler dizisiyle kastedilen:
            // 1'den buyuk girilen sayıdan küçük tamsayı bölenler
            for(let i = 2; i < y; i++){
                if (y % i == 0){
                    bolenler.push(i);
                }
            }
            
            if (bolenler.length == 0){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function asallariYaz(...numbers){
    let asalOlanlar =[];
    for (let j = 0; j < numbers.length; j++){
        if (asalMi(numbers[j]) == true){
            asalOlanlar.push(numbers[j]);
        }
    }
    if (asalOlanlar.length != 0){
        console.log(asalOlanlar);
    } else {
        console.log("Girdiğiniz sayılarda asal sayı yok.")
    }
}



/*
    2 : Girilen iki sayının arkadaş olup olmadığını veren fonksiyon ödevi : 

    (Wikipedia TR sayfasındaki tanımı baz aldım)
*/

function arkadasMi(n1,n2){

    let toplam1 = 0;  // n1'in kendisi hariç pozitif tamsayı bölenleri toplamı için
    let toplam2 = 0;  // n2'nin kendisi hariç pozitif tamsayı bölenleri toplamı için
    for (let i = 1; i < n1; i++){
        if (n1 % i == 0){
            toplam1 = toplam1 + i;
        }
    }
    for (let j = 1; j < n2; j++){
        if (n2 % j == 0){
            toplam2 = toplam2 + j;
        }
    }

    if (toplam1 == n2 && toplam2 == n1){ //---> Arkadaş sayı koşulu
        return true;
    } else {
        return false;
    }
}


/*
    3 : 1000'e kadarki tüm mükemmel sayıları listeleyen program ödevi
*/

function mukemmelMi(x){
    let y = Number(x);
    if (Number.isInteger(y) == true && y > 2){
        let toplam = 0;
        for (let k = 1; k < y; k++){ // Girilen sayı hariç 1'den (1 dahil) bu sayıya kadarki sayıları tarayacak
            if (y % k == 0){  // k y'yi (Girilen sayıyı) bölüyor   <=>  y'nin k ile bölümünden kalan 0 
                toplam = toplam + k;
            }
        }

        if (toplam == y){ // Mükemmel sayı olma koşulu
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const mukemmelSayilar1000eKadar = []; 
for (let t = 2; t <= 1000; t++){ // 1000 sayısını da dahil ettim
    if (mukemmelMi(t) == true){
        mukemmelSayilar1000eKadar.push(t);
    }
}
// consolda diziyi çağırdım 3 tane çıktı : [6, 28, 496]



/*
    4 : 1000'e kadarki tüm asal sayıları listeleyen program ödevi
*/

// 1. ödevde asalMi() fonksiyonu tanımlamıştım, bunu kullanacağım: 

const asalSayilar1000eKadar = [];
for (let n = 2; n < 1000; n++){
    if (asalMi(n) == true){
        asalSayilar1000eKadar.push(n);
    }
}
// consolda asalSayilar1000eKadar dizisini çağırdım, 168 elemanlı bir dizi : 
// (168) [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, ....]