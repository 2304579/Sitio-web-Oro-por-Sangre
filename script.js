function show(id){

    document.querySelectorAll("section").forEach(sec=>{
        sec.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}
