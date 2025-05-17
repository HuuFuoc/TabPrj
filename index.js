let btnList = document.querySelectorAll(".navtab-btn");
let tabList = document.querySelectorAll(".tab-content-item");

// duyệt từng nút và nói từng nút lắng nghe sự kiện

btnList.forEach((btn) => {
  //nếu mà có 1 nút bị click thì
  btn.addEventListener("click", (clickEvent) => {
    btnList.forEach((_btn) => {
      _btn.classList.remove("actived");
    });
    //thằng nào vừa bị click thì thêm actived đi
    clickEvent.target.classList.add("actived");
    //duyệt danh sách content và xóa actived
    tabList.forEach((tabItem) => {
      tabItem.classList.remove("actived");
    });
    //lấy id của thằng bị nhấn
    let id = clickEvent.target.id;
    let contentChecked = document.querySelector(
      `.tab-content-item[data-id ="${id}"]`
    );
    contentChecked.classList.add("actived");
  });
});
