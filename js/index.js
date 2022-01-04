// LOAD BOOK DATA USING ARROW FUNCTION HERE
let searchBookData = () => {

	//LET'S GET THE SEARCH FIELD DATA AND STORE HERE
	let searchData = document.getElementById("searchField");
	searchDataVlaue = searchData.value;
    searchData.value = "";
    // SEARCH FORM VALIDATION
    if (searchDataVlaue !== "") {
	// API WILL CALLED FOLLOWING THIS URL
	apiURL = `https://openlibrary.org/search.json?q=${searchDataVlaue}`;

    //LET'S FETCH THE API URL
    fetch(apiURL)
    .then(response => response.json())
    .then(bookData =>  displayApiresult(bookData.docs));

    
    
}else{
        let erorrAlert = document.getElementById("erorrAlert");//Result Length Alert
        erorrAlert.innerText = `Please Fill Up the Search Form First!`;
        let resultLengthTag = document.getElementById("resultLength");//Result Length Alert
        resultLengthTag.innerText = "";
}
}
 // LET'S MAKE THE DISPLAY RESULT FUNCTION
    let  displayApiresult = searchData => {
         let resultLength = searchData.length;

         // ESCAP THE HACKING INJECTION OR INVALID INPUT
         if (resultLength === 0) {
                    let erorrAlert = document.getElementById("erorrAlert");//Result Length Alert
                    erorrAlert.innerText = `YOUR INPUT IS INVALID! DON'T TYPE INVALID INPUT!`;
                    let resultLengthTag = document.getElementById("resultLength");//Result Length Alert
                    resultLengthTag.innerText = "";

            }else{
                   
        let bookDetailsTag = document.getElementById("bookDetails");
        let resultLengthTag = document.getElementById("resultLength");//Result Length Alert
        resultLengthTag.innerText = `${resultLength} Result Found On Your Search "${searchDataVlaue}"`;
        let erorrAlert = document.getElementById("erorrAlert");//Result Length Alert
        erorrAlert.innerText = '';

        bookDetailsTag.innerHTML = "";
        searchData.forEach(result => {
            // console.log(result);
            let authorName = result.author_name;
            let publishedYear = result.first_publish_year;
            let publisher = result.publisher;
            let bookTitle = result.title;
            let bookCover = result.cover_i;
            let bookCoverUrl = `https://covers.openlibrary.org/b/id/${bookCover}-M.jpg`;
            let columDivCreate = document.createElement("div");
            columDivCreate.classList.add("courses-box");

            columDivCreate.innerHTML = `
                  
                        <img src="${bookCoverUrl}" alt="">
                        <h2><a href="">${bookTitle}</a></h2> 
                        <span><a href="">Author: ${authorName}</a></span><br>
                        <button class="enroll">Publisher: ${publisher}</button>
                        
                        <small>Published: ${publishedYear}</small>
                        
                    
            `;
          bookDetailsTag.appendChild(columDivCreate);

           });

          
             }
        }
