let isDragging = false;
let $dom;
let offsetX;
let offsetY;

$(() => {

  $(".circle").on("mousedown touchstart", (e) => {
    isDragging = true;
    $dom = $(e.target);
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  });

  $(".wrapper").on("mousemove", (e) => {
    if (isDragging && $dom) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      requestAnimationFrame(() => {
        console.log(x, y)
        $dom.css({
          top: `${y}px`,
          left: `${x}px`,
        })

        const id = $dom.attr("id");
        $(`#${id}0`).css({
          top: `${y + 200}px`,
          left: `${x}px`,
        })
        $(`#${id}00`).css({
          top: `${y + 200 * 2}px`,
          left: `${x}px`,
        })
      });
    }
  });

  $(".wrapper").on("mouseup touchend", () => {
    isDragging = false;
    $dom = null;
  });


});
