function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const buttonImg = document.querySelector('.toggle-btn img');
  
    if (sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      buttonImg.src = './Images/expandArrow.png';
      document.querySelector('.title').style.display = 'none';
    } else {
      sidebar.classList.add('open');
      buttonImg.src = './Images/collapse.png';
      document.querySelector('.title').style.display = 'block';
    }
  }
  


async function updateContent() {
    try {
        // Fetch the JSON data
        const response = await fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json');
        const data = await response.json();

        // Update main content
        document.querySelector('.t1').textContent = data.title;
        document.querySelector('.m1').textContent = data.tasks[0].task_title;
        document.querySelector('.c1').textContent = data.tasks[0].task_description;


        // Update project block
        const projectBlock = document.querySelector('.project_block');
        projectBlock.querySelector('.p1').textContent = data.title;
        projectBlock.querySelector('.d1').innerHTML = `<b>Description:</b>${data.tasks[0].assets[0].asset_description}`;
        projectBlock.querySelector('#youtube-video').src = data.tasks[0].assets[0].asset_content;
        

        // Update threadbuild block
        const threadbuildBlock = document.querySelector('.threadbuild_block');
        threadbuildBlock.querySelector('.p2').textContent = data.tasks[0].assets[1].asset_title;
        threadbuildBlock.querySelector('.d2').innerHTML = `<b>Description:</b>${data.tasks[0].assets[1].asset_description}`;
        
        // Update pointers block
        const pointersBlock = document.querySelector('.pointers_block');
        pointersBlock.querySelector('.p3').textContent = data.tasks[0].assets[2].asset_title;
        pointersBlock.querySelector('.d3').innerHTML = `<b>Description:</b>${data.tasks[0].assets[2].asset_description}`;
        
        // Update sa_block
        const saBlock = document.querySelector('.sa_block');
        saBlock.querySelector('.p4').textContent = data.tasks[0].assets[3].asset_title;
        saBlock.querySelector('.d4').innerHTML = `<b>Description:</b>${data.tasks[0].assets[3].asset_description}`;
        saBlock.querySelector('.i1').textContent = "The 4SA Method ,How to bring a idea into progress?";
        // You can add more updates to the saBlock content here if needed
        
    } catch (error) {
        console.error('Error fetching or updating content:', error);
    }
}


updateContent();
