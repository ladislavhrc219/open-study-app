console.log("hello")

const link = "http://leads.beta.openstudycollege.info/getTopLeads";
console.log(link, 'FUCK YOU');
// console.log(fetchUrl);
// const newElement = document.querySelector(".students");
const profilePhoto = document.querySelector(".img");
let infoButton = document.querySelector(".infoButton");



let statusPhotos = 1;
function showPhotos(){
    if(statusPhotos == 1){
        document.getElementById('photos').style.display="none";
        statusPhotos = 0;

        // document.getElementById("myDIV").style.transform = "rotategit branch -M main(7deg)";


        // document.getElementById('showProfile').style.transform =  "rotate(90deg)";
        document.getElementById('rotate-arrow').style.transform =  "rotate(90deg)";
        
    }else if (statusPhotos == 0) {
        document.getElementById('photos').style.display="flex";
        console.log("photos"); 
        statusPhotos = 1;
        document.getElementById('rotate-arrow').style.transform =  "rotate(0deg)";




    }
}

// let statusProfile = 1;
// function showPhotos(){
//     if(statusCode == 1){
//         document.getElementById('photos').style.display="none";
//         statusCode = 0;



//         document.getElementById('rotate-arrow').style.transform =  "rotate(90deg)";
        
//     }else if (statusCode == 0) {
//         document.getElementById('photos').style.display="flex";
//         console.log("photos"); 
//         statusCode = 1;
//         document.getElementById('rotate-arrow').style.transform =  "rotate(0deg)";




//     }
// }

async function getStudents(){
    const fetchingData = await fetch(link);
    const studentData = await fetchingData.json();
    
    let output ="";

    studentData.map(student => 
        
        {(
            output +=
            `

            
            <div class="main-container"> 
            <div class="student-info-background">
            
            <div class="x-heroicon" id="showProfile">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>

</div>
            </div>
            
            
            
            <div class="student-info"> 
                       
            
                    <div class="profile-photo">
                    

                                <svg class="check-circle-heroicon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                
                </div>
          
              <h4>  ${student.name} </h4> 
              <h6>  STUDENT </h6>
           

            <button class="student-id">  ID: ${student.id} </button>
            
            </div> 

            
            
            <br>

                <div class="enrolment-bar"> 


                    <div class="status" > 
                    <h6> Complete  </h6> 
                    
                    <h5> ENROLMENT STATUS  </h5> 
                    
                    </div>
                    <p class="pipe"> | </p> 
                    <div class="status"> 
                        <h6> 3  </h6> 
                        
                        <h5> COMPLETED COURSES  </h5> 

                    </div>

                </div> 


            <div class="contact-details-container" > 
                

                <div class="contact-container">

                    <h6> CONTACT DETAILS </h6> 
                    <h6> Email: ${student.email}   </h6> 
                    <h6> Tel: ${student.telephone}   </h6> 
      
                </div>

                <div class="about-me-container"> 
                
                    <h6> ABOUT ME </h6> 
                    <h6>Lorem Ipsum raset sheets m Ipsum raset
                    raset raset raset raset raset
                    raset 
                    raset raset raset raset
                    sheets m Ipsum raset sheets m Ipsum raset sheets cont</h6>
                
                
                </div>
                
            </div>


                <div class="current-course-container" > 

                    <div class="hat-container">

                    <svg class="neonglow" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>

                    </div>
                    
                    
                    <div class="coursecontainer"> 
                

                    <h5> Current Course: </h5> 


                    <h6> ${student.course_title} </h6>

                    </div>

                    <div class="arrow-container">

                    <svg class="arrow-currentcourse" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>

                    </div>
                    
                </div>

                
                    <div  class="myphotos-container">
                        
                    
                        <div class="myphotos"> 
                                    <h5> My Photos </h5>

                                <svg class="arrow-myphotos" id="rotate-arrow" onclick="showPhotos()" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>


                                
                        </div>

                        <div  id="photos" class="photoscontainer">


                            <div class="photosdiv1">  



                            </div>
                                
                            <div class="photosdiv2">  


                                <div class="single-photo">
                                
                                </div> 
                                
                                <div class="double-photos" >
                                
                                    <div class="single-img" > </div>

                                    <div class="single-img-wth-icon"> 

                                    <svg class="rightarrow-heroicon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                  </svg>                                      
                                       
                                       
                                    </div> 
                                    
                                

                                
                                </div>
                               

                                    

                            </div>  
                        
                        
                        
                        </div> 
                        

                        


                    </div>

                    

               
           
            </div>
            `
            
            
        
            
            )})



    document.getElementById('studentCards').innerHTML = output;
};

getStudents();

