var arr1;
var arr2;
var list1;
var list2;


const runFn = () => {
    list1 = document.getElementById("firstTxt").value;
    arr1 = list1.split(" ");
    console.log(arr1);

    document.getElementById("firstTxtArea").innerHTML = arr1;
    localStorage.setItem("firstbox", arr1)
    updateSecBox();
}
const runFn2 = () => {
    list2 = document.getElementById("secTxt").value;
    arr2 = list2.split(" ");
    console.log(arr2);
    document.getElementById("thirdTxtArea").innerHTML = arr2;
    localStorage.setItem("secbox", arr2)

    updateSecBox();
}

const updateSecBox = () => {

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                (preValue) => {

                }

                document.getElementById("secTxtArea").innerHTML = arr1[i];

            }

        }
    }


}
window.onload(() => {
    document.getElementById("firstTxt").value = localStorage.getItem("firstbox");
    document.getElementById("secTxt").value = localStorage.getItem("secbox");

})
