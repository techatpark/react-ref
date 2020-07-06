(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{75:function(e,a,t){e.exports=t.p+"static/media/404.8b7b0b3c.gif"},76:function(e,a,t){e.exports=t(86)},86:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(71),c=t.n(r),m=t(6),s=t(2),i=function(){return l.a.createElement("div",{className:"col"},"Welcome to CRUD")},o=t(10),d=t(31),u=t(8),p=t(23),E=t(67),b=function(e,a){switch(a.type){case"REMOVE_EMPLOYEE":return Object(o.a)(Object(o.a)({},e),{},{employees:e.employees.filter((function(e){return e.id!==a.payload}))});case"ADD_EMPLOYEES":return Object(o.a)(Object(o.a)({},e),{},{employees:[].concat(Object(E.a)(e.employees),[a.payload])});case"EDIT_EMPLOYEE":var t=a.payload,n=e.employees.map((function(e){return e.id===t.id?t:e}));return Object(o.a)(Object(o.a)({},e),{},{employees:n});case"ADD_DEPARTMENT":return Object(o.a)(Object(o.a)({},e),{},{departments:[].concat(Object(E.a)(e.departments),[a.payload])});default:return e}},f={employees:[{id:1,name:"Sathish",location:"Madurai",designation:"API Dev"},{id:2,name:"Saro",location:"Coimbatore",designation:"UI Dev"},{id:3,name:"Thiru",location:"Ramnad",designation:"DevOps"}],departments:[{id:1,name:"Designer",branch:"summa"}]},v=Object(n.createContext)(f),y=function(e){var a=e.children,t=Object(n.useReducer)(b,f),r=Object(d.a)(t,2),c=r[0],m=r[1];return l.a.createElement(v.Provider,{value:{employees:c.employees,departments:c.departments,addDepartment:function(e){m({type:"ADD_DEPARTMENT",payload:e})},removeEmployee:function(e){m({type:"REMOVE_EMPLOYEE",payload:e})},addEmployee:function(e){m({type:"ADD_EMPLOYEES",payload:e})},editEmployee:function(e){m({type:"EDIT_EMPLOYEE",payload:e})}}},a)};function g(e){var a=e.history,t=e.match.params.id,r=!t,c=Object(n.useContext)(v),s=c.addEmployee,i=c.employees,E=c.editEmployee,b=Object(n.useState)({}),f=Object(d.a)(b,2),y=f[0],g=f[1],N=Object(n.useState)(!1),h=Object(d.a)(N,2),O=h[0],j=h[1],x=p.a().shape({name:p.b().required("Name is required"),location:p.b().required("Location is required"),designation:p.b().required("Designation is required")});return Object(n.useEffect)((function(){if(!r){var e=i.find((function(e){return e.id===parseInt(t)}));g(e)}j(!0)}),[O,i,t,r]),O&&l.a.createElement(u.d,{initialValues:r?{name:"",location:"",designation:""}:y,validationSchema:x,onSubmit:function(e,t){var n=t.setStatus,l=t.setSubmitting;n(),r?function(e,t){s(Object(o.a)(Object(o.a)({},e),{},{id:i.length+1})),t(!0),a.push(".")}(e,l):function(e,t){E(e),t(!0),a.push("..")}(e,l)}},(function(e){var a=e.errors,t=e.touched,n=e.isSubmitting;return l.a.createElement(u.c,{className:"p-4"},l.a.createElement("h1",null,r?"Add employee":"Edit employee"),l.a.createElement("div",{className:"form-row pb-3"},l.a.createElement("div",{className:"form-group col-7"},l.a.createElement("label",null,"Name"),l.a.createElement(u.b,{name:"name",type:"text",className:"form-control"+(a.name&&t.name?" is-invalid":"")}),l.a.createElement(u.a,{name:"name",component:"div",className:"invalid-feedback"}))),l.a.createElement("div",{className:"form-row pb-3"},l.a.createElement("div",{className:"form-group col-7"},l.a.createElement("label",null,"Location"),l.a.createElement(u.b,{name:"location",type:"text",className:"form-control"+(a.location&&t.location?" is-invalid":"")}),l.a.createElement(u.a,{name:"location",component:"div",className:"invalid-feedback"}))),l.a.createElement("div",{className:"form-row pb-3"},l.a.createElement("div",{className:"form-group col-7"},l.a.createElement("label",null,"Designation"),l.a.createElement(u.b,{name:"designation",type:"text",className:"form-control"+(a.designation&&t.designation?" is-invalid":"")}),l.a.createElement(u.a,{name:"designation",component:"div",className:"invalid-feedback"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"submit",disabled:n,className:"btn btn-primary"},n&&l.a.createElement("span",{className:"spinner-border spinner-border-sm mr-1"}),"Save"),l.a.createElement(m.b,{to:"/",className:"btn btn-link"},"Cancel")))}))}var N=function(){var e=Object(n.useContext)(v),a=e.employees,t=e.removeEmployee,r=e.editEmployee;return l.a.createElement(n.Fragment,null,l.a.createElement("ul",{class:"nav justify-content-end"},l.a.createElement("li",{class:"nav-item"},l.a.createElement(m.b,{to:"/employee/add"},"Create"))),a.length>0?l.a.createElement(n.Fragment,null,l.a.createElement("ul",{class:"list-group list-group-flush"},a.map((function(e){return l.a.createElement("div",{className:"list-group-item",key:e.id},l.a.createElement("div",{class:"d-flex w-100 justify-content-between"},l.a.createElement("h5",{class:"mb-1"},e.name),l.a.createElement("small",null,l.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},l.a.createElement(m.b,{to:"/employee/edit/".concat(e.id)},l.a.createElement("button",{type:"button",class:"btn btn-outline-secondary"},l.a.createElement("i",{class:"far fa-edit",onClick:function(){return r(e.id)}}))),l.a.createElement("button",{type:"button",class:"btn btn-outline-secondary"},l.a.createElement("i",{class:"far fa-trash-alt",onClick:function(){return t(e.id)}}))))),l.a.createElement("small",null,e.designation))})))):l.a.createElement("p",{className:"text-center"},"No data"))},h=function(){var e=Object(n.useContext)(v),a=e.departments,t=e.removeDepartment,r=e.editDepartment;return l.a.createElement(n.Fragment,null,l.a.createElement("ul",{class:"nav justify-content-end"},l.a.createElement("li",{class:"nav-item"},l.a.createElement(m.b,{to:"/department/add"},"Create"))),a.length>0?l.a.createElement(n.Fragment,null,l.a.createElement("ul",{class:"list-group list-group-flush"},a.map((function(e){return l.a.createElement("div",{className:"list-group-item",key:e.id},l.a.createElement("div",{class:"d-flex w-100 justify-content-between"},l.a.createElement("h5",{class:"mb-1"},e.name),l.a.createElement("small",null,l.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},l.a.createElement(m.b,{to:"/department/edit/".concat(e.id)},l.a.createElement("button",{type:"button",class:"btn btn-outline-secondary"},l.a.createElement("i",{class:"far fa-edit",onClick:function(){return r(e.id)}}))),l.a.createElement("button",{type:"button",class:"btn btn-outline-secondary"},l.a.createElement("i",{class:"far fa-trash-alt",onClick:function(){return t(e.id)}}))))),l.a.createElement("small",null,e.designation))})))):l.a.createElement("p",{className:"text-center"},"No data"))};function O(e){var a=e.history,t=e.match.params.id,r=!t,c=Object(n.useContext)(v),s=c.addDepartment,i=c.departments,E=c.editDepartment,b=Object(n.useState)({}),f=Object(d.a)(b,2),y=f[0],g=f[1],N=Object(n.useState)(!1),h=Object(d.a)(N,2),O=h[0],j=h[1],x=p.a().shape({name:p.b().required("Name is required"),branch:p.b().required("branch is required")});return Object(n.useEffect)((function(){if(!r){var e=i.find((function(e){return e.id===parseInt(t)}));g(e)}j(!0)}),[O,i,t,r]),O&&l.a.createElement(u.d,{initialValues:r?{name:"",branch:""}:y,validationSchema:x,onSubmit:function(e,t){var n=t.setStatus,l=t.setSubmitting;n(),console.log("success",e),r?function(e,t){s(Object(o.a)(Object(o.a)({},e),{},{id:i.length+1})),t(!0),a.push(".")}(e,l):function(e,t){E(e),t(!0),a.push("..")}(e,l)}},(function(e){var a=e.errors,t=e.touched,n=e.isSubmitting;return l.a.createElement(u.c,{className:"p-4"},l.a.createElement("h1",null,r?"Add Department":"Edit Department"),l.a.createElement("div",{className:"form-row pb-3"},l.a.createElement("div",{className:"form-group col-7"},l.a.createElement("label",null,"Name"),l.a.createElement(u.b,{name:"name",type:"text",className:"form-control"+(a.name&&t.name?" is-invalid":"")}),l.a.createElement(u.a,{name:"name",component:"div",className:"invalid-feedback"}))),l.a.createElement("div",{className:"form-row pb-3"},l.a.createElement("div",{className:"form-group col-7"},l.a.createElement("label",null,"Branch"),l.a.createElement(u.b,{name:"branch",type:"text",className:"form-control"+(a.branch&&t.branch?" is-invalid":"")}),l.a.createElement(u.a,{name:"branch",component:"div",className:"invalid-feedback"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"submit",disabled:n,className:"btn btn-primary"},n&&l.a.createElement("span",{className:"spinner-border spinner-border-sm mr-1"}),"Save"),l.a.createElement(m.b,{to:"/department",className:"btn btn-link"},"Cancel")))}))}var j=function(e){var a=e.children;return l.a.createElement(n.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{href:"/",className:"navbar-brand d-flex align-items-center"},"React CRUD"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/employee",className:"nav-link active"},"Employees")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/department",className:"nav-link active"},"Departments"))))),l.a.createElement("ul",{className:"navbar-nav ml-sm-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link active",href:"https://github.com/twbs",rel:"noopener noreferrer",target:"_blank","aria-label":"GitHub"},l.a.createElement("i",{className:"fas fa-power-off"}))))),l.a.createElement("div",{className:"container-fluid mt-3 vh-100 pb-5"},l.a.createElement("section",{className:"row mt-5 p-2"},a)))},x=t(75),D=t.n(x);function k(){return l.a.createElement("div",null,l.a.createElement("img",{alt:"",src:D.a}),l.a.createElement("p",{style:{textAlign:"center"}},l.a.createElement(m.b,{to:"/"},"Go to Home ")))}var S=function(){return l.a.createElement(y,null,l.a.createElement(j,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",component:i,exact:!0}),l.a.createElement(s.a,{path:"/employee",component:N,exact:!0}),l.a.createElement(s.a,{path:"/employee/add",component:g,exact:!0}),l.a.createElement(s.a,{path:"/employee/edit/:id",component:g,exact:!0}),l.a.createElement(s.a,{path:"/department",component:h,exact:!0}),l.a.createElement(s.a,{path:"/department/add",component:O,exact:!0}),l.a.createElement(s.a,{path:"*",component:k}))))};c.a.render(l.a.createElement(m.a,{basename:"/react-ref/"},l.a.createElement(S,null)),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.54d9bceb.chunk.js.map