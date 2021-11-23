const renderer = new Renderer()

$.ajax({
    method: "GET",
    url: `/recipes/cheese`,
    success: function(recipes) {
        renderer.render(recipes)
    }
})

$("#submit-ingredient").on('click', function() {
    const ingredient = $("#ingredient-input").val()
    $.ajax({
        method: "GET",
        url: `/recipes/${ingredient}`,
        success: function(recipes) {
            renderer.render(recipes)
        }
    })
})

$(".recipes-container").on('click', 'img', function() {
    const firstIngredient = $(this).closest('div').find('li:first-child').text()
    alert(firstIngredient)
})