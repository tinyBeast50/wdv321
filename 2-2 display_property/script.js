function resetDisplay() {
    const productSelect =document.getElementById("contactType");
    
    for (let i = 0; i < productSelect.options.length; i++) {
        const productValue = productSelect.options[i].value;
        
        if (productValue !== "") {
            document.getElementById(productValue).classList.add("hidden");
        };
    };
};


function updateDisplay(selectedItem) {
    if (selectedItem !== "") {
        document.getElementById(selectedItem).classList.remove("hidden")
    };
};

document.getElementById("contactType").addEventListener("change", (event) => {
    
    const selectedItem = event.currentTarget.value

    resetDisplay();
    updateDisplay(selectedItem);
})