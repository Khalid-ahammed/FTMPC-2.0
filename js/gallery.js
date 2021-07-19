const gallery = document.querySelectorAll(".image"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = document.querySelector(".preview-box .main-img"),
    closeIcon = document.querySelector(".icon"),
    currentImg = document.querySelector(".current-img"),
    totalImg = document.querySelector(".total-img"),
    shadow = document.querySelector(".shadow");

window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let newIndex = i;
        let clickImgIndex;
        gallery[i].querySelector(".img-icon").onclick = () => {
            clickImgIndex = newIndex;

            function preview() {
                currentImg.textContent = newIndex + 1;
                let selectedImgUrl = gallery[newIndex].querySelector("img").src;
                previewImg.src = selectedImgUrl;
            }
            const preBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");

            if (newIndex == 0) {
                preBtn.style.display = "none";
            }
            if (newIndex >= gallery.length - 1) {
                nextBtn.style.display = "none";
            }
            preBtn.onclick = () => {
                newIndex--;
                if (newIndex == 0) {
                    preview();
                    preBtn.style.display = "none";
                } else {
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = () => {
                newIndex++;
                if (newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview();
                    preBtn.style.display = "block";
                }
            }
            previewBox.classList.add("show");
            shadow.style.display = "block";
            document.body.style.overflow = "hidden";
            document.querySelector(".upper-arrow").classList.remove("sticky");
            preview();
            closeIcon.onclick = () => {
                newIndex = clickImgIndex;
                preBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.body.style.overflow = "auto";
                document.querySelector(".upper-arrow").classList.add("sticky");
            }
        }
    }
}