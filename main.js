// ================= Courses Enroll =================
function enrollCourse(course){
    alert(`You have enrolled in ${course}!`);
}

// ================= Login Validation =================
const loginForm = document.getElementById('loginForm');
if(loginForm){
    loginForm.addEventListener('submit', function(e){
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const error = document.getElementById('loginError');

        if(!email || !password){
            error.textContent = "All fields are required.";
            return;
        }

        alert("Login successful!");
        loginForm.reset();
        error.textContent = "";
    });
}

// ================= Contact Validation =================
const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.addEventListener('submit', function(e){
        e.preventDefault();
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        const error = document.getElementById('contactError');
        const success = document.getElementById('contactSuccess');

        if(!name || !email || !message){
            error.textContent = "All fields are required.";
            success.textContent = "";
            return;
        }

        error.textContent = "";
        success.textContent = "Message sent successfully!";
        contactForm.reset();
    });
}
