import {getAllRavandWithUser} from "./api/routin.js";

//   import { getUserWithId } from "./api/user.js";
//   import { getDataLocal } from "./helper.js";
  
//   /*---------------------render page-----------------------*/
 
const renderPage=async()=>{
  const ravand =await getAllRavandWithUser(localStorage.getItem("user"))
  ravand.forEach((item,index) => {
    console.log(item);
    const note = `
    <div class="ravand-behbodi-item p-2 m-2"><a href="./recovery-process.html?id=${item.id}">روند بهبودی${++index}</a></div>
    `
    document.querySelector("#row").innerHTML+=note
  });
}
renderPage()
//   const userId = await getDataLocal("user");
//   const user = await getUserWithId(+userId);
  

  
//     const headerProfile = document.querySelector("#header-profile")
  
//     console.log(user);
//     const headerNote = `
//     <!-- imge-user -->
//               <div class="col-6 col-md-2 p-3">
//                 <div class="imge-user">
//                   <img src="http://127.0.0.1:8000${user.profileimage}" alt="">
//                 </div>
//               </div>
//               <!-- imge-user -->
//               <!-- name-user -->
//               <div class="col-6 col-md-10 p-3 jj">
//                 <div class="name-user">
//                   ${user.name}
  
//                 </div>
//               </div>
//               <!-- name-user -->
//     `
  
//   headerProfile.innerHTML += headerNote;
//   await renderPage();
  
//   /*---------------------render page-----------------------*/
  
//   /*------------------------play and stop slider------------------------*/
//   let play = false;
//   const timer = (name, inputName, step) => {
//     const images = [...document.querySelector(name).children];
//     images.forEach((item) => {
//       item.classList.remove("active");
//     });
  
//     images[0].classList.add("active");
//     let count = 0;
  
//     const input = document.querySelector(inputName);
//     input.value = 0;
//     const time = setInterval(() => {
//       // console.log(count);
//       if (count === images.length - 1) return;
//       count++;
//       images.forEach((item, index) => {
//         item.classList.remove("active");
//       });
//       images[count].classList.add("active");
//       input.value = +input.value + 1;
//       play = true;
//       // console.log(play);
//     }, 2500);
//     window.stopHandler = () => {
//       clearInterval(time);
//     };
//   };
  
//   window.playHandler = (step) => {
//     timer(`#content-image`, `#amount-cream`, step);
//   };
  
//   window.changeHanlder = (step) => {
//     const input = document.querySelector(`#amount-cream`);
  
//     const images = [...document.querySelector(`#content-image`).children];
//     const count = input.value / +step;
  
//     if (count === images.length) return;
  
//     images.forEach((item) => {
//       item.classList.remove("active");
//     });
  
//     images[count].classList.add("active");
//   };
//   /*------------------------play and stop slider------------------------*/
//   const btnShowModal = document.querySelector("#btn-show-modal");
//   const modal = document.querySelector(".modal-add-ravand");
//   const closeModal = document.querySelector(".modal-add-ravand .inner-modal");
//   btnShowModal.addEventListener("click", () => {
//     modal.classList.add("active");
//   });
//   closeModal.addEventListener("click", (e) => {
//     if (e.target.className === "inner-modal" || e.target.className === "close") {
//       modal.classList.remove("active");
//     }
//   });
  
//   const allRoutin = await getAllRoutin();
//   const isRoutin = allRoutin.find((item) => item.user === +userId);
  
//   const btnSendRavand = document.querySelector("#btn-ravand");
  
//   const notRotin = async () => {
//     const image = document.querySelector("#picture-ravand-add");
//     const data = {
//       name: "amir",
//       isActive: false,
//       value: "asdlknv;sa",
//       user: +userId,
//       types: "food",
//     };
  
//     const routin = await addRoutin(data);
//       var formData = new FormData();
//     formData.append("image", image.files[0], image.value);
//     formData.append("user", +userId);
//     formData.append("routin", routin.id);
//     var requestOptions = {
//       method: "POST",
//       body: formData,
//       redirect: "follow",
//     };
//     await addRavand(requestOptions);
//   };
  
//   const routinA = async () => {
//     const image = document.querySelector("#picture-ravand-add");
  
//     var formData = new FormData();
//     formData.append("image", image.files[0], image.value);
//     formData.append("user", +userId);
//     formData.append("routin", isRoutin.id);
//     var requestOptions = {
//       method: "POST",
//       body: formData,
//       redirect: "follow",
//     };
//     await addRavand(requestOptions);
//   };
//   btnSendRavand.addEventListener("click", async () => {
  
//     if (!Boolean(isRoutin)) {
//       await notRotin();
//     } else {
//       await routinA();
//     }
  
//     window.location.reload()
//   });
  
  
//   /* ------------------change img and content--------------------- */
//   let btnss = document.querySelectorAll("#menuuuu");
//   let contentss = document.querySelector(".height-full-viewport");
//   let close_btn = document.querySelector("#close");
  
//   //   btns.addEventListener("click", () => {
//   //       contents.classList.add("viewport");
//   //     });
//   btnss.forEach((item) => {
//     item.addEventListener("click", () => {
//       contentss.classList.add("viewport");
//     });
//   });
  
//   close_btn.addEventListener("click", () => {
//     contentss.classList.remove("viewport");
//   });
//   /*----------------------------(show , close , send) modal rotin --------------------------- */
//   const btnsShowModalrotin = document.querySelectorAll("#icon-add-rotin");
//   const btnsCloseModalrotin = document.querySelector("#close-modal-rotin");
//   const contentModalsrotin = document.querySelector(".modal-rotin");
  
//   btnsShowModalrotin.forEach((item) => {
//     item.addEventListener("click", () => {
//       contentModalsrotin.classList.add("active");
//     });
//   });
  
//   btnsCloseModalrotin.addEventListener("click", () => {
//     contentModalsrotin.classList.remove("active");
//   });
  
//   contentModalsrotin.addEventListener("click", (e) => {
//     if (e.target.className === "inner-modal")
//       contentModalsrotin.classList.remove("active");
//   });
  
//   /*----------------------------(show , close , send) modal rotin --------------------------- */
//   /*----------------------------(show , close , send) modal add-post --------------------------- */
//   const btnsShowModalazmayesh = document.querySelectorAll("#azmayesh-raygan");
//   const btnsCloseModalazmayesh = document.querySelector("#close-modal-azmayesh");
//   const contentModalsazmayesh = document.querySelector(".modal-azmayesh-raygan");
  
//   btnsShowModalazmayesh.forEach((item) => {
//     item.addEventListener("click", () => {
//       contentModalsazmayesh.classList.add("active");
//     });
//   });
  
//   btnsCloseModalazmayesh.addEventListener("click", () => {
//     contentModalsazmayesh.classList.remove("active");
//   });
  
//   contentModalsazmayesh.addEventListener("click", (e) => {
//     if (e.target.className === "inner-modal")
//       contentModalsazmayesh.classList.remove("active");
//   });
  
//   /*----------------------------(show , close , send) modal add-post --------------------------- */
  
//   /*-------------------add azmayesh--------------------*/
  
//   const btnAddAzmayesh = document.querySelector("#btn-add-azmayesh");
  
//   btnAddAzmayesh.addEventListener("click", async () => {
//     const id = JSON.parse(window.localStorage.getItem("user"));
//     const element = document.querySelector(`#file-azmayesh`);
//     const des = document.querySelector(`#des-azmayesh`);
//     var formdata = new FormData();
  
//     formdata.append("image", element.files[0], element.value);
//     formdata.append("user", `${id}`);
//     formdata.append("descripton", des.value);
//     formdata.append("response", "response");
  
//     var requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };
  
//     await addAzmayesh(requestOptions);
//   });
  
//   /*-------------------add azmayesh--------------------*/