import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},t=document.querySelector("form"),s=localStorage.getItem("feedback-form-state");s!==null&&(e.email=JSON.parse(s).email,t.elements.email.value=e.email,e.message=JSON.parse(s).message,t.elements.message.value=e.message);t.addEventListener("input",a=>{a.target.name==="email"?(e.email=a.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))):a.target.name==="message"&&(e.message=a.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(e)))});const l=document.querySelector(".feedback-form");l.addEventListener("submit",a=>{a.preventDefault(),e.email===""||e.message===""?alert("Fill please all fields"):(console.log(e),l.reset(),e.email="",e.message="",t.elements.email.value="",t.elements.message.value="",localStorage.clear())});
//# sourceMappingURL=2-form.js.map
