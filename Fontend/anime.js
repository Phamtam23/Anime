




const routers = {
    '/': { html: 'pages/app.html', css: "style/app.css", js: "scripts/app.js" },
    '/danhmuc': { html: 'pages/danhmuc.html', css: "style/danhmuc.css", js: "scripts/danhmuc.js" },
    '/search': { html: 'pages/search.html', css: "style/search.css", js: "scripts/search.js" },
    '/Game': { html: 'pages/game.html', css: "style/game.css", js: "scripts/game.js" },
    '/premium': { html: 'pages/premium.html', css: "style/premium.css", js: "scripts/premium.js" },
    '/login': { html: 'pages/login.html', css: "style/login.css", js: "scripts/login.js" },
};


function loadCSS(cssPath) {
    // Xóa tất cả các CSS hiện tại
    document.querySelectorAll('link[data-dynamic-css]').forEach(link => link.remove());

    // Tạo thẻ <link> mới cho CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;
    link.setAttribute("data-dynamic-css", "true"); // Đánh dấu để dễ xoá sau này
    document.head.appendChild(link);
}

function loadJS(JSPath) {
    document.querySelectorAll('script[data-dynamic-js]').forEach(script => script.remove());
    const script = document.createElement("script");
    script.src = JSPath;
    script.setAttribute("data-dynamic-js", "true"); // Mark it for easy removal later
    document.head.appendChild(script);
}
function navigation(url) {
    location.hash = url;
    router(); 
}

function router() {
    const path = location.hash.slice(1) || '/';
    const route = routers[path] || routers['/'];
    // Tải CSS động
    loadCSS(route.css);
    fetch(route.html)
        .then(response => response.text())
        .then(content => {
            document.querySelector('.app').innerHTML = content;
            setTimeout(() => {
                loadJS(route.js);
            }, 100);
        })
        .catch(error => {
            document.querySelector('.app').innerHTML = '<h1>Không tìm thấy trang</h1>';
        });
}

window.addEventListener('hashchange', router);
document.addEventListener('DOMContentLoaded', router);
document.addEventListener('click', e => {
    const linkElement = e.target.closest('[data-link]');
    if (linkElement) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định
        const url = linkElement.getAttribute('data-link');
        navigation(url);
    }
});

// Khởi tạo router khi tải trang lần đầu
router();


function theloaiclick(clickedElement) {
    const theloai = document.getElementById("ul_theloai");
    const quocgia = document.getElementById("ul_quocgia");
    clickedElement.classList.add("changebgr")
    if (theloai) {
        if(theloai.classList.contains("select"))
        {
            theloai.classList.remove("select")
        }
        else
             theloai.classList.add("select"); // Show "theloai" by adding "select"
    }
    if (quocgia) {
        document.getElementById("quocgia_click").classList.remove("changebgr") 
        quocgia.classList.remove("select"); // Hide "quocgia" by removing "select"
    }  
    showOverlay();
}

function quocgiaclick(clickedElement) {

    const quocgia = document.getElementById("ul_quocgia");
    const theloai = document.getElementById("ul_theloai");
    clickedElement.classList.add("changebgr")
    if (quocgia) {
        if(quocgia.classList.contains("select"))
            quocgia.classList.remove("select")
        else
        quocgia.classList.add("select"); // Show "quocgia" by adding "select"
    }
    if (theloai) {
        document.getElementById("theloai_click").classList.remove("changebgr") 
        theloai.classList.remove("select");
    }
    showOverlay();
}

// Function to show overlay, creating it if necessary
function showOverlay() {
    let coverElement = document.querySelector('.cover_man');
    if (!coverElement) {
        coverElement = document.createElement('div');
        coverElement.classList.add('cover_man');
        document.body.appendChild(coverElement);
        
        // Add a single click event listener to the overlay to remove classes and itself
        coverElement.addEventListener('click', () => {
            const quocgia = document.getElementById("ul_quocgia");
            const theloai = document.getElementById("ul_theloai");

            if (quocgia) {
                quocgia.classList.remove("select");
                document.getElementById("quocgia_click").classList.remove("changebgr") 
            }
            if (theloai) {
                theloai.classList.remove("select");
                document.getElementById("theloai_click").classList.remove("changebgr") 
            }

            // Hide the overlay instead of removing it
            coverElement.style.display = 'none';
        });
    } else {
        coverElement.style.display = 'block'; // Show overlay if it already exists
    }
}
