

$("body").on("click",".expander-button",(e)=>{
  let key = $(e.currentTarget).attr("data-will-expand");
  $(`[data-expanded-key="${key}"]`).removeClass("hidden");
  $(`[data-will-expand-container="${key}"]`).addClass("hidden");
  e.preventDefault();
});

$("body").on("click",".collapser-button",(e)=>{
  let key = $(e.currentTarget).attr("data-will-hide");
  $(`[data-expanded-key="${key}"]`).addClass("hidden");
  $(`[data-will-expand-container="${key}"]`).removeClass("hidden");
  e.preventDefault();
});
