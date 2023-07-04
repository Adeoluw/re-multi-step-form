// Getting the ids of each section container
const infoSection = document.getElementsByClassName("info-con")[0];

const selectionSection = document.getElementsByClassName("selection-con")[0];

const addOnSection = document.getElementsByClassName("Add-on-con")[0];

const summarySection = document.getElementsByClassName("summary-con")[0];


// Getting the next and previous buttons of each section
const infoNext = document.getElementById("info-next")

const selectionPrev = document.getElementById("selection-prev")

const selectionNext = document.getElementById("selection-next");

const addOnNext = document.getElementById("Add-on-next");

const addOnPrev = document.getElementById("Add-on-prev");

const summaryNext = document.getElementById("summary-next");

const summaryPrev = document.getElementById("summary-prev");

// Get the icons of the side section
const infoIcon = document.getElementsByClassName("icon")[0];

const selectionIcon = document.getElementsByClassName("icon")[1];

const addOnIcon = document.getElementsByClassName("icon")[2];

const summaryIcon = document.getElementsByClassName("icon")[3];

const planChosen = {
    plan: "",
    price: "",
    duration: ""
}


let addOns = document.getElementsByClassName("Addon");

const firstCheckBox = document.getElementById("Oservice");
const secondCheckbox = document.getElementById("larger-storage")
const thirdCheckbox = document.getElementById("customization")

const addOnSum = document.getElementsByClassName("Addon-sum")[0];
const onlineService = document.getElementsByClassName("picked-online-service")[0]
const largerStorage = document.getElementsByClassName("picked-larger-storage")[0]
const customization = document.getElementsByClassName("picked-customizable-profile")[0]



   


const planSummary = document.getElementById("plan-sum")

// Get the three plans
let firstPlan = document.getElementsByClassName("plan")[0]
let secondPlan = document.getElementsByClassName("plan")[1]
let thirdPlan = document.getElementsByClassName("plan")[2]



firstPlan.addEventListener("click", () =>{
            planChosen.plan = firstPlan.children[1].children[0].textContent
            planChosen.price = firstPlan.children[1].children[1].textContent
        console.log(planChosen)
        firstPlan.style.backgroundColor = "hsl(206, 94%, 87%)"
        secondPlan.style.backgroundColor = "white"
        thirdPlan.style.backgroundColor = "white"

        let currentPlan = document.createElement("div")
        let chosenPlan = document.createElement("h4")
        currentPlan.appendChild(chosenPlan)
        chosenPlan.textContent = planChosen.plan

        let changePlan = document.createElement("a")
        currentPlan.appendChild(changePlan)
        changePlan.textContent = "change"
        changePlan.className = "change-plan"

        planSummary.appendChild(currentPlan)

        let planPrice = document.createElement("p")
        planPrice.textContent = planChosen.price
        planSummary.appendChild(planPrice)
        planPrice.className = "plan-price"

        planSummary.replaceChildren(currentPlan, planPrice)

        changePlan.addEventListener("click", () =>{
            infoSection.className = "info-invisibility"
            selectionSection.className = "selection-visibility"
            addOnSection.className = "Addon-invisibility"
            summarySection.className = "summary-invisibility"
        })




})

secondPlan.addEventListener("click", () =>{
            planChosen.plan = secondPlan.children[1].children[0].textContent
            planChosen.price = secondPlan.children[1].children[1].textContent
        console.log(planChosen)
        firstPlan.style.backgroundColor = "white"
        secondPlan.style.backgroundColor = "hsl(206, 94%, 87%)"
        thirdPlan.style.backgroundColor = "white"

        

        let currentPlan = document.createElement("div")
        let chosenPlan = document.createElement("h4")
        currentPlan.appendChild(chosenPlan)
        chosenPlan.textContent = planChosen.plan

        let changePlan = document.createElement("a")
        currentPlan.appendChild(changePlan)
        changePlan.textContent = "change"
        changePlan.className = "change-plan"

        planSummary.appendChild(currentPlan)

        let planPrice = document.createElement("p")
        planPrice.textContent = planChosen.price
        planSummary.appendChild(planPrice)
        planPrice.className = "plan-price"

        planSummary.replaceChildren(currentPlan, planPrice)

        changePlan.addEventListener("click", () =>{
            infoSection.className = "info-invisibility"
            selectionSection.className = "selection-visibility"
            addOnSection.className = "Addon-invisibility"
            summarySection.className = "summary-invisibility"
        })
    
})

thirdPlan.addEventListener("click", () =>{
            planChosen.plan = thirdPlan.children[1].children[0].textContent
            planChosen.price = thirdPlan.children[1].children[1].textContent
        console.log(planChosen)
        firstPlan.style.backgroundColor = "white"
        secondPlan.style.backgroundColor = "white"
        thirdPlan.style.backgroundColor = "hsl(206, 94%, 87%)"    

        let currentPlan = document.createElement("div")
        let chosenPlan = document.createElement("h4")
        currentPlan.appendChild(chosenPlan)
        chosenPlan.textContent = planChosen.plan

        let changePlan = document.createElement("a")
        currentPlan.appendChild(changePlan)
        changePlan.textContent = "change"
        changePlan.className = "change-plan"

        planSummary.appendChild(currentPlan)

        let planPrice = document.createElement("p")
        planPrice.textContent = planChosen.price
        planSummary.appendChild(planPrice)
        planPrice.className = "plan-price"

        planSummary.replaceChildren(currentPlan, planPrice)

        changePlan.addEventListener("click", () =>{
            infoSection.className = "info-invisibility"
            selectionSection.className = "selection-visibility"
            addOnSection.className = "Addon-invisibility"
            summarySection.className = "summary-invisibility"
        })
    
})


// create eventlisteners for each icon
infoIcon.addEventListener("click", () =>{
    infoSection.className = "info-visibility"
    selectionSection.className = "selection-invisibility"
    addOnSection.className = "Addon-invisibility"
    summarySection.className = "summary-invisibility"
})

selectionIcon.addEventListener("click", () =>{
    infoSection.className = "info-invisibility"
    selectionSection.className = "selection-visibility"
    addOnSection.className = "Addon-invisibility"
    summarySection.className = "summary-invisibility"
})

addOnIcon.addEventListener("click", () =>{
    infoSection.className = "info-invisibility"
    selectionSection.className = "selection-invisibility"
    addOnSection.className = "Addon-visibility"
    summarySection.className = "summary-invisibility"
})

summaryIcon.addEventListener("click", () =>{
    infoSection.className = "info-invisibility"
    selectionSection.className = "selection-invisibility"
    addOnSection.className = "Addon-invisibility"
    summarySection.className = "summary-visibility"
})


// create event handler for the next button of the info section
infoNext.addEventListener("click", () =>{
    infoSection.className = "info-invisibility"
    selectionSection.className = "selection-visibility"
    addOnSection.className = "Addon-invisibility"
    summarySection.className = "summary-invisibility"
})

selectionPrev.addEventListener("click", () =>{
    infoSection.className = "info-visibility"
    selectionSection.className = "selection-invisibility"
    addOnSection.className = "Addon-invisibility"
    summarySection.className = "summary-invisibility"
})

selectionNext.addEventListener("click", () =>{
    infoSection.className = "info-invisibility"
    selectionSection.className = "selection-invisibility"
    addOnSection.className = "Addon-visibility"
    summarySection.className = "summary-invisibility"
})


addOnPrev.addEventListener("click", () =>{
    infoSection.className = "info-invisibility"
    selectionSection.className = "selection-visibility"
    addOnSection.className = "Addon-invisibility"
    summarySection.className = "summary-invisibility"
})


addOnNext.addEventListener("click", () =>{
    infoSection.className = "info-invisibility"
    selectionSection.className = "selection-invisibility"
    addOnSection.className = "Addon-invisibility"
    summarySection.className = "summary-visibility"
})

summaryPrev.addEventListener("click", () =>{
    infoSection.className = "info-invisibility"
    selectionSection.className = "selection-invisibility"
    addOnSection.className = "Addon-visibility"
    summarySection.className = "summary-invisibility"
})

summaryNext.addEventListener("click", () =>{
    infoSection.className = "info-visibility"
    selectionSection.className = "selection-invisibility"
    addOnSection.className = "Addon-invisibility"
    summarySection.className = "summary-invisibility"
})






firstCheckBox.addEventListener("click", (e) =>{
    if (e.target.checked == true) {
        onlineService.className = "visibility"
        console.log(e.target.checked)
    } 
    else{
        onlineService.className = "invisibility"
    }
})


secondCheckbox.addEventListener("click", () =>{
    if (secondCheckbox.checked == true) {
        largerStorage.className = "visibility"
    } 
    else{
        largerStorage.className = "invisibility"
    }
})

thirdCheckbox.addEventListener("click", () =>{
    if (thirdCheckbox.checked == true) {
        customization.style.display = "block"
        // customization.className = "visibility"
        console.log("HIiiiiiiiiiiiiiii")
    } 
    else{
        customization.className = "invisibility"
    }
})




// secondCheckbox.addEventListener("change", ()=>{
//     let objOfLargerStorage = {
//         addOn: "Larger storage",
//         addOnprice: "+$2/mo"

//     }

//     let onlineChosencon = document.createElement("div");
//         let onlineChosen = document.createElement("p");
//         onlineChosencon.appendChild(onlineChosen)
//         onlineChosen.textContent = objOfLargerStorage.addOn

//         let divOfPrice = document.createElement("div")
//         let priceOfchosen = document.createElement("p");
//         divOfPrice.appendChild(priceOfchosen);
//         priceOfchosen.textContent = objOfLargerStorage.addOnprice

//     // let container = document.createElement("div")
//     if (thirdCheckbox.checked) {
    
        
       
//         largerStorage.appendChild(onlineChosen)
//         largerStorage.appendChild(priceOfchosen)

//         // addOnSum.appendChild(container)


//     console.log("wtf is going on")
//     } 
//     else{
//         largerStorage.remove(onlineChosen)

//     }

// })


// thirdCheckbox.addEventListener("change", () =>{
//     let objOfCustomization = {
//         addOn: "customizable profile",
//         addOnprice: "+$2/mo"

//     }

//     let onlineChosencon = document.createElement("div");
//         let onlineChosen = document.createElement("p");
//         onlineChosencon.appendChild(onlineChosen)
//         onlineChosen.textContent = objOfCustomization.addOn

//         let divOfPrice = document.createElement("div")
//         let priceOfchosen = document.createElement("p");
//         divOfPrice.appendChild(priceOfchosen);
//         priceOfchosen.textContent = objOfCustomization.addOnprice

//     // let container = document.createElement("div")
//     if (thirdCheckbox.checked) {
    
        
       
//         customization.appendChild(onlineChosen)
//         customization.appendChild(priceOfchosen)

//         // addOnSum.appendChild(container)


//     console.log("wtf is going on")
//     } 
//     else{
//         customization.remove(onlineChosen)

//     }
// })

// addOns[0].addEventListener("click", () =>{
//     let objOfOnlineService = {
//         addOn: "Online service",
//         addOnprice: "+$1/mo"
//     }
//     if (firstCheckBox.checked == true) {
    
//         let onlineChosencon = document.createElement("div");
//         let onlineChosen = document.createElement("p");
//         onlineChosencon.appendChild(onlineChosen)
//         onlineChosen.textContent = objOfOnlineService.addOn

//         let divOfPrice = document.createElement("div")
//         let priceOfchosen = document.createElement("p");
//         divOfPrice.appendChild(priceOfchosen);
//         priceOfchosen.textContent = objOfOnlineService.addOnprice

//         let container = document.createElement("div")
       
//         container.appendChild(onlineChosen)
//         container.appendChild(priceOfchosen)

//         addOnSum.appendChild(container)


    
//     } 
//     else if(firstCheckBox.checked == false) {
//         container.replaceChildren("")
//     }
   
// })    

// addOns[1].addEventListener("click", () =>{
//     let objOfLargerStorage = {
//         addOn: "Larger storage",
//         addOnprice: "+$2/mo"
//     }

//     let container = document.createElement("div")
//     if (secondCheckbox.checked == true) {
    
//         let largerChosencon = document.createElement("div");
//         let largerChosen = document.createElement("p");
//         largerChosencon.appendChild(largerChosen)
//         largerChosen.textContent = objOfLargerStorage.addOn

//         let divOfPrice = document.createElement("div")
//         let priceOfchosen = document.createElement("p");
//         divOfPrice.appendChild(priceOfchosen);
//         priceOfchosen.textContent = objOfLargerStorage.addOnprice
       

//         container.appendChild(largerChosen)
//         container.appendChild(priceOfchosen)

//         addOnSum.appendChild(container)


    
//     } 
//     else if(secondCheckbox.checked == false) {
//         container.replaceChildren("")
//     }
   
// })    

//     let customizableCon = document.getElementById("id-for-customisation")
// customizableCon.addEventListener("click", () =>{
    
    // if (thirdCheckbox.checked) {
    //     thirdCheckbox.checked = false
    //     customizableCon.style.backgroundColor = "white"
    
        

    
    // } 
    // else {
    //     let customizationChosencon = document.createElement("div");
    //     let customizationChosen = document.createElement("p");
    //     customizationChosencon.appendChild(customizationChosen)
    //     customizationChosen.textContent = "Customizable profile"

    //     let divOfPrice = document.createElement("div")
    //     let priceOfchosen = document.createElement("p");
    //     divOfPrice.appendChild(priceOfchosen);
    //     priceOfchosen.textContent = "+$2/mo"

    //     let containerCustom = document.createElement("div")

       
    //     containerCustom.append(customizationChosen)
    //     containerCustom.append(priceOfchosen)

    //     addOnSum.appendChild(containerCustom)
    //     // thirdCheckbox.checked = true
    //     customizableCon.style.backgroundColor = "hsl(229, 24%, 87%)"
    //     console.log("This is ass man")
    // }
   
// }) 









// A little design for when the addons are clicked
for (let i = 0; i < addOns.length; i++) {
    const element = addOns[i];
    element.addEventListener("click", () =>{
        if (element.children[0].checked == true) {
            element.children[0].checked = false
            element.style.backgroundColor = "white"
        } else {
            element.children[0].checked = true
            element.style.backgroundColor = "hsl(229, 24%, 87%)"
        }
    })
}