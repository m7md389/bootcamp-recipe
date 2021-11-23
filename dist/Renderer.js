class Renderer {
    render(data) {
        $(".recipes-container").empty()
        const source = $("#recipe-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ recipe: data })
        $(".recipes-container").append(newHTML)
    }

    renderError() {
        $(".recipes-container").empty()
        const source = $("#recipe-404-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({})
        $(".recipes-container").append(newHTML)
    }
}