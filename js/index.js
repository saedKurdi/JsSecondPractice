// 1. Valyuta konvertorunu yaz. İstifadəçi ABŞ dolları miqdarını daxil edir, çevirmək istədiyi
// valyutu seçir: EUR, UAH və ya AZN, və cavab olaraq müvafiq məbləği alır.
// function convertDollar(){
//     alert("Welcome to valute convertor !");
//     let dollarAmount = Number(prompt("Enter dollar amount to convert :"));
//     let toValute = prompt("Enter valute which you want to convert : ");
//     toValute = toValute.toLocaleUpperCase();
//     switch(toValute){
//         case "EUR":
//             alert(`${dollarAmount}$ = ${dollarAmount * 0.9}€`);
//             break;
//         case "UAH":
//             alert(`${dollarAmount}$ = ${dollarAmount * 39}₴`);
//             break;
//         case "AZN":
//             alert(`${dollarAmount}$ = ${dollarAmount * 1.7}₼`);
//             break;
//         default : 
//             alert("You can only input 3 valutes : 'EUR;UAH;AZN' !");
//             break;
//     }
// }

// convertDollar();



// 2. İstifadəçidən alış-verişin məbləğini soruş və endirimlə ödəmə məbləğini göstər: 200-dən
// 300-ə qədər - 3% endirim, 300-dən 500-ə qədər - 5% endirim, 500-dən yuxarı - 7% endirim.
// function task2(){
//     let shoppingCash = prompt("Enter shopping amount with cash : ");
//     if(shoppingCash >= 200 && shoppingCash < 300){
//         shoppingCash -= shoppingCash * 3 / 100;
//     }else if(shoppingCash >= 300 && shoppingCash < 500){
//         shoppingCash -= shoppingCash * 5 / 100;
//     }else if(shoppingCash >= 500){
//         shoppingCash -= shoppingCash * 7 / 100;
//     }
//     alert(`Your cash with discount is ${shoppingCash} manats .`);
// }

// task2();



// 3. İstifadəçidən dairənin perimetri və kvadratın perimetri soruş və belə bir dairənin göstərilən
// kvadrata sığacağını müəyyənləşdir.
// function task3(){
//     let circleP = prompt("Enter circle perimeter : ");
//     let squareP = prompt("Enter square perimeter : ");
//     if(circleP <= squareP){
//         alert("Yes !");
//     }else{
//         alert("No !");
//     }
// }

// task3();



// 4. İstifadəçiyə 3 sual ver, hər bir sual üç cavab variantı ilə. Hər doğru cavab üçün 2 bal verilir.
// Suallardan sonra istifadəçiyə qazanılan bələdçi balı göstər.
// function task4(){
//     let question1WithVariants = `
// How many colors are there in Azerbaijani flag ?
// A) 5
// B) 2
// C) 3
// D) 1`;
//     let question2WithVariants = `
// Capital of Italy : 
// A) Roma
// B) Baku
// C) Moskow
// D) Tbilisi`;
//     let question3WithVariants = `
// Who was John Wick ? 
// A) Software Developer
// B) Referee
// C) Serial Killer
// D) Policeman`;

//     let arr = [question1WithVariants,question2WithVariants,question3WithVariants];
//     let answers = ['B','A','C'];
//     let totalPoints = 0;
//     arr.forEach((question,index)=>{
//         let a = prompt(question).toLocaleUpperCase();
//         if(a == answers[index]){
//             totalPoints += 2;
//         }
//     });
//     alert(`Total points received : ${totalPoints}`);
// }

// task4();



// 5. Tarixi soruş (gün, ay, il) və onun ardınca gələn tarixi göstər. Növbəti ay, il və ya dövr
// keçidini nəzərə alın, həmçinin dövr varlığını.




// 6. Həftə gününün çıxışını dövrə salın: "Həftə günü. Növbəti günü görmək istəyirsiniz?" və
// istifadəçi OK düyməsini basana qədər belə davam edir.
// function task6(){
//     let arr = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
//     let index = 0;
//     let answer = confirm("Do u want to see next day ? ");
//     while(answer){
//         let answer = confirm("Do u want to see next day ? ");
//         alert(`Today's ${arr[index]} !`);
//         index += 1;
//         if(!answer || index == 7){
//             alert("Loop has end ...");
//             break;
//         }
//     }
    
// }

// task6();



// 7. Bütün 2-dən 9-a qədər rəqəmlərin vurma cədvəlini göstərin. Hər rəqəmi 1-dən 10-a qədər
// rəqəmlərlə vurun.
// function task7(){
//     for(let i = 2 ; i < 10 ; i += 1){
//         for(let k = 1 ; k < 11 ; k += 1){
//             console.log(`${i} * ${k} = ${i * k}`);
//         }
//     }
// }

// task7();


// —-----------------------------------
// Avtomobil haqqında məlumatları təsvir edən obyekt yaradın (istehsalçı, model, buraxılış ili,
// orta sürət), və bu obyekt ilə işləmək üçün aşağıdakı funksiyaları yaradın.
// 1. Avtomobil haqqında məlumatları ekrana çıxaran funksiya.
// 2. Verilən məsafəni orta sürətlə qət edərkən lazım olan zamanı hesablamaq üçün funksiya
// yaradın. Sürət əsasında hər 4 saatda bir sürücünün 1 saatlik istirahət etməsinin vacib
// olduğunu nəzərə alın.

// class Car{
//     // constructor : 
//     constructor(vendor,model,year,avgSpeed){
//         this.setVendor(vendor);
//         this.setModel(model);
//         this.setYear(year);
//         this.setAverageSpeed(avgSpeed);
//     }


//     // private fields : 
//     #vendor;
//     #model;
//     #year;
//     #avgSpeed;


//     // setters : 
//     setVendor(vendor){
//         this.#vendor = vendor;
//     }

//     setModel(model){
//         this.#model = model;
//     }
    
//     setYear(year){
//         this.#year = year;
//     }

//     setAverageSpeed(speed){
//         this.#avgSpeed = speed;
//     }


//     // getters : 
//     getVendor() {
//         return this.#vendor;
//     }

//     getModel(){
//         return this.#model;
//     }

//     getYear(){
//         return this.#year;
//     }

//     getAverageSpeed(){
//         return this.#avgSpeed;
//     }


//     // other : 
//     toString(){
//         return `Vendor : ${this.getVendor()}\nModel : ${this.getModel()}\nYear : ${this.getYear()}\nAverage Speed : ${this.getAverageSpeed()} km/h`;
//     }
// }

// let car1 = new Car('Mercedes',"s-class",2018,100);
// let car2 = new Car('BMW','m5-f90',2020,120);

// console.log('car1 :>> ', car1.toString());
// console.log('car2 :>> ', car2.toString());