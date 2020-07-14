function getCurrentDate() { 
    let date = new Date().toDateString(); 

    document.querySelector('.output').textContent 
            = date; 
} 