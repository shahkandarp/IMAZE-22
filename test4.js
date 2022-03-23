const main = document.querySelector('.main');
const obj={
"core members":[{name:"Haripriya Chivukula",info:"core coordinator"},{name:"Sagar Gohil",info:"core coordinator"},{name:"Akshit Prajapati",info:"core coordinator"}],
"Web & app team":[{name:"Anubhav Shriwastava",info:"web coordinator"},{name:"Jyot Prajapati",info:"app coordinator"},{name:"Kandarp Shah",info:"web coordinator"}],
"documentation":[{name:"Bhoomi Patel",info:"documentation head"},{name:"Hetvi Shah",info:"documentation head"}],
"Graphic design":[{name:"Prabdeep Singh Ghatora",info:"design head"},{name:"Anurag Sen",info:"design head"}],
"Department coordinator":[{name:"Hemang Barai",info:"civil department"},{name:"Nidhi Patel",info:"civil department"},{name:"Dipti Rathod",info:"chemical department"},{name:"Avni Chavda",info:"chemical department"},{name:"Dhyey Dodiya",info:"computer department"},{name:"Dhruvi Vadariya",info:"computer department"},{name:"Rishi Sha",info:"EC department"},{name:"Richa Mishra",info:"EC department"},{name:"Helly Parikh",info:"electrical department"},{name:"Dhaval Kalathiya",info:"electrical department"},{name:"Kanti Patel",info:"IT department"},{name:"Dharvi Kaneriya",info:"IT department"},{name:"Shyama Kareliya",info:"Mechatronics department"},{name:"Dhruvil Nakum",info:"mechatronics department"},{name:"Harsh Joshi",info:"mechanical department"},{name:"Sarang Pandya",info:"mechanical department"}],
"Publicity":[{name:"Parth Thakar",info:"coordinator"},{name:"Krunalsinh Rana",info:"coordinator"},{name:"Darpan Parekh",info:"coordinator"}],
"Logistics":[{name:"Dhruv Chadderwala",info:"logistics coordinator"},{name:"Kunal Rajpurohit",info:"logistics coordinator"},{name:"Nadir Ali Khoja",info:"logistics coordinator"},{name:"Vrund Thakkar",info:"logistics coordinator"}],
"VFX":[{name:"Yash Ranpariya",info:"head"}],
"Decoration":[{name:"Darshan Modi",info:"coordinator"},{name:"Vanshika Patel",info:"coordinator"},{name:"Ayushi Upadhyay",info:"coordinator"},{name:"Prashant Acharya",info:"coordinator"}]}

createRow = (title,data)=>{
    const row = document.createElement('div');
    row.classList.add('row');
    row.innerHTML=`<div class="title"><p>${title}</p></div>`
    data.forEach(e => {
        const card = document.createElement('div');
        card.classList.add('show');
        card.innerHTML=`
        
        <img src="assets/${e.name}.jpg">
        <div class="data">
            <p>${e.name}</p>
            <p>${e.info}</p>
        </div>
        
        `;
        row.appendChild(card);

    });
    main.appendChild(row);
}
for(o in obj)
{
    createRow(o,obj[o]);
}

//scroll trigger thanks medium.blogs ^_^


function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
      addObserver(el, options)
    })
  }
  function addObserver(el, options) {
    // Check if `IntersectionObserver` is supported
    if(!('IntersectionObserver' in window)) {
      // Simple fallback
      // The animation/callback will be called immediately so
      // the scroll animation doesn't happen on unsupported browsers
      if(options.cb){
        options.cb(el)
      } else{
        entry.target.classList.add('active')
      }
      // We don't need to execute the rest of the code
      return
    }
    let observer = new IntersectionObserver((entries, observer) =>{
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          if(options.cb) {
            options.cb(el)
          } else{
            entry.target.classList.add('active')
          }
          observer.unobserve(entry.target)
        }
      })
    }, options)
    observer.observe(el)
  }
  scrollTrigger('.title');
//   scrollTrigger('.data')