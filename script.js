// JavaScript object with all portfolio data
const portfolioData = {
    name: "Tayyab Chattah",
    title: "Web Developer | Mobile Dev | Programmer",
    about: {
        description: "Hello! I’m Tayyab Chattah, a passionate web developer with experience in creating responsive and user-friendly websites. I enjoy solving problems and building projects from scratch.",
        image: "your-image.jpg", // Replace with your actual image path
        video: "your-video.mp4"  // Replace with your actual video path
    },
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "Information Technology University",
            graduationYear: "2025",
            courses: ["Web Development", "Computer programming fundamentals ", "Algorithms", "Databases"]
        }
    ],
    projects: [
        {
            title: "Covid App",
            description: "Used flutter and rest api to track covid cases"
        },
        {
            title: "Weather App",
            description: "Used api to predict weather"
        },
        {
            title: "Text Recongnition system",
            description: "Recongnizes number and prediction system"
        }
    ],
    contact: {
        email: "tayyabchattaah72@gmail.com",
        phone: "03447304019",
        linkedin: "linkedin.com/in/TayyabChattah"
    },
    footer: "© 2024 Tayyab Chattah. All rights reserved."
};

// Populate header
document.getElementById('name').textContent = portfolioData.name;
document.getElementById('title').textContent = portfolioData.title;

// Populate about section
document.getElementById('about-description').textContent = portfolioData.about.description;
document.getElementById('profile-image').src = portfolioData.about.image;
document.getElementById('intro-video').src = portfolioData.about.video;

// Populate education section
const educationList = document.getElementById('education-list');
portfolioData.education.forEach(edu => {
    const li = document.createElement('li');
    li.textContent = `${edu.degree} - ${edu.institution}, ${edu.graduationYear}`;
    educationList.appendChild(li);
    
    const courseList = document.createElement('ul');
    edu.courses.forEach(course => {
        const courseLi = document.createElement('li');
        courseLi.textContent = course;
        courseList.appendChild(courseLi);
    });
    educationList.appendChild(courseList);
});

// Populate projects section
const projectsList = document.getElementById('projects-list');
portfolioData.projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-card');

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;
    projectDiv.appendChild(projectTitle);

    const projectDesc = document.createElement('p');
    projectDesc.textContent = project.description;
    projectDiv.appendChild(projectDesc);

    projectsList.appendChild(projectDiv);
});


const contactInfo = document.getElementById('contact-info');
const emailLi = document.createElement('li');
emailLi.textContent = `Email: ${portfolioData.contact.email}`;
contactInfo.appendChild(emailLi);

const phoneLi = document.createElement('li');
phoneLi.textContent = `Phone: ${portfolioData.contact.phone}`;
contactInfo.appendChild(phoneLi);

const linkedinLi = document.createElement('li');
linkedinLi.innerHTML = `LinkedIn: <a href="#">${portfolioData.contact.linkedin}</a>`;
contactInfo.appendChild(linkedinLi);


document.getElementById('footer').textContent = portfolioData.footer;
