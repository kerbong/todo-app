// 랜덤 백그라운드 이미지의 행렬 형성
// Math.random과 Math.floor 기능을 통해 행렬 순번 랜더마이즈
// 핵심기능: array에서 랜덤한 숫자를 얻어 숫자에 따른 이미지를 body에 추가함

const images = [
  "https://images.unsplash.com/photo-1649448209661-26c5e360d540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1649254459951-ebb49d7c811b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1104&q=80",
  "https://images.unsplash.com/photo-1649337939985-208d140ccad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `${chosenImages}`;

document.body.appendChild(bgImage);
bgImage.id = "bgImage";
