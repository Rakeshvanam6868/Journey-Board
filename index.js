function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const button = document.querySelector('.toggle-btn');

    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        button.textContent = 'Expand';
    } else {
        sidebar.classList.add('open');
        button.textContent = 'Collapse';
    }
}

// Function to fetch and update content based on JSON data
async function updateContent() {
    try {
        // Fetch the JSON data
        const response = await fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json');
        const data = await response.json();

        // Update main content
        document.querySelector('.main .top__content h1').textContent = data.title;
        document.querySelector('.main .container h1').textContent = data.tasks[0].task_title;
        document.querySelector('.main .container p').textContent = data.tasks[0].task_description;
        //youtube
        const youtubeIframe = projectBlock.querySelector('#youtube-video');
        youtubeIframe.src = data.tasks[0].asset_content; 

        // Update project block
        const projectBlock = document.querySelector('.project_block');
        projectBlock.querySelector('.heading h2').textContent = data.title;
        projectBlock.querySelector('.description').innerHTML = `<b>Description:</b>${data.tasks[0].assets[0].asset_description}`;
        projectBlock.querySelector('.youtube img').src = data.tasks[0].assets[0].asset_content;

        // Update threadbuild block
        const threadbuildBlock = document.querySelector('.threadbuild_block');
        threadbuildBlock.querySelector('.heading h2').textContent = data.tasks[0].assets[1].asset_title;
        threadbuildBlock.querySelector('.description').innerHTML = `<b>Description:</b>${data.tasks[0].assets[1].asset_description}`;
        
        // Update pointers block
        const pointersBlock = document.querySelector('.pointers_block');
        pointersBlock.querySelector('.heading h2').textContent = data.tasks[0].assets[2].asset_title;
        pointersBlock.querySelector('.description').innerHTML = `<b>Description:</b>${data.tasks[0].assets[2].asset_description}`;
        
        // Update sa_block
        const saBlock = document.querySelector('.sa_block');
        saBlock.querySelector('.heading h2').textContent = data.tasks[0].assets[3].asset_title;
        saBlock.querySelector('.description').innerHTML = `<b>Description:</b>${data.tasks[0].assets[3].asset_description}`;
        saBlock.querySelector('.intro_content p').textContent = "The 4SA Method ,How to bring a idea into progress?";
        // You can add more updates to the saBlock content here if needed
        
    } catch (error) {
        console.error('Error fetching or updating content:', error);
    }
}

// Call the function to update content
updateContent();
