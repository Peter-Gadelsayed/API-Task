
const cardContainer = document.getElementById("card-cont")


let http = new XMLHttpRequest();

http.open("get", "https://jsonplaceholder.typicode.com/comments");

http.send();

http.readyState;

http.addEventListener("readystatechange", (e) => {

    if (http.readyState === 4 && http.status === 200) {
        let result = JSON.parse(http.response);
        console.log(result);

        for (let i = 0; i < result.length; i++) {
            let element = result[i];
            console.log(element);

            // insertAdjacentHTML('beforeend',) by AI "_"

            cardContainer.insertAdjacentHTML('beforeend', `  
            
            
            <div class="col">
                <div class="card h-100">
                  <div class="card-header">${element.id}</div>
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">${element.body}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${element.email}</small>
                    </div>
                </div>
            </div>
            
            
            
            `

            );
        }


    }
})

