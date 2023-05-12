window.addEventListener('DOMContentLoaded', function() {
    // 탭 클릭 시 해당 섹션의 내용을 보여주는 함수
    function showSection(sectionId) {
        // 모든 섹션 숨김
        var sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            section.style.display = 'none';
        });
        
        // 선택한 섹션 보여줌
        var selectedSection = document.querySelector(sectionId);
        selectedSection.style.display = 'block';
    }
    
    // 초기 로딩 시 첫 번째 섹션 보여줌
    showSection('section:first-of-type');
    
    // 탭 클릭 시 해당 섹션 보여줌
    var tabs = document.querySelectorAll('.tabs a');
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            var sectionId = this.getAttribute('href');
            showSection(sectionId);
        });
    });
});

// JavaScript code
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
        const imageUrl = this.querySelector('img').dataset.imageUrl;

        const modal = document.createElement('div');
        modal.classList.add('modal');
        
        const modalImage = document.createElement('img');
        modalImage.src = imageUrl;
        
        modal.appendChild(modalImage);
        document.body.appendChild(modal);

        modal.addEventListener('click', function() {
            modal.classList.remove('active');
            modal.remove();
        });
        
        setTimeout(function() {
            modal.classList.add('active');
        }, 50);
    });
});
