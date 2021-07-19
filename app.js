//automatic
(() => {
    const navToggler = document.querySelector(".nav-toggler"),
        navMenu = document.querySelector(".nav-menu"),
        menuOverLay = document.querySelector(".menu-overlay"),
        mediaSize = 991;

    window.addEventListener("load", function() {
        //page Loader
        document.querySelector(".page-loader").classList.add("fade-out");
        setTimeout(function() {
            document.querySelector(".page-loader").style.display = "none";
        }, 700);
        //animation on scroll
        AOS.init();
    });


    navToggler.addEventListener("click", () => {
        toggleNav();
        // collapseSubMenu();
    });
    menuOverLay.addEventListener("click", () => {
        toggleNav();
        // collapseSubMenu();
    });

    //controlling page off set
    window.addEventListener("scroll", () => {
        if (this.pageYOffset > 120) {
            document.querySelector(".upper-arrow").classList.add("sticky");
        } else {
            document.querySelector(".upper-arrow").classList.remove("sticky");
        }
    });

    //functions    
    function toggleNav() {
        navToggler.classList.toggle("toggle");
        navMenu.classList.toggle("toggle");
        menuOverLay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) => {
        if (event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
            //prevent default anchor click behaviour
            event.preventDefault();

            const menuItemHasChild = event.target.parentElement;
            //if menu item--has child is already active,collapse it
            if (menuItemHasChild.classList.contains("active")) {
                collapseSubMenu();
            } else {
                //collapse existing expanded menuItemHasChild
                if (navMenu.querySelector(".menu-item-has-child.active")) {
                    collapseSubMenu();
                }
                //expand new menuItemHasChild
                menuItemHasChild.classList.add("active");
                const subMenu = menuItemHasChild.querySelector(".sub-menu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        }
    });

    function collapseSubMenu() {
        navMenu.querySelector(".menu-item-has-child.active .sub-menu").removeAttribute("style");
        navMenu.querySelector(".menu-item-has-child.active").classList.remove("active");
    }
    const resizeFix = () => {
        //if nav menu is open clos it
        if (navMenu.classList.contains("toggle")) {
            toggleNav();
        }
        //if menu ItemHas Child is expanded, collapse it
        if (navMenu.querySelector(".menu-item-has-child.active")) {
            collapseSubMenu();
        }
    }
    window.addEventListener("resize", () => {
        if (this.innerWidth > mediaSize) {
            resizeFix();
        }
    })

})();