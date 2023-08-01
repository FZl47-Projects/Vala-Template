import { getUserWithId } from "../api/user.js";
import { getDataLocal, getPath, phoneHandlerReverse } from "../helper.js";
import { validateLogin } from "../api/validateLoginAdmin.js";
import { addCartex, getAllCartex ,addDistrict,getAllDistrict} from "../api/cartext.js";
import { getManager } from "../api/managers.js";
import {toast} from '../toastify.js'
await validateLogin();

const opratorId = await getDataLocal("user-admin");

const oprator = await getManager(opratorId);

const containerRows = document.querySelector("#container-rows");

const userId = getPath(window.location.search);

const user = await getUserWithId(+userId);

const nameO = async (id) => {
  const res = await getManager(id);
  return res.name;
};

const district = async ()=>{
  const district = await getAllDistrict()
  district.forEach(item=>{
    console.log(item);
    const note = ` <div class="select-itemm">
    <div class="District-name">
       ${item.name}
    </div>
    <div class="check">
     <input name="check" id="nameCheckbox" type="text" data-name="${item.name}">
    </div>
  </div>`
  document.querySelector("#itemdis").innerHTML+=note
  })
  }
  await district()


/*-----------render page----------------*/
const renderPage = async () => {
  const containerTitle = document.querySelector("#title");

  const title = `
    <div class="col-4 p-1">
                                            <div class="information-item text-center">${
                                              user.name
                                            }</div>
                                        </div>
                                        <div class="col-4 p-1">
                                            <div class="information-item text-center">${
                                              user.nationalcode
                                            }</div>
                                        </div>
                                        <div class="col-4 p-1">
                                            <div class="information-item text-center">${phoneHandlerReverse(
                                              user.phone_number
                                            )}</div>
                                        </div>
    `;
  containerTitle.innerHTML = title;

  const cartexs = await getAllCartex();
  const cartexUser = cartexs.filter((item) => item.user.id === +userId);
//   const cartexreverse = cartexUser.reverse();

  cartexUser.forEach(async (item, index) => {
    const note1 = `
    <div class="table-row table-one">
    <div class="col-1 p-1"><div class="row-item jalseh">${
      item.numbermeet
    }</div></div>
    <div class="col-2 p-1"><div class="row-item date">${
      item.descriptions
    }</div></div>
    <div class="col-3 p-1 nahiyeh"><span id="jj">jjj</span></div>
    <div class="col-3 p-1"><div class="row-item ">کم</div></div>
    <div class="col-3 p-1"><div class="row-item ">${await nameO(
      item.oprator_Las
    )}</div></div>                                     
    </div>
    `;

      const note = `   <div class="table-row table-one">
      <div class="col-1 p-1"><div class="row-item jalseh">${
        item.numbermeet
      }</div></div>
     
      <div class="col-2 p-1">

      <div class="row-item date">${ new Date(item.created).toLocaleDateString('fa-IR')}</div></div>
      <div class="col-1 p-1 nahiyeh">
      <textarea type="text" id="inputdistrict" disabled>${item.district}</textarea>
      
      </div>
      <div class="col-3 p-1"><div class="row-item ">${item.descriptions}</div></div>
      <div class="col-3 p-1"><div class="row-item ">${item.oprator_Las}</div></div>                                     
      </div></div>`
    containerRows.innerHTML += note;
  });
};
await renderPage();
/*-----------render page----------------*/

/*---------------add row----------------*/

const btnAddRow = document.querySelector("#btn-add-row2");

const addRow = () => {
  const rows = document.querySelectorAll(".table-one");
  console.log(rows.length);
  const row = `
    <div class="table-row table-one">
    <div class="col-1 p-1"><div class="row-item jalseh">${
      rows.length 
    }</div></div>
    <div class="col-2 p-1"><div class="row-item date"><input type="text" value=""></div></div>
    <div class="col-3 p-1 nahiyeh">
    <textarea type="text" id="inputdistrict" disabled></textarea>
        <span id="btn-District" onclick="btn_add_District()">افزودن ناحیه</span>
    </div>
    <div class="col-3 p-1"><div class="row-item "data-send="false"><input type="text"  class="di" value=""></div></div>
    <div class="col-3 p-1"><div class="row-item "><input type="text" disabled class="op" value="${
      oprator.name
    }"></div></div>                                     
    </div>

    `;





  containerRows.innerHTML += row;
  const submitselected = document.querySelector("#submitselected")
  submitselected.addEventListener('click',()=>{

    const input = [...document.querySelectorAll("#nameCheckbox")]
    console.log(input);
    const indexof = document.querySelector("#indexof").getAttribute("data-index")
    const inputdistrict = document.querySelectorAll("#inputdistrict")
 
    console.log(inputdistrict);
    let endvalue = ""
    const value = input.map(item=>{
      if(item.value!="")
          endvalue += item.getAttribute("data-name")+"  شدت : "+item.value+"\n";
      
          console.log(indexof);
      if(indexof)
          inputdistrict[inputdistrict.length-1].innerHTML = endvalue
      else{
        inputdistrict[indexof].innerHTML = endvalue
      }    
    }
      
    )
  
   
   console.log(endvalue);
  })
};
console.log(btnAddRow);
window.test = ()=>{
  console.log("hello");
  const rows = document.querySelectorAll(".table-one");

  if (rows.length === 10) {
      btnAddRow.classList.add("no-active");
      btnAddRow.innerHTML = "اتمام جلسات";
    return;
  } 

  addRow();
  btnAddRow.style.display = "none"
}


/*---------------add row----------------*/

/*------------------add jalseh------------------*/
window.sendJalseh = async () => {
  const rows = [...document.querySelectorAll(".table-one")];
  const index = rows.length-2;
  const jalseh = document.querySelectorAll(".jalseh");
  const date = document.querySelectorAll(".date");
  console.log(date);
  const district = document.querySelectorAll("#inputdistrict");
  console.log(index);
  const dateValue = date[index].children[0].value;

  if (!dateValue.trim() || !district[index].value) {
    toast(`لطفا تمامی فیلد های جلسه ${+jalseh[index].innerHTML}راپرکنید`);
  }

  const data = {
    numbermeet: +jalseh[index].innerHTML,
    descriptions: dateValue,
    oprator_Las: opratorId,
    district: district[index].innerHTML,
    user: +userId,
  };

  console.log(data);
  await addCartex(data);
  window.location.reload()
};

const addJalseh = document.querySelector("#btn-add-jalseh");

addJalseh.addEventListener("click", sendJalseh);

/*------------------add jalseh------------------*/


const modal_add_District = document.querySelector(".modal-add-District")
const btnclose_District = document.querySelector(".close-modal-District")
const overly_modal_add_District = document.querySelector(".modal-add-District .inner-modal")

window.btn_add_District = async (index)=>{
  modal_add_District.classList.add("active");
  modal_add_District.setAttribute("data-index",index)

}


  overly_modal_add_District.addEventListener("click", (e) => {
      if (e.target.className === "inner-modal")
      modal_add_District.classList.remove("active");
  });
  btnclose_District.addEventListener("click", () =>{
    modal_add_District.classList.remove("active");
  })
const submitdis = document.querySelector("#submitdis")
submitdis.addEventListener('click',async()=>{
  const name =  document.querySelector("#namedis").value
  const data={name}
  await addDistrict(data)
  location.reload()
})



