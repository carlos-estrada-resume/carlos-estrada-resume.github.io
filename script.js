window.addEventListener("scroll", () => {

    if (window.scrollY > 720) return;
  
    if (window.scrollY < 500) {
  
      document.getElementById("cap1").style.transform = `translateY(-${window.scrollY / 20}%)`;
      document.getElementById("skyNight").style.transform = `translateY(-${window.scrollY / 30}%)`;
      document.getElementById("cap2").style.transform = `translateY(-${window.scrollY / 100}%)`;
  
      document.getElementById("cap3").style.transform = `translateY(${window.scrollY / 30}%)`;
      document.getElementById("cap4").style.transform = `translateY(${window.scrollY / 16}%)`;
      document.getElementById("cap5").style.transform = `translateY(${window.scrollY / 12}%)`;
      document.getElementById("cap6").style.transform = `translateY(${window.scrollY / 8}%)`;
  
      document.getElementById("sun").style.transform = `translateX(-${window.scrollY * 2}%) translateY(${window.scrollY * 1.2}%)`;
    }
  
  
  
    document.getElementById("cap1n").style.transform = `translateY(${window.scrollY / 7}%)`;  
    document.getElementById("cap2n").style.transform = `translateY(${window.scrollY / 17}%)`;
    document.getElementById("cap3n").style.transform = `translateY(${window.scrollY / 40}%)`;
    document.getElementById("cap4n").style.transform = `translateY(-${window.scrollY / 80}%)`;
    document.getElementById("cap5n").style.transform = `translateY(-${window.scrollY / 25}%)`;
    document.getElementById("cap6n").style.transform = `translateY(-${window.scrollY / 10}%)`;
    document.getElementById("moon").style.transform = `translateX(${window.scrollY * 1.5}%)`;
  
    console.log(window.scrollY)
  
  })