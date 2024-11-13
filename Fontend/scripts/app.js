let active = 0;
let length = document.querySelectorAll('.slider .list .item').length;
let dots = document.querySelectorAll('.slider .dots li');
function nextSlide() {
    if (active + 1 >= length) {
        active = 0;
    } else {
        active += 1;
    }
    reloadSlider();
}

function prevSlide() {
    if (active - 1 < 0) {
        active = length - 1;
    } else {
        active -= 1;
    }
    reloadSlider();
    
}


let refrefslider =setInterval(()=>{nextSlide()},4000)
function reloadSlider() {
    // Check if items[active] is valid to avoid errors
    if (document.querySelectorAll('.slider .list .item')[active]) {
        let checkLeft = document.querySelectorAll('.slider .list .item')[active].offsetLeft;

        // Nếu slider đang ở phần tử cuối, tạm tắt hiệu ứng chuyển tiếp khi quay lại đầu
        if (active === 0 && document.querySelector('.slider .list').style.left === `-${checkLeft}px`) {
            document.querySelector('.slider .list').style.transition = 'none';  // Tắt hiệu ứng chuyển tiếp
            document.querySelector('.slider .list').style.left = '0px';         // Đưa slider về đầu
            setTimeout(() => {
                // Sau một khoảng thời gian ngắn, bật lại hiệu ứng chuyển tiếp và tiếp tục di chuyển
                document.querySelector('.slider .list').style.transition = 'left 1s ease'; 
                reloadSlider();  // Gọi lại reloadSlider để tiếp tục chuyển động
            }, 50);  // 50ms đủ để không thấy sự chuyển đổi
        } else {
            // Đặt hiệu ứng chuyển tiếp bình thường khi không phải đang quay về đầu
            document.querySelector('.slider .list').style.transition = 'left 1s ease';
            document.querySelector('.slider .list').style.left = -checkLeft + "px";
        }

        // Cập nhật dấu chấm (dots) active
        let loadActive = document.querySelector('.slider .dots li.active');
        loadActive.classList.remove('active');
        dots[active].classList.add('active');

        // Cập nhật lại setInterval sau mỗi lần thay đổi
        clearInterval(refrefslider);
        refrefslider = setInterval(() => { nextSlide() }, 4000);
    } else {
        console.warn("Active item is undefined. Check if 'active' is within range.");
    }
}


dots.forEach((li,key)=>{
    li.addEventListener('click',function(){
        active=key;
        reloadSlider()
    })
})