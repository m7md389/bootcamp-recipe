const renderer = new Renderer()

$("#submit-ingredient").on('click', function() {
    const ingredient = $("#ingredient-input").val()

    if (ingredient === "") {
        renderer.renderError()
        return null
    }

    $.ajax({
        method: "GET",
        url: `/recipes/${ingredient}`,
        success: function(recipes) {
            if (recipes.length === 0) {
                renderer.renderError()
            } else {
                renderer.render(recipes)
            }
        },
        error: (xhr, text, error) => {
            alert(text)
        }
    })
})

$(".recipes-container").on('click', 'img', function() {
    const firstIngredient = $(this).closest('div').find('li:first-child').text()
    alert(firstIngredient)
})