const row1 = document.querySelector(".row-1");
const mercuryBtn = row1.children[0];
const venusBtn = row1.children[1];
const earthBtn = row1.children[2];
const marsBtn = row1.children[3];
const row2 = document.getElementsByClassName("row-2")[0];
const para1 = row2.children[0];
const para2 = row2.children[1];
const para3 = row2.children[2];
const btns = [mercuryBtn, venusBtn, earthBtn, marsBtn];
row1.addEventListener("click", function(e) {
    e.preventDefault();
    switch (e.target) {
        case mercuryBtn:
            resetBtns();
            setBtn(mercuryBtn)
            setPars("Mercury is the smallest planet in the Solar System and the closest to the Sun.", "Its orbit around the Sun takes 87.97 Earth days,the shortest of all the Sun's planets", "Because of Mercury's elliptical – egg-shaped – orbit, and sluggish rotation, the Sun appears to rise briefly, set, and rise again from some parts of the planet's surface. ");
            break;
        case venusBtn:
            resetBtns();
            setBtn(venusBtn)
            setPars("Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon.", "Venus is a terrestrial planet and is sometimes called Earth's sister planet because of their similar size, mass, proximity to the Sun, and bulk composition.", " It has the densest atmosphere of the four terrestrial planets, consisting of more than 96% carbon dioxide.");
            break;
        case earthBtn:
            resetBtns();
            setBtn(earthBtn)
            setPars("Earth is the third planet from the Sun and the only astronomical object known to harbour and support life.", "Earth's atmosphere consists mostly of nitrogen and oxygen.", "Earth's gravity interacts with other objects in space, especially the Moon, which is Earth's only natural satellite.");
            break;
        case marsBtn:
            resetBtns();
            setBtn(marsBtn)
            setPars("Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. ", "Mars has been explored by several uncrewed spacecraft. Mariner 4 was the first spacecraft to visit Mars; launched by NASA on 28 November 1964.", "Mars can easily be seen from Earth with the naked eye, as can its reddish coloring. ");
            break;
        default:
            break;
    }
});
const resetBtns = () => {
    for (const btn of btns) {
        btn.classList.remove("active")
    }
};
const setBtn = (btn) => {
    btn.classList.add("active");
};
const setPars = (tex1, text2, text3) => {
    para1.textContent = tex1;
    para2.textContent = text2;
    para3.textContent = text3;
};