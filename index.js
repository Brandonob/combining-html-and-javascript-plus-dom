document.addEventListener("DOMContentLoaded",() => {
    // let submitButton = document.querySelector("#submitButton");
    // submitButton.addEventListener("click", evenChar)
// let stringInput = prompt("What's your name?")

// alert("Hello " + stringInput)
// document.getElementById("stringName").innerText = "Hello " + stringInput


// let numberInput = prompt("What's your age")
// let output = ""
// if (numberInput % 2 === 0){
    //     alert("Your age even")
    //     output ="Your age is is even"
    //     document.getElementById("age").innerText = output 
    // } else {
        //     alert("Your age is not even")
        //     output = "Your age is not even"
        //     document.getElementById("age").innerText = output 
        // }
        
        // let doubleInput = prompt("Enter a Number")
        // let num = document.getElementById("#number")
        // console.log(num)
        
        
        
        // const Times2 = () => {
        //     let doubler = document.querySelector("#num").value*2;
        //     //  document.getElementById("#num").innerText = num.value * 2;
        //     alert(doubler)
        //     document.querySelector("#result").innerHTML = doubler
        //     document.querySelector("#num").value = doubler
        //     return doubler
        // }


    })
    const Times2 = () => {
        let doubler = document.querySelector("#num").value*2;
        //  document.getElementById("#num").innerText = num.value * 2;
        alert(doubler)
        document.querySelector("#result").innerHTML = doubler
        document.querySelector("#num").value = doubler
        return doubler
    }
    
    const isPalindrome = () => {
        let reverse = ""
        let word = document.querySelector("#text").value
        for(let i = word.length - 1; i >= 0; i--){
            reverse+=(word[i])
        }
        if(reverse===word){
            alert("its Palindrome")
            document.querySelector("#isPalindrome").innerHTML = "its Palindrome"
        }
        else{
            alert("its not Palindrome")
            document.querySelector("#isPalindrome").innerHTML = "its not Palindrome"
        }
    }

    const evenChar = ()=>{
        let strInput = document.querySelector("#words")
        let str = strInput.value
        let newChar = "";
        for(let i=1;i<str.length;i++){
            if(i%2){
                newChar+= str[i]   
            }
        }
    //    return document.querySelector("#words").value = newChar
      strInput.value = newChar
    }

    const upperC =()=>{
        let input= document.querySelector("#upperCased")
        let inputV = input.value
        // inputV.toUpperCase()
        alert(inputV.toUpperCase())
        document.querySelector("#allUpper").innerHTML=inputV.toUpperCase()
        document.querySelector("#upperCased").value=inputV.toUpperCase()
    }

    const countingCapital = () => {
        let input= document.querySelector("#stringCap")
        let word = input.value
        let count = 0

        for(let i=0; i<word.length; i++){
            if(word[i] === word[i].toUpperCase()){
                count++
            }
        }
        alert(count)

        document.querySelector("#stringCount").innerHTML= count
    }
