let postArray = []

const clickButton = () => {
        let title = document.getElementById("titulo-post")
        let author = document.getElementById("autor-post")
        let content = document.getElementById("conteudo-post")
        let image = document.getElementById("imagem-post")
        let box = document.getElementById("container-de-posts")
        box.innerHTML += `<h1> ${title.value} </h1>`
        box.innerHTML += `<h4> ${author.value} </h4>`
        box.innerHTML += `<p> ${content.value} </p>`
        

        if(image.value.includes("http")){
            box.innerHTML += `<img src=${image.value}><img>`

        }else {
            window.alert("Por favor, digite um link válido!")
        }
        
        

        const post = {
            title: title.value,
            author: author.value,
            content: content.value,
            image: image.value
        }

        postArray.push(post)

        console.log(post)
        postLists = [...postArray, post]
        console.log(postArray)

        title.value = ""
        author.value = ""
        content.value = ""
        image.value = ""
    }